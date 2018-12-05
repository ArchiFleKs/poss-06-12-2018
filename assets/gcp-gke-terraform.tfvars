terragrunt = {
  include {
    path = "${find_in_parent_folders()}"
  }

  terraform {
    source = "/home/klefevre/Git/Osones/cloud-infra/gcp/terraform/modules//gke"
  }
}

project = "poss-12-2018"
cluster_name = "poss-12-2018"
node_count = 1
max_node_count = 3
min_node_count = 1
node_count = 1
admin_username = "admin"
machine_type = "n1-standard-1"
disk_size_gb = "100"
master_zone = "europe-west2-a"
additional_zones = [
  "europe-west2-b",
  "europe-west2-c"
  ]
min_master_version = "1.11.3-gke.18"
initial_default_pool_name = "unused-default-pool"
default_pool_name = "default-pool"
daily_maintenance_window_start_time = "00:00"
env = "poss"
