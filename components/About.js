import React from "react";

export default function About() {
  return (
    <div className="bg-[#1F1F1F] text-[#D4D4D4] min-h-screen flex flex-col items-center justify-center p-6">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Hello, I am Aatif Ahmad</h1>
        <p className="text-lg mb-8">
          A B.Tech 3rd Year Student at Indian Institute of Technology Jodhpur,
          majoring in Artificial Intelligence and Data Science.
        </p>

        <a
          href="/Aatif-Resume.pdf"
          className="bg-[#FF5722] text-[#1F1F1F] px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#E64A19] transition duration-300"
          download
        >
          Download My Resume
        </a>

        <div className="mb-8 mt-8">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-md mb-4">
            I am a passionate and driven BTech student specializing in Full
            Stack Development and Machine Learning. I have always been
            fascinated by technology and problem-solving. With a solid
            foundation in various programming languages and tools, I thrive on
            tackling complex challenges.
          </p>
          <p className="text-md">
            I enjoy exploring new technologies, working on personal projects,
            and learning about the latest trends in the tech world. I am always
            eager to expand my knowledge and take on new opportunities.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Professional Goals</h2>
          <p className="text-md mb-4">
            My primary goal is to leverage my skills in the technological field
            creating solutions that address real-world problems. I aim to work
            with a dynamic team where I can contribute to innovative projects
            and continue to grow both professionally and personally.
          </p>
          <p className="text-md">
            In the long term, I aspire to be a leader in technology, driving
            advancements in AI and software development. I am particularly
            interested in exploring how emerging technologies can be harnessed
            to solve global challenges and improve everyday life.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Skills & Tools</h2>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">
              Programming Languages
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#007bff] text-white px-4 py-2 rounded-md">
                C++
              </button>
              <button className="bg-[#007bff] text-white px-4 py-2 rounded-md">
                Python
              </button>
              <button className="bg-[#007bff] text-white px-4 py-2 rounded-md">
                Javascript
              </button>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">
              Development Frameworks & Libraries
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#28A745] text-white px-4 py-2 rounded-md">
                React
              </button>
              <button className="bg-[#28A745] text-white px-4 py-2 rounded-md">
                React Native
              </button>
              <button className="bg-[#28A745] text-white px-4 py-2 rounded-md">
                Next.js
              </button>
              <button className="bg-[#28A745] text-white px-4 py-2 rounded-md">
                Express.js
              </button>
              <button className="bg-[#28A745] text-white px-4 py-2 rounded-md">
                Node.js
              </button>
              <button className="bg-[#28A745] text-white px-4 py-2 rounded-md">
                TailwindCSS
              </button>
              <button className="bg-[#28A745] text-white px-4 py-2 rounded-md">
                Bootstrap
              </button>
              <button className="bg-[#28A745] text-white px-4 py-2 rounded-md">
                Vite
              </button>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">
              Python Libraries for Data Science & Machine Learning
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#FFC107] text-[#1F1F1F] px-4 py-2 rounded-md">
                Keras
              </button>
              <button className="bg-[#FFC107] text-[#1F1F1F] px-4 py-2 rounded-md">
                TensorFlow
              </button>
              <button className="bg-[#FFC107] text-[#1F1F1F] px-4 py-2 rounded-md">
                PyTorch
              </button>
              <button className="bg-[#FFC107] text-[#1F1F1F] px-4 py-2 rounded-md">
                Matplotlib
              </button>
              <button className="bg-[#FFC107] text-[#1F1F1F] px-4 py-2 rounded-md">
                Numpy
              </button>
              <button className="bg-[#FFC107] text-[#1F1F1F] px-4 py-2 rounded-md">
                Pandas
              </button>
              <button className="bg-[#FFC107] text-[#1F1F1F] px-4 py-2 rounded-md">
                Plotly
              </button>
              <button className="bg-[#FFC107] text-[#1F1F1F] px-4 py-2 rounded-md">
                scikit-learn
              </button>
              <button className="bg-[#FFC107] text-[#1F1F1F] px-4 py-2 rounded-md">
                Scipy
              </button>
              <button className="bg-[#FFC107] text-[#1F1F1F] px-4 py-2 rounded-md">
                OpenCV
              </button>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">
              Databases & Data Storage
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#6F42C1] text-white px-4 py-2 rounded-md">
                MongoDB
              </button>
              <button className="bg-[#6F42C1] text-white px-4 py-2 rounded-md">
                Firebase
              </button>
              <button className="bg-[#6F42C1] text-white px-4 py-2 rounded-md">
                MySQL
              </button>
              <button className="bg-[#6F42C1] text-white px-4 py-2 rounded-md">
                Redis
              </button>
              <button className="bg-[#6F42C1] text-white px-4 py-2 rounded-md">
                Postgres
              </button>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">
              Version Control & Deployment
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#DC3545] text-white px-4 py-2 rounded-md">
                Git
              </button>
              <button className="bg-[#DC3545] text-white px-4 py-2 rounded-md">
                GitHub
              </button>
              <button className="bg-[#DC3545] text-white px-4 py-2 rounded-md">
                Vercel
              </button>
              <button className="bg-[#DC3545] text-white px-4 py-2 rounded-md">
                Netlify
              </button>
              <button className="bg-[#DC3545] text-white px-4 py-2 rounded-md">
                GitHubPages
              </button>
              <button className="bg-[#DC3545] text-white px-4 py-2 rounded-md">
                Docker
              </button>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Design & UI/UX</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#FF69B4] text-white px-4 py-2 rounded-md">
                Figma
              </button>
              <button className="bg-[#FF69B4] text-white px-4 py-2 rounded-md">
                Canva
              </button>
              <button className="bg-[#FF69B4] text-white px-4 py-2 rounded-md">
                Draw.io
              </button>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Development Tools</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#FF5722] text-white px-4 py-2 rounded-md">
                ESLint
              </button>
              <button className="bg-[#FF5722] text-white px-4 py-2 rounded-md">
                Postman
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
