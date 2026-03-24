'use client';

export default function Certifications() {
  const certifications = [
    {
      name: 'AWS',
      logo: '/aws-logo.svg',
      description: 'Amazon Web Services',
    },
    {
      name: 'Google Cloud',
      logo: '/gcp-logo.svg',
      description: 'Google Cloud Platform',
    },
    {
      name: 'Microsoft Azure',
      logo: '/azure-logo.svg',
      description: 'Microsoft Azure',
    },
    {
      name: 'Oracle Cloud',
      logo: '/oci-logo.svg',
      description: 'Oracle Cloud Infrastructure',
    },
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center gradient-text">Cloud Certifications & Platforms</h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          Experience with leading cloud providers and their certification paths
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="glass-effect p-6 card-hover group flex flex-col items-center justify-center text-center"
            >
              <div className="w-24 h-24 mb-4 flex items-center justify-center bg-slate-200 dark:bg-slate-800 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <img
                  src={cert.logo}
                  alt={cert.name}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{cert.name}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
