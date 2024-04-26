import Link from "next/link";
import { MovingBorderBtn } from "./ui/moving-border";
import Title from "./Title"
export default function HeroSection() {
  return (
    <div className=" min-h-[80vh] flex items-center justify-between flex-col gap-14 lg: gap:0 lg:flex-row">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Nice to meet you !👋 <br />{" "}
          <span className="underline underline-offset-8 decoration-blue-500">
            {"I'm Ashutosh."}
          </span>
        </h1>
        <p className="md:w-96 text-lg text-grey-300">
          {
            "Based in India, I'm a fullstack developer passioate about building a modern web application that users love. "
          }
        </p>
        <Link
          href={"mailto:anandashutosh258@gmail.com"}
          className="inline-block group"
        >
          <Title text="contact me 📧" />

        </Link>
      </div>

      <div className="relative">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"> </div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>

          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"> </div>
          </div>

              <div className="glow absolute top-[40%] right-1/2 -z-20"></div>

        </div>


        <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
        <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semi-bold ">
          <p>Availabe for work</p>
        </MovingBorderBtn>
        </div>
        
      </div>
    </div>
  );
}
