'use client';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-slate-100/50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Bio */}
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              I'm a passionate Cloud Engineer with hands-on experience in designing, implementing, and managing cloud infrastructure across multiple platforms. Currently working at Sify Technologies, where I've led numerous cloud migration and optimization projects.
            </p>

            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              In September 2026, I'll be joining the Master's program in Cloud Computing at NCI Ireland, where I can deepen my expertise and contribute to cutting-edge cloud technologies.
            </p>

            <div className="space-y-4 pt-6">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">What I Do</h3>
              <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-3">
                  <span className="text-blue-600 dark:text-blue-400">✓</span>
                  <span>Design and implement cloud infrastructure solutions</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600 dark:text-blue-400">✓</span>
                  <span>Automate deployment pipelines and CI/CD workflows</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600 dark:text-blue-400">✓</span>
                  <span>Manage networking and security across multi-cloud environments</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600 dark:text-blue-400">✓</span>
                  <span>Optimize cloud costs and resource utilization</span>
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <a
                href="https://www.linkedin.com/in/sandeep-ravindran-devops/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white rounded-lg font-medium transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
                View on LinkedIn
              </a>
            </div>
          </div>

          {/* Right column - Timeline */}
          <div className="space-y-8">
            <div className="glass-effect p-6 animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-600/20 dark:bg-blue-600/20 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold flex-shrink-0">
                  01
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">Current: Cloud Engineer</h3>
                  <p className="text-slate-600 dark:text-slate-400">Sify Technologies | July 2024 - Present</p>
                  <p className="text-slate-700 dark:text-slate-300 mt-2 text-sm">Leading cloud infrastructure projects for enterprise clients across AWS, Azure, GCP, and OCI.</p>
                </div>
              </div>
            </div>

            <div className="glass-effect p-6 animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-600/20 dark:bg-purple-600/20 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold flex-shrink-0">
                  02
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">Education: BS Computer Science</h3>
                  <p className="text-slate-600 dark:text-slate-400">CGPA: 9.08 | Graduated April 2024</p>
                  <p className="text-slate-700 dark:text-slate-300 mt-2 text-sm">Strong foundation in systems design, networking, and cloud computing principles.</p>
                </div>
              </div>
            </div>

            <div className="glass-effect p-6 animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-pink-600/20 dark:bg-pink-600/20 flex items-center justify-center text-pink-600 dark:text-pink-400 font-bold flex-shrink-0">
                  03
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">Upcoming: MS Cloud Computing</h3>
                  <p className="text-slate-600 dark:text-slate-400">NCI Ireland | September 2026</p>
                  <p className="text-slate-700 dark:text-slate-300 mt-2 text-sm">Advanced studies in cloud architecture, distributed systems, and enterprise solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
