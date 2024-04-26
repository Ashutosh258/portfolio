import Link from "next/link";
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";
export default function Navbar() {
  const social = [
    {
      link: "https://github.com/Ashutosh258",
      label: "github",
      Icon: SiGithub,
    },
    {
      link: "/",
      label: "linkdin",
      Icon: SiLinkedin,
    },
    {
      link: "/",
      label: "twitter",
      Icon: SiTwitter,
    },
  ];
  return (
    <nav className="py-10 flex justify-between items-center ">
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-blue-500 -rotate-2">
        Ashutosh 🧑‍💻
      </h1>
      <div className="flex items-center gap-5">
        {social.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link href={social.link} key={index} aria-label={social.label}>
              <Icon className="w-5 h-5 transition ease-in-out  hover:scale-125 hover: duration-300" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
