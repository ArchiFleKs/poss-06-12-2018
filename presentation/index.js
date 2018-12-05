// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  GoToAction,
  ComponentPlayground,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Markdown,
  MarkdownSlides,
  Quote,
  Slide,
  SlideSet,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Table,
  Text
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Require CSS
require("normalize.css");
require('prismjs/components/prism-bash');
require('prismjs/components/prism-yaml');
require('prismjs/components/prism-ini');
require('prismjs/themes/prism-tomorrow.css');

const images = {
  awcc_h: require("../assets/awcc_h.png"),
  osones: require("../assets/OSONES_LOGO.png"),
  aws_v: require("../assets/aws_v.png"),
  aws_h: require("../assets/aws_h.png"),
  azure_h: require("../assets/azure_h.png"),
  gcp_h: require("../assets/gcp_h.png"),
  osones_nfw: require("../assets/OSONES_LOGO_NOFRAME_W.png"),
  osones_w: require("../assets/OSONES_LOGO_W.png"),
  osones_e: require("../assets/logo-osones-expertise.png"),
  osones_pnf: require("../assets/OSONES_PICTO_NOFRAME.png"),
  openstack_h: require("../assets/OpenStack-Logo-Horizontal.png"),
  openstack_v: require("../assets/OpenStack-Logo-Vertical.png"),
  swarm: require("../assets/swarm.png"),
  cloudwatch: require("../assets/cloudwatch.png"),
  cloudwatch_k8s1: require("../assets/cloudwatch_k8s1.png"),
  cloudwatch_k8s2: require("../assets/cloudwatch_k8s2.png"),
  mesos: require("../assets/mesos-logo.png"),
  kubernetes: require("../assets/kubernetes-logo.png"),
  kubernetes_v: require("../assets/kubernetes_v.png"),
  kubernetes_h: require("../assets/kubernetes_h.png"),
  traefik_v: require("../assets/traefik_v.png"),
  dcos: require("../assets/dcos.png"),
  come: require("../assets/come.gif"),
  morbier: require("../assets/morbier.png"),
  infra_ref: require("../assets/infra_ref.png")
};

preloader(images);

