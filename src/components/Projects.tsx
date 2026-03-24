'use client';

export default function Projects() {
  const projects = [
  {
    title: 'AWS Tagging Automation & Compliance Framework',
    description:
      'Designed and implemented an automated tagging solution using AWS Lambda, Boto3, and EventBridge. Enforced tagging compliance across multiple AWS accounts using AWS Organizations policies. Developed automation logic to identify non-compliant resources and generate detailed reports, improving governance and cost tracking.',
    tags: ['AWS', 'Lambda', 'Boto3', 'EventBridge', 'Governance', 'Automation'],
    impact: 'Improved cost visibility and reduced manual auditing effort across multi-account environments',
    icon: '🏷️',
  },
  {
    title: 'Hybrid Connectivity using Site-to-Site VPN and Direct Connect',
    description:
      'Designed and implemented secure hybrid connectivity using AWS Site-to-Site VPN and Direct Connect. Enabled private communication between on-premises data centers and AWS VPCs. Configured BGP routing, redundant tunnels, and validated failover through disaster recovery drills.',
    tags: ['AWS', 'VPN', 'Direct Connect', 'BGP', 'Hybrid Cloud'],
    impact: 'Delivered highly available, low-latency hybrid connectivity with validated failover mechanisms',
    icon: '🔒',
  },
  {
    title: 'Cross-Cloud Connectivity between AWS and Azure using BGP VPN',
    description:
      'Designed and deployed Site-to-Site VPN connectivity between AWS and Azure environments. Configured BGP-based dynamic routing for seamless route exchange and enabled secure multi-cloud workload communication. Troubleshot routing and tunnel stability issues.',
    tags: ['AWS', 'Azure', 'BGP', 'VPN', 'Multi-Cloud'],
    impact: 'Enabled secure and stable cross-cloud communication with dynamic routing',
    icon: '🔁',
  },
  {
    title: 'Centralized Jenkins Automation for Multi-Account AWS Operations',
    description:
      'Designed and implemented a centralized Jenkins automation platform for managing multiple AWS accounts using cross-account IAM role assumption. Built pipelines for EC2 inventory, EBS snapshot tracking, and IAM/SSO reporting with automated email notifications.',
    tags: ['Jenkins', 'AWS', 'Automation', 'IAM', 'CI/CD'],
    impact: 'Reduced manual effort and improved operational visibility through centralized automation',
    icon: '🧰',
  },
  {
    title: 'OCI Environment Setup with Azure Entra ID Federation',
    description:
      'Designed and deployed OCI infrastructure from scratch with compartment-based architecture (Prod, Non-Prod, DMZ). Configured VCN, subnets, route tables, and security lists. Provisioned compute, load balancers, and Oracle DBaaS, and integrated Azure Entra ID for federated authentication.',
    tags: ['OCI', 'Azure Entra ID', 'Networking', 'Identity', 'Cloud'],
    impact: 'Delivered production-ready OCI environment with secure identity federation',
    icon: '🧭',
  }
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
