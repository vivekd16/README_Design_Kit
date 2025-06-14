"use client";

import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import ThemeToggler from "@/components/theme/toggler";
import { UserProfile } from "@/components/user-profile";
import { useSession } from "@/lib/auth-client";
import { SponsorButton } from "@/components/providers/sponsor";

export default function Navbar() {
    const { data: session, isPending } = useSession();
    return (
        <div id="nav" className="flex items-center justify-between">
            <div id="brand" className="h-full w-[300px] flex items-center justify-center">
                <p className="w-full h-full font-heading text-lg md:text-2xl font-bold ml-24">
                    <Link href="/">
                        <span>{siteConfig.name}</span>
                    </Link>
                </p>
            </div>
            <div className="flex-1 flex items-center justify-end h-full">
                {/* <SponsorButton /> */}
                <Button variant="ghost" className="h-full">
                    <Link href="/sponsor">
                        <span className="text-xs md:text-sm bg-gradient-to-r from-fuchsia-400 via-pink-400 to-violet-400 bg-clip-text text-transparent font-semibold drop-shadow-sm">
                            Support
                        </span>
                    </Link>
                </Button>
                <Button className="h-full shadow-md hover:shadow-lg transition-shadow" variant="ghost">
                    <a href={siteConfig.socials.x} target="_blank" className="flex items-center gap-2 group/nav">
                        <span>X</span>
                        <div className="relative z-10 size-4 overflow-hidden flex items-center justify-center">
                            <ArrowUpRight className="-z-10 absolute opacity-100 scale-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover/nav:-translate-y-5 group-hover/nav:translate-x-5 group-hover/nav:opacity-0 group-hover/nav:scale-0 transition-all duration-200" />
                            <ArrowUpRight className="absolute -z-10 -bottom-4 -left-4 opacity-0 scale-0 group-hover/nav:-translate-y-[15px] group-hover/nav:translate-x-4 group-hover/nav:opacity-100 group-hover/nav:scale-100 transition-all duration-200" />
                        </div>
                    </a>
                </Button>
                <Button className="h-full shadow-md hover:shadow-lg transition-shadow" variant="ghost">
                    <a href={siteConfig.socials.github} target="_blank" className="flex items-center gap-2 group/nav">
                        <span>Github</span>
                        <div className="relative z-10 size-4 overflow-hidden flex items-center justify-center">
                            <ArrowUpRight className="-z-10 absolute opacity-100 scale-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover/nav:-translate-y-5 group-hover/nav:translate-x-5 group-hover/nav:opacity-0 group-hover/nav:scale-0 transition-all duration-200" />
                            <ArrowUpRight className="absolute -z-10 -bottom-4 -left-4 opacity-0 scale-0 group-hover/nav:-translate-y-[15px] group-hover/nav:translate-x-4 group-hover/nav:opacity-100 group-hover/nav:scale-100 transition-all duration-200" />
                        </div>
                    </a>
                </Button>
                {!isPending && session && (
                    <>
                        {/* <ThemeToggler className="h-full border-dashed" /> */}
                        <UserProfile className="size-10 md:size-14 mx-3" />
                    </>
                )}
                {!isPending && !session && (
                    <>
                        <Button className="h-full shadow-md hover:shadow-lg transition-shadow" variant="ghost">
                            <Link href="/sign-in">
                                <span>Sign In</span>
                            </Link>
                        </Button>
                        {/* <ThemeToggler className="h-full border-dashed" /> */}
                    </>
                )}
            </div>
        </div>
    )
}
