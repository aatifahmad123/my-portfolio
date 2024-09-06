import Main from "@/components/Main";

export const metadata = {
  title: "Aatif's Portfolio ⋅ Projects",
};

export default function Projects() {
  const githubIcon = "/images/github.png";
  const mediumIcon = "/images/medium.png";
  const vercelIcon = "/images/bleach.png";
  const colabIcon = "/images/colab.png";

  const projects = [
    {
      title: "Employee Data Management Portal",
      description:
        "Developed a secure portal for employees to access and manage assigned data from spreadsheets.",
      techStack: ["React", "Tailwind", "SheetDB"],
      links: {
        github: "https://github.com/aatifahmad123/solar-project",
        vercel: "https://solar-project-rho.vercel.app/",
      },
    },
    {
      title: "Stanford Twitter Data: Network Analysis and Community Structures",
      description:
        "Graphical visualization and analysis of Twitter exchange among US Congress members.",
      techStack: ["Python", "Networkx", "Python-louvain"],
      links: {
        github: "https://github.com/aatifahmad123/Stanford-Twitter-Project",
      },
    },
    {
      title: "Qubic: Real Time Quiz and Chat Application",
      description:
        "Developed a quiz and chat application using socket programming for secure client-server connections.",
      techStack: ["Python", "Tkinter", "Socket"],
      links: {
        github: "https://github.com/aatifahmad123/pcs2-project",
      },
    },
    {
      title: "Image Retrieval and Classification using Machine Learning",
      description:
        "Implemented ML models to classify and retrieve images from the CIFAR-10 dataset.",
      techStack: ["Machine Learning Algorithms"],
      links: {
        github: "https://github.com/introspective321/ImRCIFAR",
        vercel: "https://nextjs-image-retrieval.vercel.app/",
      },
    },
    {
      title: "LRU Cache: The Quest for Efficiency",
      description:
        "Implemented LRU Cache using different data structures and algorithms to compare and analyze thoroughly.",
      techStack: ["C++", "Data Structures and Algorithms"],
      links: {
        medium:
          "https://medium.com/@b22ai002/exploring-five-different-implementations-of-lru-cache-the-quest-for-efficiency-dfbe19ab02a6",
      },
    },
    {
      title: "SAKSHAR: Image projective, sensor based learning methodology",
      description:
        "Created interactive games in python and calibrated sensors to track hand movements while playing on image projections.",
      techStack: ["Python", "Pygame", "Sensor Calibration", "HTML", "CSS"],
      links: {
        github: "https://github.com/aatifxarchie/saksharproject2023",
      },
    },
    {
      title: "Hate Speech Detection in Twitter",
      description:
        "Machine learning algorithms to detect hate speech in tweets.",
      techStack: ["Machine Learning"],
      links: {
        colab:
          "https://colab.research.google.com/drive/1s4m1SwwFS6jt4rBarkUFu2DSiZtAhsHG?usp=sharing",
      },
    },
    {
      title: "Sentiment Classification on IMDB Movies Dataset",
      description:
        "Machine Learning algorithms for classifying sentiments on IMDB movies dataset.",
      techStack: ["Machine Learning"],
      links: {
        colab:
          "https://colab.research.google.com/drive/1-_8ZZMw7tzAccoDuA6JdRLb3kR5gaiEQ?usp=sharing",
      },
    },
    {
      title: "React Quiz Game",
      description: "Interactive quiz game made using react.",
      techStack: ["React", "Tailwind"],
      links: {
        vercel: "https://react-quiz-app-eight-taupe.vercel.app/",
      },
    },
  ];

  return (
    <Main>
      <div className="bg-[#1F1F1F] text-[#D4D4D4] min-h-screen flex flex-col items-center p-6 mb-4">
        <h1 className="text-4xl font-bold mb-12">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 p-4 rounded-lg hover:bg-[#FF5722] transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-400 hover:text-black">
                {project.description}
              </p>
              <div className="flex flex-wrap mt-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-900 px-2 py-1 rounded-sm mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex mt-2">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={githubIcon}
                      alt="GitHub"
                      className="w-6 h-6 mr-2"
                    />
                  </a>
                )}
                {project.links.vercel && (
                  <a
                    href={project.links.vercel}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={vercelIcon}
                      alt="Vercel"
                      className="w-6 h-6 mr-2"
                    />
                  </a>
                )}
                {project.links.medium && (
                  <a
                    href={project.links.medium}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={mediumIcon}
                      alt="Medium"
                      className="w-6 h-6 mr-2"
                    />
                  </a>
                )}
                {project.links.colab && (
                  <a
                    href={project.links.colab}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={colabIcon}
                      alt="Vercel"
                      className="w-6 h-6 mr-2"
                    />
                  </a>
                )}
                {/* Add links for other platforms as needed */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Main>
  );
}
