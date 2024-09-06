import Main from "@/components/Main";

export const metadata = {
  title: "Aatif's Portfolio ⋅ Connect",
};

export default function Connect() {
  const githubIcon = "/images/github.png";
  const linkedinIcon = "/images/linkedin.png";
  const xIcon = "/images/twitter.png";
  const codeforcesIcon = "/images/codeforces.png";
  const mediumIcon = "/images/medium.png";
  const redditIcon = "/images/reddit.png";

  return (
    <Main>
      <div className="bg-[#1F1F1F] text-[#D4D4D4] min-h-screen flex flex-col items-center p-6 mb-4">
        <h1 className="text-4xl font-bold mb-12">Contact Me</h1>
        <div className="max-w-4xl w-full">
          <div className="bg-gray-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-400 mb-4">
              Feel free to reach out to me through any of the following
              channels:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>
                Address: W-217, Gulmohar, IIT Jodhpur, Karwar, Jodhpur,
                Rajasthan, 342030
              </li>
              <li>Phone: +91-6207392585</li>
              <li>
                Email:{" "}
                <a href="mailto:b22ai002@iitj.ac.in" className="text-[#FF5722]">
                  b22ai002@iitj.ac.in
                </a>{" "}
                /{" "}
                <a
                  href="mailto:ahmadaatif6@gmail.com"
                  className="text-[#FF5722]"
                >
                  ahmadaatif6@gmail.com
                </a>
              </li>
            </ul>
            <div className="flex flex-wrap mb-4">
              <a
                href="https://github.com/aatifahmad123"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/aatif-ahmad-2b8862282/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/ByteKnight18"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <img src={xIcon} alt="Twitter" className="w-6 h-6" />
              </a>
              <a
                href="https://codeforces.com/profile/Oppenheimer_7"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <img
                  src={codeforcesIcon}
                  alt="Codeforces"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://medium.com/@b22ai002"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <img src={mediumIcon} alt="Medium" className="w-6 h-6" />
              </a>
              <a
                href="https://www.reddit.com/user/Fuzzy_Weather1503/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <img src={redditIcon} alt="Reddit" className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">
              Inspirational Quotes
            </h2>
            <p className="text-gray-400 mb-4">
              Believe you can and you're halfway there. — Theodore Roosevelt
            </p>
            <p className="text-gray-400 mb-4">
              Don't watch the clock; do what it does. Keep going. — Sam Levenson
            </p>
            <p className="text-gray-400 mb-4">
              The only limit to our realization of tomorrow is our doubts of
              today. — Franklin D. Roosevelt
            </p>
          </div>
        </div>
      </div>
    </Main>
  );
}
