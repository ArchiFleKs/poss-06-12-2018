terragrunt = {
  include {
    path = "${find_in_parent_folders()}"
  }

  terraform {
    source = "../../../cloud-infra/aws/terraform/modules//eks"

    after_hook "kubeconfig" {
      commands = ["apply"]
      execute = ["bash","-c","terraform output kubeconfig 2>/dev/null > ${get_tfvars_dir()}/kubeconfig"]
    }
    after_hook "configmap" {
      commands = ["apply"]
      execute = ["bash","-c","terraform output config_map_aws_auth 2>/dev/null | kubectl --kubeconfig ${get_tfvars_dir()}/kubeconfig apply -f -"]
    }

  }

}

//
// [provider]
//
aws-region = "eu-west-1"

//
// [dns]
//
domain_name = "archifleks.net"
subdomain_name = "showcase.archifleks.net"

//
// [kubernetes]
//
cluster-name = "showcase"

node-pools = [
  {
    name = "default"
    min_size = 3
    max_size = 9
    desired_capacity = 3
    instance_type = "m4.large"
    key_name = "ocelot"
    volume_size = 30
    volume_type = "gp2"
    autoscaling = "enabled"
  },
]
