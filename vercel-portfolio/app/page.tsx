'use client';

export default function Home() {
  const projects = [
    {
      title: "Sentiment Analysis on Twitter Data",
      description: "Built an NLP pipeline using TF-IDF and machine learning classifiers to analyze public sentiment. Evaluated models using precision, recall, and F1-score.",
      link: "https://github.com/yourusername/sentiment-analysis"
    },
    {
      title: "News Article Classification",
      description: "Implemented multi-class text classification using traditional ML and transformer-based models. Compared performance across models.",
      link: "https://github.com/yourusername/news-classification"
    },
    {
      title: "Hate Speech Detection",
      description: "Developed a robust hate speech detection system using advanced NLP techniques and deep learning models to identify harmful content.",
      link: "https://github.com/yourusername/hate-speech-detection"
    }
  ];

  const skills = [
    "Python",
    "Machine Learning",
    "Natural Language Processing",
    "Data Analytics",
    "SQL",
    "Pandas & NumPy",
    "Scikit-learn",
    "PyTorch",
    "TensorFlow"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="backdrop-blur-md bg-white/10 text-white py-20 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold mb-4 drop-shadow-lg animate-fade-in">
              Bharath
            </h1>
            <p className="text-xl font-light opacity-95 animate-fade-in-delay">
              Data Science Student | Machine Learning | NLP | Data Analytics
            </p>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-6 py-12 space-y-8">
          {/* About Section */}
          <section className="bg-white rounded-3xl shadow-2xl p-8 transform hover:-translate-y-2 transition-all duration-300">
            <h2 className="text-4xl font-bold text-purple-600 mb-6 relative pb-3">
              About Me
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"></span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              I am a final-year Integrated M.Sc. Data Science student with strong
              interests in machine learning, NLP, and applied data analysis.
              I enjoy building models that solve real-world problems and
              explaining results clearly.
            </p>
          </section>

          {/* Projects Section */}
          <section className="bg-white rounded-3xl shadow-2xl p-8 transform hover:-translate-y-2 transition-all duration-300">
            <h2 className="text-4xl font-bold text-purple-600 mb-8 relative pb-3">
              Projects
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"></span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border-l-4 border-purple-600 transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 relative z-10">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 relative z-10">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-purple-600 font-semibold px-5 py-2 rounded-full hover:bg-purple-600 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-md relative z-10"
                  >
                    View on GitHub →
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="bg-white rounded-3xl shadow-2xl p-8 transform hover:-translate-y-2 transition-all duration-300">
            <h2 className="text-4xl font-bold text-purple-600 mb-8 relative pb-3">
              Skills
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"></span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white text-center py-4 px-6 rounded-2xl font-semibold transform hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-default"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>

          {/* Links Section */}
          <section className="bg-white rounded-3xl shadow-2xl p-8 text-center transform hover:-translate-y-2 transition-all duration-300">
            <h2 className="text-4xl font-bold text-purple-600 mb-8 relative pb-3 inline-block">
              Links
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"></span>
            </h2>
            <div className="flex justify-center gap-6 mt-6">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold px-8 py-4 rounded-full transform hover:scale-110 hover:shadow-2xl transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="text-center text-white py-8 mt-12">
          <p className="font-light">© 2026 Bharath • Built with passion for data science</p>
        </footer>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }
      `}</style>
    </div>
  );
}