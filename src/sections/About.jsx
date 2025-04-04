import photo from "../images/profile.png";
import Social from "../components/Social";

export default function About() {
  return (
    <div className="pt-24 px-4 md:px-16 bg-black">
      <p className="raleway-bold text-blue-900 text-4xl text-white">About Me</p>
      <div className="w-full h-1 rounded-sm bg-gray-500 my-6"></div>
      <div className="flex flex-col-reverse lg:flex-row-reverse">
        <div className="lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
          <img
            src={photo}
            className="rounded-3xl h-48 md:h-72 shadow-lg border bg-black border-gray-500"
            alt="Mirza Aslam Beg"
          />
        </div>
        <div className="lg:w-1/2 py-8 md:py-12 px-4 md:px-12 text-white">
          <p className="work-sans-regular text-2xl md:text-5xl text-white font-extrabold mb-4 md:mb-6">
            Meet Aslam, a <span className="text-[#ff004f]">Full Stack Developer</span> and <span className="text-[#ff004f]">Competitive Coder.</span>
          </p>
          <p className="work-sans-regular text-base md:text-xl mt-4">
            Pursuing B.Tech in Electronics and Communication Engineering (ECE) at Tezpur University, Assam. Skilled in <span className="text-[#ff004f]">frontend and backend</span> development, proficient in translating complex requirements into elegant solutions, and driven by a passion for continuous learning and innovation. <span className="text-[#ff004f]">3star Codechef</span>(max 1612),<span className="text-[#ff004f]">pupils Codeforces</span>(max 1255) ,Solved <span className="text-[#ff004f]">530+ DSA questions</span> on LeetCode (max 1818), <span className="text-[#ff004f]">4-star</span> rating on HackerRank in DSA, <span className="text-[#ff004f]">total 850+ dsa qsn</span>  solved.
          </p>
          <div className="mt-4 md:mt-8">
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
}
