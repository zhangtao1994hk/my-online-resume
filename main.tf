terraform {
  backend "gcs"{
    bucket = "zhangtao-tf-state"
    prefix = "terraform/resume"

  }
  required_providers {
    github = {
      source  = "integrations/github"
      version = "~> 5.0"
    }
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4.0"
    }
  }
}


variable "github_token" {
  description = "GitHub Personal Access Token"
  type        = string
  sensitive   = true
}

variable "cloudflare_api_token" {
  description = "Cloudflare API Token"
  type        = string
  sensitive   = true
}

variable "cloudflare_account_id" {
  type = string
}

variable "cloudflare_zone_id" {
  type = string
}

provider "github" {
  token = var.github_token
}

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}


resource "github_repository" "resume_repo" {
  name        = "my-online-resume"
  description = "My SRE Resume powered by Terraform and Cloudflare Workers"
  visibility  = "public"
  auto_init   = true
}

resource "cloudflare_workers_script" "resume_worker" {
  account_id = var.cloudflare_account_id
  name       = "resume-worker"
  content    = file("resume.js")

  compatibility_date = "2024-04-01"

}

resource "cloudflare_workers_domain" "resume_custom_domain" {
  account_id = var.cloudflare_account_id
  zone_id    = var.cloudflare_zone_id
  hostname   = "resume.zhangtao1994hk.asia"
  service    = cloudflare_workers_script.resume_worker.name
}


/* 
resource "cloudflare_record" "resume_dns" {
  zone_id = var.cloudflare_zone_id
  name    = "resume"
  content = "${cloudflare_workers_script.resume_worker.name}.zhangtao1994hk.workers.dev"
  type    = "CNAME"
  proxied = true
}
*/
