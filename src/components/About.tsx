'use client';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Bio */}
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a passionate Cloud Engineer with hands-on experience in designing, implementing, and managing cloud infrastructure across multiple platforms. Currently working at Sify Technologies, where I've led numerous cloud migration and optimization projects.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              In September 2026, I'll be joining the Master's program in Cloud Computing at NCI Ireland, where I can deepen my expertise and contribute to cutting-edge cloud technologies.
            </p>

            <div className="space-y-4 pt-6">
              <h3 className="text-xl font-semibold text-blue-400">What I Do</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-3">
                  <span className="text-blue-400">✓</span>
                  <span>Design and implement cloud infrastructure solutions</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-400">✓</span>
                  <span>Automate deployment pipelines and CI/CD workflows</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-400">✓</span>
                  <span>Manage networking and security across multi-cloud environments</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-400">✓</span>
                  <span>Optimize cloud costs and resource utilization</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right column - Timeline */}
          <div className="space-y-8">
            <div className="glass-effect p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 font-bold flex-shrink-0">
                  01
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Current: Cloud Engineer</h3>
                  <p className="text-slate-400">Sify Technologies | July 2024 - Present</p>
                  <p className="text-slate-300 mt-2 text-sm">Leading cloud infrastructure projects for enterprise clients across AWS, Azure, GCP, and OCI.</p>
                </div>
              </div>
            </div>

            <div className="glass-effect p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-600/20 flex items-center justify-center text-purple-400 font-bold flex-shrink-0">
                  02
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Education: BS Computer Science</h3>
                  <p className="text-slate-400">CGPA: 9.08 | Graduated April 2024</p>
                  <p className="text-slate-300 mt-2 text-sm">Strong foundation in systems design, networking, and cloud computing principles.</p>
                </div>
              </div>
            </div>

            <div className="glass-effect p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-pink-600/20 flex items-center justify-center text-pink-400 font-bold flex-shrink-0">
                  03
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Upcoming: MS Cloud Computing</h3>
                  <p className="text-slate-400">NCI Ireland | September 2026</p>
                  <p className="text-slate-300 mt-2 text-sm">Advanced studies in cloud architecture, distributed systems, and enterprise solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications highlight */}
        <div className="mt-16 pt-12 border-t border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-6">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'AWS Solutions Architect', icon: '☁️' },
              { title: 'Azure Administrator', icon: '🔷' },
              { title: 'GCP Professional', icon: '📊' },
              { title: 'Kubernetes Certified', icon: '⚙️' },
            ].map((cert) => (
              <div key={cert.title} className="glass-effect p-4 text-center hover:shadow-lg hover:shadow-blue-500/20 transition-all">
                <p className="text-2xl mb-2">{cert.icon}</p>
                <p className="text-slate-200 font-medium text-sm">{cert.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
