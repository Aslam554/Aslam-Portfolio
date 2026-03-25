import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function Social() {
  const socials = [
    { icon: <FaGithub />, url: "https://github.com/Aslam554", color: "hover:text-white" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/mirza-aslam-beg-8347661ab/", color: "hover:text-blue-400" },
    { icon: <FaTwitter />, url: "https://twitter.com/aslambeg", color: "hover:text-sky-400" },
    { icon: <FaYoutube />, url: "https://www.youtube.com/@aslamcoding", color: "hover:text-red-500" },
    { icon: <SiLeetcode />, url: "https://leetcode.com/u/aslambeg/", color: "hover:text-yellow-500" },
  ];

  return (
    <div className="flex items-center gap-4 mt-2">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-2xl text-gray-400 transition-all duration-300 transform hover:-translate-y-1 ${social.color}`}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
