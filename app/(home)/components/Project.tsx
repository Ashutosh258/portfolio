import { cn } from "@/lib/utils";
import Link from "next/link";
import Title from "./Title";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import { SiNextdotjs, SiNodedotjs, SiReact } from "react-icons/si";

export default function Project() {
  const projects = [
    {
      title: "coming soon",
      tech: [SiReact,SiNodedotjs],
      link: "http://localhost:3000",
      cover: "/project1.jpg",
      background: "bg-red-500",
    },
    {
      title: "coming soon",
      tech: [SiNextdotjs,SiReact],
      link: "http://localhost:3000",
      cover: "/project1.jpg",
      background: "bg-yellow-500",
    },
    {
      title: "coming soon",
      tech: [SiNextdotjs,SiReact],
      link: "http://localhost:3000",
      cover: "/project1.jpg",
      background: "bg-indigo-500",
    },
    {
      title: "coming soon",
      tech: [SiNextdotjs,SiReact],
      link: "http://localhost:3000",
      cover: "/project1.jpg",
      background: "bg-green-500",
    },
    {
      title: "coming soon",
      tech: [SiNextdotjs,SiReact],
      link: "http://localhost:3000",
      cover: "/project1.jpg",
      background: "bg-cyan-500",
    },
    {
      title: "coming soon",
      tech: [SiNextdotjs,SiReact],
      link: "http://localhost:3000",
      cover: "/project1.jpg",
      background: "bg-purple-500",
    },
  ];

  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects 🎨"
        className="flex flex-col items-center justify-center -rotate-6"
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 pt-20 gap-5">
        {projects.map((project, index) => (
          <Link href={project.link} key={index}>
            <div className={cn("p-5 rounded-md ", project.background)}>
              <DirectionAwareHover
                imageUrl={project.cover}
                className="w-full space-y-5 cursor-pointer"
              >
                <div className="space-y-5 ">
                  <h1 className="text-2xl font-bold ">{project.title}</h1>
                  <div className="flex items-center gap-5">
                    {project.tech.map((Icon, index) => (
                      <Icon className="w-8 h-8" key={index} />
                    ))}
                  </div>
                </div>
              </DirectionAwareHover>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}