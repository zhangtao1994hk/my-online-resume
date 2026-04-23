# modules/cloudflare-worker/variables.tf
variable "account_id" { type = string }
variable "zone_id"    { type = string }
variable "script_name" { type = string }
variable "script_path" { type = string }
variable "hostname"    { type = string }

