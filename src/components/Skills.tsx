'use client';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Cloud Platforms',
      icon: '☁️',
      skills: ['AWS', 'Microsoft Azure', 'Google Cloud Platform', 'Oracle Cloud'],
    },
    {
      title: 'Infrastructure & DevOps',
      icon: '⚙️',
      skills: ['Terraform', 'Jenkins', 'Docker', 'Kubernetes', 'GitLab CI/CD', 'GitHub Actions'],
    },
    {
      title: 'Networking',
      icon: '🌐',
      skills: ['Site-to-Site VPN', 'Direct Connect', 'BGP Routing', 'Hybrid Connectivity', 'Security Groups', 'Load Balancing'],
    },
    {
      title: 'Security & Access',
      icon: '🔐',
      skills: ['IAM Policies', 'RBAC', 'Encryption', 'Security Best Practices', 'Compliance'],
    },
    {
      title: 'Programming & Scripting',
      icon: '💻',
      skills: ['Python', 'YAML', 'Bash Scripting'],
    },
    {
      title: 'Tools & Platforms',
      icon: '🛠️',
      skills: ['Linux', 'Git', 'AWS CloudFormation', 'GitHub', 'Monitoring & Logging', 'Cost Management Tools'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-slate-100/50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center gradient-text">Technical Skills</h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit developed through hands-on experience with enterprise cloud infrastructure
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="glass-effect p-8 card-hover group"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1.5 bg-blue-500/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-500/30 dark:border-blue-500/30 hover:border-blue-500/60 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency levels */}
        <div className="mt-16 pt-12 border-t border-slate-300 dark:border-slate-700 transition-colors duration-300">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">Expertise Levels</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { area: 'Multi-Cloud Architecture', level: 95 },
              { area: 'Infrastructure as Code', level: 90 },
              { area: 'DevOps & Automation', level: 88 },
              { area: 'Cloud Networking', level: 92 },
              { area: 'Security & Compliance', level: 85 },
              { area: 'Cost Optimization', level: 80 },
            ].map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{item.area}</span>
                  <span className="text-blue-600 dark:text-blue-400">{item.level}%</span>
                </div>
                <div className="w-full bg-slate-300 dark:bg-slate-800 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
