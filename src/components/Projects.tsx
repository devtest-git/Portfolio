'use client';

export default function Projects() {
  const projects = [
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
    <section id="projects" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center gradient-text">Featured Projects</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
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

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              <div>
                <p className="text-sm text-green-400 font-medium mb-3">
                  ✓ {project.impact}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2 py-1 bg-slate-800/50 text-slate-300 rounded text-xs font-medium hover:bg-blue-600/30 hover:text-blue-300 transition-colors"
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
        <div className="mt-16 pt-12 text-center border-t border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-4">Interested in More Details?</h3>
          <p className="text-slate-400 mb-6">
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
