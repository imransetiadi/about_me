import Image from "next/image";
import styles from "../app/page.module.css";

const skillGroups = [
  {
    title: "Cloud Platforms",
    skills: [
      { name: "OpenStack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openstack/openstack-original.svg" },
      { name: "Red Hat OpenStack Platform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redhat/redhat-original.svg" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
      { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    ],
  },
  {
    title: "Container & Orchestration",
    skills: [
      { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "OpenShift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redhat/redhat-original.svg" },
      { name: "Docker / Podman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Docker Compose", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Docker Swarm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
    ],
  },
  {
    title: "CI/CD & Version Control",
    skills: [
      { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
      { name: "GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Bitbucket", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" },
    ],
  },
  {
    title: "Programming & Scripting",
    skills: [
      { name: "Bash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    ],
  },
  {
    title: "Automation",
    skills: [
      { name: "Ansible", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" },
    ],
  },
  {
    title: "Linux & SysAdmin",
    skills: [
      { name: "RHEL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redhat/redhat-original.svg" },
      { name: "CentOS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/centos/centos-original.svg" },
      { name: "Rocky Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rockylinux/rockylinux-original.svg" },
      { name: "Ubuntu", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" },
      { name: "System Administration", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "KVM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "Troubleshooting", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
    ],
  },
  {
    title: "Monitoring & Observability",
    skills: [
      { name: "Prometheus", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
      { name: "Pushgateway", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
      { name: "Alerting", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
      { name: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
      { name: "Loki", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
      { name: "Elastic Stack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg" },
    ],
  },
];

export default function Skills() {
  return (
    <div className="container">
      <div className={`${styles.sectionHeader} ${styles.reveal}`}>
        <span className={styles.eyebrow}>Skills</span>
        <h2>Technical Skills</h2>
      </div>

      <div className={styles.skillCategories}>
        {skillGroups.map((group) => (
          <article key={group.title} className={`${styles.skillCategory} ${styles.reveal}`}>
            <h3>{group.title}</h3>
            <div className={styles.skillTags}>
              {group.skills.map((skill) => (
                <span key={skill.name} className={styles.skillTag}>
                  <Image src={skill.icon} alt="" width={20} height={20} className={styles.skillLogo} unoptimized />
                  {skill.name}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
