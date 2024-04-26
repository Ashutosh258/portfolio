"use client"
import Title from "./Title"
import React from "react"
import { HoverEffect } from "./ui/card-hover-effect"
import { SiCss3, SiGit,SiJavascript,SiNodedotjs,SiNextdotjs,SiReact} from "react-icons/si"
export default function skills() {
  const skills =  [
    {
      text:"CSS",
      Icon:SiCss3,
    },
    {
      text:"React",
      Icon:SiReact,
    },
    {
      text:"Git",
      Icon:SiGit,
    },
    {
      text:"JavaScript",
      Icon:SiJavascript,

    },
    {
      text:"Nodejs",
      Icon:SiNodedotjs,
    },
    {
      text:"Nextjs",
      Icon:SiNextdotjs,
    },
  ]
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title text="skills" className="flex flex-col items-center justify-center -rotate-6"/>

      <HoverEffect items={skills} />
    </div>
  )
}