const theme = createTheme({
  primary: "#b50000",
  secondary: "white",
  tertiary: "#076678",
  quaternary: "#cecece"
  },
  {
  primary: {
      name: 'Montserrat',
      googleFont: true,
      styles: ['400', '700']
  },
  secondary: "Helvetica",
  monospace: {
      name: 'Fira Mono',
      googleFont: true,
      styles: ['400', '700']
  }
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={[]} progress="bar" transitionDuration={500} theme={theme} bgColor="secondary">
        <Slide bgColor="secondary">
          <Heading size={1} fit caps textColor="primary">
            Kubernetes
          </Heading>
          <Heading size={1} fit caps textColor="primary">
            Deployment Feedback
          </Heading>
          <Text margin="40px auto auto" caps textColor="tertiary">
            Where to deploy...
          </Text>
          <Text caps textColor="tertiary">
            ...and the why and how.
          </Text>
          <Layout>
            <Fill>
              <Image src={images.kubernetes_h.replace("/", "")} margin="1.5em auto auto" height="80px"/>
            </Fill>
          </Layout>
          <Heading size={1} fit caps margin="50px auto auto" textColor="tertiary">
            Kevin Lefevre - Paris Open Source Summit - 06/12/2018
          </Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={2} textColor="primary">
            whoami
          </Heading>
          <Text margin="40px auto auto" textColor="tertiary">Kevin Lefevre<Link textColor="primary" href="https://twitter.com/archifleks"> @ArchiFleKs</Link></Text>
          <Text margin="40px auto auto" textColor="tertiary">Cloud and Devops Engineer<Link textColor="primary" href="https://twitter.com/osones"> @alterway</Link></Text>
          <Link href="https://osones.com"><Image src={images.awcc_h.replace("/", "")} margin="20px auto auto" height="80px"/></Link>
          <Text margin="20px auto auto" textColor="tertiary">I work on container infrastructure</Text>
          <Text margin="40px auto auto" textColor="tertiary">I ❤ K8s</Text>
        </Slide>
        <Slide bgColor="secondary">
          <Appear>
          <Heading size={4} margin="30px auto auto" caps textColor="primary">
            Running Kubernetes
          </Heading>
          </Appear>
          <Appear>
          <Heading size={4} margin="30px auto auto" caps textColor="primary">
            Building applications
          </Heading>
          </Appear>
          <Appear>
          <Heading size={4} margin="30px auto auto" caps textColor="primary">
            Integrating with CI
          </Heading>
          </Appear>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={4} caps textColor="primary">
            K8s at a glance
          </Heading>
          <Layout>
            <Fill>
              <Image src={images.kubernetes_h.replace("/", "")} margin="1.5em auto auto" height="150px"/>
            </Fill>
          </Layout>
          <List margin="20px auto auto" textColor="tertiary">
            <ListItem>COE: Container Orchestration Engine</ListItem>
            <ListItem>Open-Sourced by Google in 2014</ListItem>
            <ListItem>Quick adoption</ListItem>
            <ListItem>Infrastructure agnostic</ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary" id='test'>
          <Heading size={4} caps textColor="primary">
            K8s at a glance
          </Heading>
          <Heading size={5} caps textColor="tertiary">
            COE examples
          </Heading>
          <Layout>
            <Image src={images.kubernetes.replace("/", "")} height="200"/>
            <Image src={images.swarm.replace("/", "")} height="200"/>
            <Image src={images.dcos.replace("/", "")} height="200"/>
          </Layout>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={4} caps textColor="primary">
            Where and how
          </Heading>
          <Heading size={5} caps fit margin="30px auto auto" textColor="tertiary">
            Bare metal, private and public Clouds
          </Heading>
          <Image src={images.azure_h.replace("/", "")} display="inline-block" height="50" margin={25}/>
          <Image src={images.aws_h.replace("/", "")} display="inline-block" height="45" margin={25}/>
          <Image src={images.gcp_h.replace("/", "")} display="inline-block" height="45" margin={25}/>
          <Image src={images.openstack_h.replace("/", "")} display="inline-block" height="45" margin={25}/>
          <Text textColor="tertiary" margin={25} fit caps>Managed - Kops - Kubespray - Kubeadm - Kube-aws - Symplegma</Text>
          <Text textColor="primary" margin="30px auto auto" textSize="1.5em">▼</Text>
          <Text textColor="tertiary" margin="30px auto auto">Cluster Deployment</Text>
          <Text textColor="tertiary" margin="30px auto auto">Cluster Lifecycle</Text>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={4} caps textColor="primary">
            Where and how
          </Heading>
          <Heading size={5} caps fit margin="30px auto auto" textColor="tertiary">
            IaC: Infrastructure as Code
          </Heading>
          <Text textColor="primary" margin="30px auto auto" textSize="1.5em">▼</Text>
          <Text textColor="tertiary" margin={25} fit caps>Terraform - CloudFormation - Cloud Deployment Manager - OpenStack Heat - Azure Resource Manager </Text>
          <Text textColor="primary" margin="30px auto auto" textSize="1.5em">▼</Text>
          <Text textColor="tertiary" margin="30px auto auto">Declarative infrastructure</Text>
          <Text textColor="tertiary" margin="30px auto auto">Immutable infrastructure</Text>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={4} caps textColor="primary">
            Where and how
          </Heading>
          <Heading size={5} caps fit margin="30px auto auto" textColor="tertiary">
            Reference implementation
          </Heading>
          <Image src={images.infra_ref.replace("/", "")} height="500" />
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={4} margin="30px auto auto" caps textColor="primary">
            Running Kubernetes
          </Heading>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>I want to use Kubernetes</Quote>
            <Cite>A customer</Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Cloud or Baremetal ?</Quote>
            <Cite>Me</Cite>
          </BlockQuote>
          <Layout>
            <Fill>
              <Heading caps size={6} margin={30} textColor="secondary" bgColor="primary" >
                <GoToAction caps size={6} textColor="secondary" bgColor="primary" slide={3}>Yes</GoToAction>
              </Heading>
            </Fill>
            <Fill>
              <Heading caps size={6} margin={30} textColor="secondary" bgColor="primary" >
                <GoToAction caps size={6} textColor="secondary" bgColor="primary" slide={3}>No</GoToAction>
              </Heading>
            </Fill>
          </Layout>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Can you run on public cloud ?</Quote>
            <Cite>Me</Cite>
          </BlockQuote>
          <Layout>
            <Fill>
              <Heading caps size={6} margin={30} textColor="secondary" bgColor="primary" >
                <GoToAction caps size={6} textColor="secondary" bgColor="primary" slide={3}>Yes</GoToAction>
              </Heading>
            </Fill>
            <Fill>
              <Heading caps size={6} margin={30} textColor="secondary" bgColor="primary" >
                <GoToAction caps size={6} textColor="secondary" bgColor="primary" slide={3}>No</GoToAction>
              </Heading>
            </Fill>
          </Layout>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Do you want to multi cloud ?</Quote>
            <Cite>Me</Cite>
          </BlockQuote>
          <Layout>
            <Fill>
              <Heading caps size={6} margin={30} textColor="secondary" bgColor="primary" >
                <GoToAction caps size={6} textColor="secondary" bgColor="primary" slide={3}>Yes</GoToAction>
              </Heading>
            </Fill>
            <Fill>
              <Heading caps size={6} margin={30} textColor="secondary" bgColor="primary" >
                <GoToAction caps size={6} textColor="secondary" bgColor="primary" slide={3}>No</GoToAction>
              </Heading>
            </Fill>
          </Layout>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Do you want a single deployment tool ?</Quote>
            <Cite>Me</Cite>
          </BlockQuote>
          <Layout>
            <Fill>
              <Heading caps size={6} margin={30} textColor="secondary" bgColor="primary" >
                <GoToAction caps size={6} textColor="secondary" bgColor="primary" slide={3}>Yes</GoToAction>
              </Heading>
            </Fill>
            <Fill>
              <Heading caps size={6} margin={30} textColor="secondary" bgColor="primary" >
                <GoToAction caps size={6} textColor="secondary" bgColor="primary" slide={3}>No</GoToAction>
              </Heading>
            </Fill>
          </Layout>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={4} margin="30px auto auto" caps textColor="tertiary">
            Managed Kubernetes
          </Heading>
        </Slide>
        <Slide transition={[]} bgColor="secondary">
          <Heading size={4} caps textColor="primary">
            <Link textColor="primary" href="https://aws.amazon.com/fr/eks/">AWS EKS</Link>
          </Heading>
          <List textColor="tertiary">
            <ListItem margin={20} textSize="1.3em">Managed Control Plane by AWS</ListItem>
            <ListItem margin={20} textSize="1.3em">Quite new</ListItem>
            <ListItem margin={20} textSize="1.3em">Amazon Linux / Ubuntu</ListItem>
            <ListItem margin={20} textSize="1.3em">CloudFormation / Terraform / <Link textColor="primary" href="https://eksctl.io/">eksctl</Link></ListItem>
            <ListItem margin={20} textSize="1.3em">Kubernetes v1.10.X</ListItem>
          </List>
        </Slide>
        <CodeSlide
            transition={[]}
            bgColor="#2D2D2D"
            color="#CCCCCC"
            lang="bash"
            code={require("raw-loader!../assets/aws-eks-terraform.tfvars")}
            ranges={[
              { loc: [0, 0], title: "EKS" },
              { loc: [5, 7], note: "EKS Terraform module" },
              { loc: [21, 25], note: "AWS Region" },
              { loc: [26, 31], note: "DNS Config" },
              { loc: [32, 36], note: "Kubernetes cluster" },
              { loc: [37, 50], note: "Worker pools" },
            ]}/>
        <Slide transition={[]} bgColor="secondary">
          <Heading size={4} caps textColor="primary">
            <Link textColor="primary" href="https://aws.amazon.com/fr/eks/">AWS EKS</Link>
          </Heading>
        <iframe height='600' width='1000' id="asciicast-214954" src="https://asciinema.org/a/214954/iframe" async></iframe>
        </Slide>
        <Slide transition={[]} bgColor="secondary">
          <Heading size={4} caps textColor="primary">
            <Link textColor="primary" href="https://cloud.google.com/kubernetes-engine/">GKE</Link>
          </Heading>
          <List textColor="tertiary">
            <ListItem margin={20} textSize="1.3em">Managed Control Plane by GCP</ListItem>
            <ListItem margin={20} textSize="1.3em">First managed Kubernetes</ListItem>
            <ListItem margin={20} textSize="1.3em">COS / Ubuntu</ListItem>
            <ListItem margin={20} textSize="1.3em">Terraform / Google Cloud SDK</ListItem>
            <ListItem margin={20} textSize="1.3em">Kubernetes v1.11.X</ListItem>
          </List>
        </Slide>
        <CodeSlide
            transition={[]}
            bgColor="#2D2D2D"
            color="#CCCCCC"
            lang="bash"
            code={require("raw-loader!../assets/gcp-gke-terraform.tfvars")}
            ranges={[
              { loc: [0, 0], title: "EKS" },
              { loc: [5, 8], note: "GKE configuration" },
              { loc: [10, 19], note: "GKE configuration" },
              { loc: [20, 29], note: "GKE configuration" },
            ]}/>
        <Slide transition={[]} bgColor="secondary">
          <Heading size={4} caps textColor="primary">
            <Link textColor="primary" href="https://cloud.google.com/kubernetes-engine/">GKE</Link>
          </Heading>
        <iframe height='600' width='1000' id="asciicast-215084" src="https://asciinema.org/a/215084/iframe" async></iframe>
        </Slide>
        <Slide transition={[]} bgColor="secondary">
          <Heading size={4} caps textColor="primary">
            <Link textColor="primary" href="https://docs.microsoft.com/en-us/azure/aks/">Azure AKS</Link>
          </Heading>
          <List textColor="tertiary">
            <ListItem margin={20} textSize="1.3em">Managed Control Plane by Azure</ListItem>
            <ListItem margin={20} textSize="1.3em">Quite new</ListItem>
            <ListItem margin={20} textSize="1.3em">Kubernetes v1.11.X</ListItem>
          </List>
        </Slide>
        <Slide transition={[]} bgColor="secondary">
          <Heading size={4} caps textColor="primary">
            <Link textColor="primary" href="https://docs.openstack.org/magnum/latest/user/index.html">OpenStack Magnum</Link>
          </Heading>
          <List textColor="tertiary">
            <ListItem margin={20} textSize="1.1em">Managed Control Plane on OpenStack Cloud</ListItem>
            <ListItem margin={20} textSize="1.1em">Based on Heat Stacks</ListItem>
            <ListItem margin={20} textSize="1.1em">Kubernetes v1.11.X</ListItem>
            <ListItem margin={20} textSize="1.1em">Available on some public Clouds</ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={4} margin="30px auto auto" caps textColor="tertiary">
            Cloud specific deployment tools
          </Heading>
        </Slide>
        <Slide transition={[]} bgColor="secondary">
          <Heading size={4} caps textColor="primary">
            <Link textColor="primary" href="https://github.com/kubernetes-incubator/kube-aws">kube-aws</Link>
          </Heading>
          <List textColor="tertiary">
            <ListItem margin={20} textSize="1.3em">Pure AWS CloudFormation Stack</ListItem>
            <ListItem margin={20} textSize="1.3em">Heavy development</ListItem>
            <ListItem margin={20} textSize="1.3em">Easily tunable</ListItem>
            <ListItem margin={20} textSize="1.3em">Uses CoreOS ❤ </ListItem>
            <ListItem margin={20} textSize="1.3em">Kubernetes v1.11.X</ListItem>
          </List>
        </Slide>
        <CodeSlide
            transition={[]}
            bgColor="#2D2D2D"
            color="#CCCCCC"
            lang="yaml"
            code={require("raw-loader!../assets/kube-aws-v0.12.0-cluster.yaml")}
            ranges={[
              { loc: [0, 1], title: "cluster.yaml" },
              { loc: [1, 7], note: "Basic configuration" },
              { loc: [8, 19], note: "Load Balancer configuration" },
              { loc: [20, 32], note: "Control Plane infrastructure" },
              { loc: [33, 52], note: "Worker Pools" },
              { loc: [53, 66], note: "Etcd configuration" },
              { loc: [67, 89] , note: "AWS Network configuration" },
              { loc: [93, 102], note: "Kubernetes Networking" },
              { loc: [111, 117], note: "Addons: kube-dns" },
              { loc: [118, 223], note: "Advanced configuration" },
            ]}/>
        <Slide transition={[]} bgColor="secondary">
          <Heading size={4} caps textColor="primary">
            <Link textColor="primary" href="https://github.com/kubernetes-incubator/kube-aws">kube-aws</Link>
          </Heading>
        <iframe height='600' width='1000' id="asciicast-214945" src="https://asciinema.org/a/214945/iframe" async></iframe>
        </Slide>
        <Slide transition={[]} bgColor="secondary">
          <Heading size={4} caps textColor="primary">
            <Link textColor="primary" href="https://github.com/kubernetes/kops">KOPS</Link>
          </Heading>
          <List textColor="tertiary">
            <ListItem margin={20} textSize="1.3em">Deploys on AWS and GCP</ListItem>
            <ListItem margin={20} textSize="1.3em">Heavy development</ListItem>
            <ListItem margin={20} textSize="1.3em">Easily tunable</ListItem>
            <ListItem margin={20} textSize="1.3em">Multiple OS</ListItem>
            <ListItem margin={20} textSize="1.3em">Kubernetes v1.10.X</ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={4} margin="30px auto auto" caps textColor="tertiary">
            Infrastructure agnostic deployment tools
          </Heading>
        </Slide>
        <Slide transition={[]} bgColor="secondary">
          <Heading size={4} caps textColor="primary">
            <Link textColor="primary" href="https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm-init/">Kubeadm</Link>
          </Heading>
          <List textColor="tertiary">
            <ListItem margin={20} textSize="1.1em">Official community installer</ListItem>
            <ListItem margin={20} textSize="1.1em">Stable since v1.13.0 released this week</ListItem>
            <ListItem margin={20} textSize="1.1em">Does not take care of bootstrapping machines</ListItem>
            <ListItem margin={20} textSize="1.1em">Best practice configuration and tunable</ListItem>
            <ListItem margin={20} textSize="1.1em">Multiple OS</ListItem>
            <ListItem margin={20} textSize="1.1em">Kubernetes v1.13.0</ListItem>
            <ListItem margin={20} textSize="1.1em">Can be automated and used by other tools </ListItem>
          </List>
        </Slide>
        <CodeSlide
            transition={[]}
            bgColor="#2D2D2D"
            color="#CCCCCC"
            lang="yaml"
            code={require("raw-loader!../assets/kubeadm-config.yaml")}
            ranges={[
              { loc: [0, 0], title: "kubeadm-config" },
              { loc: [0, 12],  },
              { loc: [12, 16], },
              { loc: [16, 24], },
            ]}/>
        <Slide transition={[]} bgColor="secondary">
          <Heading size={4} caps textColor="primary">
            <Link textColor="primary" href="https://github.com/kubernetes-incubator/kubespray">Kubespray</Link>
          </Heading>
          <List textColor="tertiary">
            <ListItem margin={20} textSize="1.1em">Based on Ansible</ListItem>
            <ListItem margin={20} textSize="1.1em">Quite dense</ListItem>
            <ListItem margin={20} textSize="1.1em">A bit hard to understand</ListItem>
            <ListItem margin={20} textSize="1.1em">Multiple OS</ListItem>
            <ListItem margin={20} textSize="1.1em">Does not officially take care of infrastructure</ListItem>
            <ListItem margin={20} textSize="1.1em">Kubeadm support</ListItem>
            <ListItem margin={20} textSize="1.1em">Kubernetes v1.12.X</ListItem>
          </List>
        </Slide>
        <Slide transition={[]} bgColor="secondary">
          <Heading size={4} caps textColor="primary">
            <Link textColor="primary" href="https://github.com/clusterfrak-dynamics/symplegma">Symplegma</Link>
          </Heading>
          <List textColor="tertiary">
            <ListItem margin={20} textSize="1.1em">Based on Ansible</ListItem>
            <ListItem margin={20} textSize="1.1em">Inspired by Kubespray but streamlined</ListItem>
            <ListItem margin={20} textSize="1.1em">A bit hard to understand</ListItem>
            <ListItem margin={20} textSize="1.1em">CoreOS but basically agnostic (from source)</ListItem>
            <ListItem margin={20} textSize="1.1em">Does not officially take care of infrastructure</ListItem>
            <ListItem margin={20} textSize="1.1em">Full Kubeadm</ListItem>
            <ListItem margin={20} textSize="1.1em">Kubernetes v1.12.X</ListItem>
          </List>
        </Slide>
        <CodeSlide
            transition={[]}
            bgColor="#2D2D2D"
            color="#CCCCCC"
            lang="bash"
            code={require("raw-loader!../assets/symplegma-terraform.tfvars")}
            ranges={[
              { loc: [0, 0], title: "symplegma-infra" },
              { loc: [23, 33], note: "AWS infrastructure" },
              { loc: [34, 46], note: "Bastion instances" },
              { loc: [47, 64], note: "Master instances"},
              { loc: [65, 82], note: "Node instances"},
              { loc: [83, 91], note: "Load balancer configuration"},
            ]}/>
        <CodeSlide
            transition={[]}
            bgColor="#2D2D2D"
            color="#CCCCCC"
            lang="yaml"
            code={require("raw-loader!../assets/symplegma-ansible.yml")}
            ranges={[
              { loc: [0, 0], title: "symplegma-ansible" },
              { loc: [1, 5], note: "Ansible config" },
              { loc: [6, 8], note: "Kubernetes version" },
              { loc: [11, 16], note: "Networking Config"},
              { loc: [19, 31], note: "Kubeadm custom configuration"},
            ]}/>
        <Slide transition={[]} bgColor="secondary">
          <Heading size={4} caps textColor="primary">
            <Link textColor="primary" href="https://github.com/clusterfrak-dynamics/symplegma">symplegma</Link>
          </Heading>
        <iframe height='600' width='1000' id="asciicast-215036" src="https://asciinema.org/a/215036/iframe" async></iframe>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={4} margin="30px auto auto" caps textColor="primary">
            Building application
          </Heading>
        </Slide>
        <Slide transition={[]} bgColor="secondary">
          <Heading size={4} caps textColor="primary">
            Build application
          </Heading>
          <Heading size={5} caps textColor="tertiary">
            Images
          </Heading>
          <List textColor="tertiary">
            <ListItem margin={20} textSize="1.2em">Use semantic versioning</ListItem>
            <ListItem margin={20} textSize="1.2em">Use registries (Hub, ECR, ACR, GCR, Quay) </ListItem>
            <ListItem margin={20} textSize="1.2em">Tag your images (with semver)</ListItem>
          </List>
        </Slide>
        <Slide transition={[]} bgColor="secondary">
          <Heading size={4} caps textColor="primary">
            Build application
          </Heading>
          <Heading size={5} caps textColor="tertiary">
            Kubernetes Manifests
          </Heading>
          <List textColor="tertiary">
            <ListItem margin={20} textSize="1.2em">Multiple environments</ListItem>
            <ListItem margin={20} textSize="1.2em">Avoid code duplication</ListItem>
            <ListItem margin={20} textSize="1.2em">Reusable manifests</ListItem>
            <ListItem margin={20} textSize="1.2em">Templating with Helm</ListItem>
          </List>
        </Slide>
        <Slide transition={[]} bgColor="secondary">
          <Heading size={4} caps textColor="primary">
            Build application
          </Heading>
          <Heading size={5} caps textColor="tertiary">
            Helm
          </Heading>
          <List textColor="tertiary">
            <ListItem margin={20} textSize="1.2em">Templating system</ListItem>
            <ListItem margin={20} textSize="1.2em">Package manager for Kubernetes </ListItem>
            <ListItem margin={20} textSize="1.2em">Like Terraform but for Kubernetes</ListItem>
            <ListItem margin={20} textSize="1.2em">Reusable manifests</ListItem>
            <ListItem margin={20} textSize="1.2em">
              <Link textColor="tertiary" href="https://hub.kubeapps.com/">Official community supported Helm charts</Link>
            </ListItem>
          </List>
        </Slide>
        <CodeSlide
            transition={[]}
            bgColor="#2D2D2D"
            color="#CCCCCC"
            lang="yaml"
            code={require("raw-loader!../assets/helm-de.yaml")}
            ranges={[
              { loc: [0, 0], title: "helm template" },
              { loc: [0, 9], },
              { loc: [9, 15], },
              { loc: [15, 20], },
              { loc: [20, 40], },
              { loc: [40, 51], },
            ]}/>
        <CodeSlide
            transition={[]}
            bgColor="#2D2D2D"
            color="#CCCCCC"
            lang="yaml"
            code={require("raw-loader!../assets/helm-values.yaml")}
            ranges={[
              { loc: [0, 0], title: "helm values" },
              { loc: [4, 10], },
              { loc: [14, 17], },
              { loc: [18, 30], },
              { loc: [31, 42], },
              { loc: [43, 48], },
            ]}/>







        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            Vertical scaling
          </Heading>
          <Heading size={5} caps textColor="tertiary">
            AWS driven
          </Heading>
          <List textColor="tertiary">
            <ListItem textSize="1.2em">Leverages CloudWatch metric</ListItem>
            <ListItem textSize="1.2em">Scales up/down ASG on AWS</ListItem>
            <ListItem textSize="1.2em">CloudWatch is not K8s aware</ListItem>
            <ListItem textSize="1.2em">Requires fine tuning</ListItem>
          </List>
          <Image src={images.cloudwatch.replace("/", "")} margin="auto auto auto" height="200px"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            Vertical scaling
          </Heading>
          <Heading size={5} caps textColor="tertiary">
            K8s driven
          </Heading>
          <List textColor="tertiary">
            <ListItem textSize="1em">Talks directly to Kubernetes</ListItem>
            <ListItem textSize="1em">Scales up/down ASG via AWS API</ListItem>
            <ListItem textSize="1em">K8s aware: running on K8s itself</ListItem>
            <ListItem textSize="1em">Scales when PODs cannot be scheduled</ListItem>
          </List>
          <CodePane
            lang="yaml"
            source={require("raw-loader!../assets/autoscaler.example")}
            margin="10px auto"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            Vertical scaling
          </Heading>
          <Heading size={5} caps textColor="tertiary">
            K8s driven
          </Heading>
          <Image src={images.cloudwatch_k8s1.replace("/", "")} margin="15px auto auto" height="270px"/>
          <Image src={images.cloudwatch_k8s2.replace("/", "")} margin="auto 15px auto" height="270px"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            Horizontal scaling
          </Heading>
          <Heading size={5} caps textColor="tertiary">
            Horizontal Pod Autoscaler
          </Heading>
          <List textColor="tertiary">
            <ListItem textSize="1.1em">Kubernetes API object</ListItem>
            <ListItem textSize="1.1em">Watches PODs based on resources</ListItem>
            <ListItem textSize="1.1em">Linked to a deployment object</ListItem>
            <ListItem textSize="1.1em">Scales up/down deployment replicas</ListItem>
          </List>
          <CodePane
            lang="yaml"
            source={require("raw-loader!../assets/horizontalpodautoscaler.example")}
            margin="10px auto"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps fit textColor="secondary">
            Publishing an application
          </Heading>
          <Heading size={5} caps textColor="tertiary">
            How it all fits
          </Heading>
          <Text textColor="tertiary" margin="30px auto auto" caps>Ingress (L7 LB)</Text>
          <Text textColor="secondary" margin="30px auto auto" textSize="1.5em">▼</Text>
          <Text textColor="tertiary" margin="30px auto auto" caps>Service (L4 LB, asbtract PODs)</Text>
          <Text textColor="secondary" margin="30px auto auto" textSize="1.5em">▼</Text>
          <Text textColor="tertiary" margin="30px auto auto" caps>Deployment (a bunch of PODs)</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps fit textColor="secondary">
            Publishing an application
          </Heading>
          <Heading size={4} caps textColor="tertiary">
            Ingress Controller
          </Heading>
          <List textColor="tertiary">
            <ListItem textSize="1.1em">Acts as an L7 load balancer</ListItem>
            <ListItem textSize="1.1em">Watches Kubernetes API for ingress rules</ListItem>
            <ListItem textSize="1.1em">Handles TLS termination</ListItem>
            <ListItem textSize="1.1em">Handles routing rules</ListItem>
          </List>
          <CodePane
            lang="yaml"
            source={require("raw-loader!../assets/ingressrule.example")}
            margin="10px auto"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps fit textColor="secondary">
            Publishing an application
          </Heading>
          <Heading size={4} caps textColor="tertiary">
            Service
          </Heading>
          <List textColor="tertiary">
            <ListItem textSize="1.1em">Acts as an L4 load balancer</ListItem>
            <ListItem textSize="1.1em">Abstract PODs</ListItem>
            <ListItem textSize="1.1em">PODs are not reached directly</ListItem>
            <ListItem textSize="1.1em">Service discovery</ListItem>
          </List>
          <CodePane
            lang="yaml"
            source={require("raw-loader!../assets/service.example")}
            margin="10px auto"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            Træfik
          </Heading>
          <Image src={images.morbier.replace("/", "")} padding="5" height="200px"/>
          <List textColor="tertiary">
            <ListItem textSize="1.1em">Cloud reverse proxy</ListItem>
            <ListItem textSize="1.1em">Ingress controller</ListItem>
            <ListItem textSize="1.1em">Watches Kubernetes API for ingress rules</ListItem>
            <ListItem textSize="1.1em">Let's encrypt</ListItem>
            <ListItem textSize="1.1em">HA with K / V</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            Træfik
          </Heading>
          <Heading size={4} caps textColor="tertiary">
            Let's Encrypt
          </Heading>
          <List textColor="tertiary">
            <ListItem textSize="1.1em">On demand TLS certs</ListItem>
            <ListItem textSize="1.1em">Auto renewal</ListItem>
            <ListItem textSize="1.1em">Hard to HA</ListItem>
            <ListItem textSize="1.1em">Challenge storage</ListItem>
            <ListItem textSize="1.1em">Cert storage</ListItem>
          </List>
          <Text caps fit textColor="secondary">Træfik uses a K / V store ❤</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            Træfik
          </Heading>
          <List textColor="tertiary">
            <ListItem textSize="1.1em">Acts as in entrypoint for the cluster</ListItem>
            <ListItem textSize="1.1em">Can be autoscaled like any other deployment</ListItem>
            <ListItem textSize="1.1em">Configuration backed in Consul or Etcd</ListItem>
            <ListItem textSize="1.1em">Free and automated TLS cert</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            Integrating with CI
          </Heading>
          <List textColor="tertiary">
            <ListItem textSize="1.3em">
              Cluster is composed of:
                <List textColor="tertiary">
                  <ListItem textSize="2rem" margin="15px 30px auto">Kubernetes system services</ListItem>
                  <ListItem textSize="2rem" margin="15px 30px auto">Træfik as an ingress controller</ListItem>
                  <ListItem textSize="2rem" margin="15px 30px auto">Preprod / Prod namespaces</ListItem>
                </List>
            </ListItem>
            <ListItem margin="15px auto auto" textSize="1.1em">
              CI system acts as a templating tools:
                <List textColor="tertiary">
                  <ListItem textSize="2rem" margin="15px 30px auto">For Service</ListItem>
                  <ListItem textSize="2rem" margin="15px 30px auto">For Ingress</ListItem>
                  <ListItem textSize="2rem" margin="15px 30px auto">For Deployment</ListItem>
                </List>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            Integrating with CI
          </Heading>
          <Heading size={4} caps textColor="tertiary">
            Git push workflow
          </Heading>
          <List textColor="tertiary">
            <ListItem textSize="1.1em">Runs tests</ListItem>
            <ListItem textSize="1.1em">Builds docker images for the app</ListItem>
            <ListItem textSize="1.1em">Tests the images</ListItem>
            <ListItem textSize="1.1em">Pushes images into registry: ECR</ListItem>
            <ListItem textSize="1.1em">Ensures cluster is idempotent</ListItem>
            <ListItem textSize="1.1em">Rolling update the app</ListItem>
            <ListItem textSize="1.1em">All of this is done per branch</ListItem>
          </List>
        </Slide>
        <CodeSlide
            transition={[]}
            bgColor="#2D2D2D"
            color="#CCCCCC"
            lang="bash"
            code={require("raw-loader!../assets/render.example")}
            ranges={[
              { loc: [0, 1], title: "CI templating" },
              { loc: [2, 11], note: "Per branch workflow" },
              { loc: [12, 17], note: "Templating" },
              { loc: [17, 33], note: "Service" },
              { loc: [33, 55], note: "Deployment" },
              { loc: [55, 69] , note: "POD autoscaler" },
              { loc: [69, 85], note: "Ingress rule" },
            ]}/>
        <CodeSlide
            transition={[]}
            lang="yaml"
            code={require("raw-loader!../assets/travis.example")}
            ranges={[
              { loc: [0, 1], title: "Travis config" },
              { loc: [2, 4], note: "Enables Docker" },
              { loc: [5, 9], note: "Only build preprod and prod" },
              { loc: [10, 22], note: "ENV var to customize template" },
              { loc: [23, 26], note: "Builds Docker image" },
              { loc: [26, 29], note: "Installs AWS CLI" },
              { loc: [29, 31] , note: "Tags docker image with commit for AWS ECR" },
              { loc: [31, 33] , note: "Creates ECR repo and push image" },
              { loc: [33, 35], note: "Download Kubectl to access K8s API" },
              { loc: [35, 37], note: "Renders templates and apply them to cluster" }
            ]}/>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading textColor="secondary" size={3} caps fit>
            Demo & Conclusion
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading textColor="primary" size={3} caps>
            Thank you!
          </Heading>
          <Text margin="10px auto auto">
            <Link textColor="primary" href="https://github.com/ArchiFleKs">@ArchiFleKs</Link>
          </Text>
          <Text margin="10px auto auto">
            <Link textColor="primary" href="https://archifleks.github.io/saastalk-03-2017">archifleks.github.io/saastalk-03-2017</Link>
          </Text>
          <Text margin="10px auto auto">
            <Link textColor="primary" href="https://osones.com">osones.com</Link>
          </Text>
          <Text margin="10px auto auto">
            <Link textColor="primary" margin="10px auto auto" href="https://twitter.com/osones">@osones</Link>
          </Text>
          <Image src={images.come.replace("/", "")} height="250" padding="10"/>
          <Heading textColor="primary" size={4} caps>
            We're hiring!
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
