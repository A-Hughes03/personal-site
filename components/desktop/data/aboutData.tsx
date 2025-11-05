"use client";

import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function AboutContent() {
    return (
        <div className="space-y-4 font-mono">
            <h2 className="text-xl font-bold border-b-2 border-black pb-2">About Me</h2>
            <div className="flex gap-6 items-start">
                <Image
                    src="/adamPfp.jpg"
                    width={128}
                    height={128}
                    alt="Profile photo"
                    className="flex-shrink-0 border-2 border-black"
                />
                <div className="space-y-3 flex-1">
                    <p className="leading-relaxed text-base">
                        <strong>Name:</strong> Adam Hughes
                    </p>
                    <p className="leading-relaxed text-base">
                        <strong>Location:</strong> Indianapolis, Indiana
                    </p>
                    <div className="flex gap-4 pt-2">
                        <a
                            href="https://www.linkedin.com/in/adam-hughes-tech/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="win95-button-raised flex items-center justify-center w-10 h-10 bg-[#c0c0c0] border-2 border-[#dfdfdf] border-r-[#808080] border-b-[#808080] hover:bg-[#dfdfdf] active:border-[#808080] active:border-r-[#dfdfdf] active:border-b-[#dfdfdf]"
                            title="LinkedIn"
                        >
                            <FaLinkedin className="w-5 h-5 text-black" />
                        </a>
                        <a
                            href="https://github.com/A-Hughes03"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="win95-button-raised flex items-center justify-center w-10 h-10 bg-[#c0c0c0] border-2 border-[#dfdfdf] border-r-[#808080] border-b-[#808080] hover:bg-[#dfdfdf] active:border-[#808080] active:border-r-[#dfdfdf] active:border-b-[#dfdfdf]"
                            title="GitHub"
                        >
                            <FaGithub className="w-5 h-5 text-black" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-4 p-4 bg-[#c0c0c0] win95-border-inset">
                <p className="leading-relaxed text-base">
                    I'm a software engineer who enjoys building reliable systems and finding ways to automate tasks. I work with Java, Spring Boot, .NET, and JavaScript to create practical and efficient solutions.
                </p>
            </div>
        </div>
    );
}
