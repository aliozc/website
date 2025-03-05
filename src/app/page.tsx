import React from "react";

import IconButton from "../components/IconButton";
import ProjectCard from "../components/Card";

export default function Home() {
  return (
    <div className="space-y-8">

            <div className="flex">
                <div className="flex md:flex-row flex-col mx-auto md:space-x-8 md:text-left text-center">
                    <img className="duration-150 select-none cursor-pointer w-32 h-32 rounded-full md:mx-0 mx-auto md:mb-0 mb-5 active:scale-95" src="/profile.png" alt="Me, upside down, typing on keyboard of a laptop"/>
                    <div className="w-72 my-auto">
                        <h1 className="text-gray-400">Hello, I'm <span className="text-black dark:text-white">Your Name</span></h1>
                        <h1 className="text-4xl font-bold">Student and Web Developer</h1>
                    </div>
                </div>
            </div>

            <div className="space-y-2">
                <h1 className="font-bold">About Me</h1>
                <p className="text-gray-600 text-sm">I am a student from Turkey, who is interested in web development. I like to use JavaScript and React in my projects, but I am also open to using new technologies. If you are interested in my work, you can contact with any of the socials below.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-2 grid-cols-1 md:space-y-0 space-y-8">
                <div className="space-y-2">
                    <h1 className="font-bold">Projects</h1>
                    <div className="grid md:grid-cols-1 gap-2">
                        <ProjectCard
                            title="Some project"
                            description="Lorem ipsum... well this is a project, alright?"
                            href="#"
                            imageURL="https://unpkg.com/ionicons@7.1.0/dist/svg/folder-outline.svg"
                            invert={true}
                            imageAltText="Folder logo"
                        />
                        <ProjectCard
                            title="Another project"
                            description="Lorem ipsum... well this is a project, alright?"
                            href="#"
                            imageURL="https://unpkg.com/ionicons@7.1.0/dist/svg/folder-outline.svg"
                            invert={true}
                            imageAltText="Folder logo"
                        />
                    </div>
                    
                    {
                    <a href="https://github.com/example?tab=repositories" className="flex space-x-1 text-gray-400 hover:text-black dark:hover:text-white group duration-150 cursor-pointer">
                        <span className="duration-150">See more</span>
                        <p className="duration-150 group-hover:translate-x-1">→</p>
                    </a>
                    }
                </div>
                <div className="space-y-2">
                    <h1 className="font-bold">Education</h1>
                    <div className="grid md:grid-cols-1 gap-2">
                        <ProjectCard
                            title="Example University"
                            description="Some Degree that Nobody Cares About"
                            subtitle="2025"
                            href="#"
                            imageURL="https://unpkg.com/ionicons@7.1.0/dist/svg/school-outline.svg"
                            invert={true}
                            imageAltText="Graduation cap logo"
                        />
                        <ProjectCard
                            title="Another University"
                            description="Another Degree that Nobody Cares About"
                            subtitle="2024 - Present"
                            href="#"
                            imageURL="https://unpkg.com/ionicons@7.1.0/dist/svg/school-outline.svg"
                            invert={true}
                            imageAltText="Graduation cap logo"
                        />
                    </div>
                </div>
            </div>
            
            {/* Technologies Section */}
            <div className="space-y-2">
                <h1 className="font-bold">Technologies I Use</h1>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
                    <IconButton text="HTML" icon="html5" href="https://html.spec.whatwg.org"/>
                    <IconButton text="CSS" icon="css3" href="https://www.w3.org/TR/css/#css"/>
                    <IconButton text="JavaScript" icon="javascript" href="https://ecma-international.org/publications-and-standards/standards/ecma-262/"/>
                    <IconButton text="Bash" icon="bash" invert={true} href="https://www.gnu.org/software/bash/"/>
                    <IconButton text="Python" icon="python" href="https://www.python.org"/>
                    <IconButton text="Node.js" icon="nodejs" href="https://nodejs.org/en"/>
                    <IconButton text="Express" icon="express" invert={true} href="https://expressjs.com"/>
                    <IconButton text="React" icon="react" href="https://react.dev"/>
                    <IconButton text="Tailwind CSS" icon="tailwindcss" href="https://tailwindcss.com"/>
                    <IconButton text="Ionic" icon="ionic" href="https://ionicframework.com"/>
                </div>
            </div>
            <div className="space-y-2">
                <h1 className="font-bold">Contact</h1>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
                    <IconButton text="Github" icon="github" href="#" invert={true}/>
                    <IconButton text="LinkedIn" href="#" icon="linkedin"/>
                    <IconButton text="X (Twitter)" href="#" icon="twitter" invert={true}/>
                    <IconButton text="E-mail" href="#" imageURL="https://unpkg.com/ionicons@7.1.0/dist/svg/mail-outline.svg" invert={true}/>
                </div>
            </div>
            </div>
  );
}
