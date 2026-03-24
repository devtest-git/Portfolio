'use client';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="mb-6 inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 dark:border-blue-500/30 rounded-full animate-fade-in group hover:bg-blue-600/90 dark:hover:bg-blue-400/90 transition-colors">
          <p className="text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:text-white dark:group-hover:text-black transition-colors">🚀 Cloud Specialist | DevOps Engineer</p>
        </div>
        <div className="animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 text-pink-600 dark:text-red-400">Sandeep Ravindran</h2>
        </div>
        <br />
        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-slate-900 dark:text-white transition-colors duration-300 animate-fade-in">
          Building Cloud <span className="gradient-text">Infrastructure</span> at Scale
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto transition-colors duration-300 animate-fade-in">
          Cloud Engineer with expertise in AWS, Azure, GCP & OCI. Seeking internship opportunities in Ireland while pursuing MS in Cloud Computing at NCI.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12 animate-fade-in">
          <a
            href="#projects"
            className="btn-primary inline-block"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="btn-secondary inline-block"
          >
            Get in Touch
          </a>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-slate-300 dark:border-slate-800 transition-colors duration-300">
          <div className="animate-fade-in">
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">2+</p>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Years Experience</p>
          </div>
          <div className="animate-fade-in">
            <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">4</p>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Cloud Platforms</p>
          </div>
          <div className="animate-fade-in">
            <p className="text-3xl font-bold text-pink-600 dark:text-pink-400">10+</p>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Cloud Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
}
