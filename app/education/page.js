import Main from "@/components/Main";

export const metadata = {
  title: "Aatif's Portfolio ⋅ Education",
};

export default function Education() {
  return (
    <Main>
      <div className="bg-[#1F1F1F] text-[#D4D4D4] min-h-screen flex flex-col items-center justify-center p-6">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Education</h1>

          {/* B.Tech Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              B.Tech - Indian Institute of Technology Jodhpur (2022 - 2026)
            </h2>
            <p className="text-lg mb-2">
              Major: Artificial Intelligence and Data Science
            </p>
            <p className="text-lg mb-6">CGPA: 8.55</p>

            <h3 className="text-xl font-semibold mb-4">Relevant Courses:</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-gray-800 text-white px-4 py-2 rounded-md font-semibold hover:bg-[#FF5722] transition-all duration-300">
                Data Structures and Algorithms
              </span>
              <span className="bg-gray-800 text-white px-4 py-2 rounded-md font-semibold hover:bg-[#FF5722] transition-all duration-300">
                Pattern Recognition and ML
              </span>
              <span className="bg-gray-800 text-white px-4 py-2 rounded-md font-semibold hover:bg-[#FF5722] transition-all duration-300">
                Maths for Computing
              </span>
              <span className="bg-gray-800 text-white px-4 py-2 rounded-md font-semibold hover:bg-[#FF5722] transition-all duration-300">
                Quantum Computing
              </span>
              <span className="bg-gray-800 text-white px-4 py-2 rounded-md font-semibold hover:bg-[#FF5722] transition-all duration-300">
                Probability & Stats
              </span>
              <span className="bg-gray-800 text-white px-4 py-2 rounded-md font-semibold hover:bg-[#FF5722] transition-all duration-300">
                Linear Algebra
              </span>
              <span className="bg-gray-800 text-white px-4 py-2 rounded-md font-semibold hover:bg-[#FF5722] transition-all duration-300">
                Design & Analysis of Algorithms
              </span>
              <span className="bg-gray-800 text-white px-4 py-2 rounded-md font-semibold hover:bg-[#FF5722] transition-all duration-300">
                Data Engineering
              </span>
              <span className="bg-gray-800 text-white px-4 py-2 rounded-md font-semibold hover:bg-[#FF5722] transition-all duration-300">
                Artificial Intelligence
              </span>
            </div>
          </div>

          {/* Higher Secondary Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              CBSE Higher Secondary - S.A.M Secondary School, Bihar Sharif
              (2022)
            </h2>
            <p className="text-lg mb-4">Result: 96.6%</p>
          </div>
        </div>
      </div>
    </Main>
  );
}
