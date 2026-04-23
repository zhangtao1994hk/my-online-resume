terraform {
  required_version = ">= 1.5.0"
 
  backend "gcs" {
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

provider "github" {
  token = var.github_token
  owner = "zhangtao1994hk"
}

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}

# 调用我们刚才写的模块
module "resume_site" {
  source      = "./modules/cloudflare-worker"
  
  account_id  = var.cloudflare_account_id
  zone_id     = var.cloudflare_zone_id
  script_name = "resume-worker"
  script_path = "resume.js"
  hostname    = "resume.zhangtao1994hk.asia"
}

# 管理 GitHub 仓库（如果你想保留的话）
resource "github_repository" "resume_repo" {
  name        = "my-online-resume"
  # tfsec:ignore:github-repositories-private
  visibility  = "public"
  vulnerability_alerts = true
}

# --- 核心：状态平移，防止删除重建 ---
moved {
  from = cloudflare_workers_script.resume_worker
  to   = module.resume_site.cloudflare_workers_script.this
}

moved {
  from = cloudflare_workers_domain.resume_custom_domain
  to   = module.resume_site.cloudflare_workers_domain.this
}
