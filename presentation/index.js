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
  morbier: require("../assets/morbier.png")
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
        <Slide transition={[]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            kube-aws
          </Heading>
          <CodePane
            theme="external"
            lang="yaml"
            source={require("raw-loader!../assets/cluster.example")}
            margin="10px auto"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            kube-aws
          </Heading>
          <CodePane
            lang="bash"
            source={require("raw-loader!../assets/kube-aws2.example")}
            margin="10px auto"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            Scaling K8s
          </Heading>
          <Heading size={5} caps textColor="tertiary">
            Different level of scaling
          </Heading>
          <List textColor="tertiary">
            <ListItem>Vertical scaling: Worker nodes</ListItem>
            <ListItem>Horizontal scaling: PODs / Containers </ListItem>
          </List>
        </Slide>
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
