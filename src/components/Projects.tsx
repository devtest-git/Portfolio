'use client';

export default function Projects() {
  const projects = [
    {
      title: 'Multi-Cloud 3-Tier Architecture Deployment and Management',
      description:
        'Designed and deployed a 3-tier web application architecture across AWS, Azure, and GCP, integrating web, application, and database layers for scalability and high availability. Configured load balancers, auto-scaling, secure networking, and automated provisioning with Terraform. Implemented Jenkins CI/CD pipelines and native cloud monitoring with alerting.',
      tags: ['AWS', 'Azure', 'GCP', 'Terraform', 'Jenkins', 'CI/CD'],
      impact: 'Delivered highly available multi-cloud platform with automated deployments and improved operability',
      icon: '☁️',
    },
    {
      title: 'Hybrid Connectivity for Banking Workloads',
      description:
        'Designed and implemented secure hybrid connectivity using AWS Site-to-Site VPN and Direct Connect. Configured BGP routing for dynamic route propagation, redundant VPN tunnels for HA, and validated failover through DR drills.',
      tags: ['AWS', 'VPN', 'Direct Connect', 'BGP', 'Networking'],
      impact: 'Achieved secure, resilient hybrid connectivity with automated failover and DR readiness',
      icon: '🔒',
    },
    {
      title: 'Cross-Cloud BGP VPN (AWS ↔ Azure)',
      description:
        'Designed and deployed Site-to-Site VPN connectivity between AWS and Azure with BGP for dynamic routing and secure cross-cloud communication. Troubleshot routing and tunnel stability to ensure low-latency, reliable links.',
      tags: ['AWS', 'Azure', 'BGP', 'VPN', 'Networking'],
      impact: 'Enabled secure cross-cloud workload communication with stable BGP routing',
      icon: '🔁',
    },
    {
      title: 'Jenkins Automation for Multi-Account AWS Operations',
      description:
        'Centralized Jenkins automation for multi-account AWS management, using cross-account IAM role assumption. Built pipelines for EC2 inventory, EBS snapshot tracking, and IAM/SSO reporting with automated email summaries.',
      tags: ['Jenkins', 'AWS', 'Automation', 'IAM', 'Reporting'],
      impact: 'Improved operational visibility and reduced manual effort through centralized automation',
      icon: '🧰',
    },
    {
      title: 'OCI Environment with Azure Entra ID Federation',
      description:
        'Designed OCI compartments, VCNs, subnets, route tables, security lists, provisioned compute and Oracle DBaaS, and integrated Azure Entra ID for federated authentication and centralized identity management.',
      tags: ['OCI', 'Azure Entra ID', 'Networking', 'Identity'],
      impact: 'Deployed production-ready OCI tenancy with federated identity and compartmentalization',
      icon: '🧭',
    },
    {
      title: 'Multi-Cloud Hybrid Network Setup',
      description: 'Designed and implemented a secure hybrid cloud network connecting on-premises data center with AWS and Azure environments using VPN and Direct Connect.',
      tags: ['AWS', 'Azure', 'Networking', 'Hybrid Cloud', 'VPN', 'BGP'],
      impact: 'Reduced network latency by 40% and improved reliability to 99.99% uptime',
      icon: '🌐',
    },
    {
      title: 'Infrastructure as Code Migration',
      description: 'Migrated manual infrastructure to fully automated Terraform-based IaC, managing 200+ resources across multiple AWS accounts.',
      tags: ['Terraform', 'AWS', 'IaC', 'Automation', 'CloudFormation'],
      impact: 'Reduced deployment time by 70% and enabled consistent infrastructure across teams',
      icon: '⚙️',
    },
    {
      title: 'CI/CD Pipeline Automation',
      description: 'Built comprehensive CI/CD pipelines using Jenkins and GitLab CI for containerized applications, enabling rapid deployments.',
      tags: ['Jenkins', 'Docker', 'Kubernetes', 'GitLab CI', 'DevOps'],
      impact: 'Increased deployment frequency from monthly to daily with zero-downtime releases',
      icon: '🚀',
    },
    {
      title: 'Cost Optimization Initiative',
      description: 'Analyzed and optimized cloud resource utilization across multi-cloud environment, identifying and eliminating wasteful spending.',
      tags: ['Cost Management', 'AWS', 'Azure', 'Monitoring', 'Analysis'],
      impact: 'Reduced cloud spending by 35% while maintaining performance SLAs',
      icon: '💰',
    },
    {
      title: 'Security & Compliance Framework',
      description: 'Implemented comprehensive security policies, RBAC, encryption standards, and compliance controls across cloud infrastructure.',
      tags: ['Security', 'IAM', 'Compliance', 'Encryption', 'RBAC'],
      impact: 'Achieved SOC 2 Type II certification and reduced security vulnerabilities by 85%',
      icon: '🔐',
    },
    {
      title: 'Multi-Region Disaster Recovery',
      description: 'Designed and deployed a multi-region disaster recovery solution with automated failover for business continuity.',
      tags: ['AWS', 'GCP', 'DR', 'Failover', 'High Availability'],
      impact: 'Enabled recovery time objective (RTO) of <1 hour and recovery point objective (RPO) of 15 minutes',
      icon: '🛡️',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-slate-100/50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center gradient-text">Featured Projects</h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto transition-colors duration-300">
          Showcase of impactful cloud infrastructure and DevOps projects delivered in production environments
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="glass-effect p-6 card-hover group flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-4 flex-grow transition-colors duration-300">
                {project.description}
              </p>

              <div>
                <p className="text-sm text-green-600 dark:text-green-400 font-medium mb-3 transition-colors duration-300">
                  ✓ {project.impact}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2 py-1 bg-slate-300 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 rounded text-xs font-medium hover:bg-blue-600/30 dark:hover:bg-blue-600/30 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action for more projects */}
        <div className="mt-16 pt-12 text-center border-t border-slate-300 dark:border-slate-700 transition-colors duration-300">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Interested in More Details?</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6 transition-colors duration-300">
            I'm actively seeking internship and cloud engineer positions in Ireland. Let's discuss how I can contribute to your team.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary inline-block">
              Start a Conversation
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-block"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
