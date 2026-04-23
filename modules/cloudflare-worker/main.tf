terraform {
  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4.0"
    }
  }
}

resource "cloudflare_workers_script" "this" {
  account_id         = var.account_id
  name               = var.script_name
  content            = file(var.script_path)
  compatibility_date = "2024-04-01"
}

resource "cloudflare_workers_domain" "this" {
  account_id = var.account_id
  zone_id    = var.zone_id
  hostname   = var.hostname
  service    = cloudflare_workers_script.this.name
}
