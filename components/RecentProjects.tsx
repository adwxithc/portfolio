"use client";

import { ChevronRight, Link } from 'lucide-react';

import { projects } from "@/data";
import { PinContainer } from "./ui/PinContainer";
import { useState } from 'react';
import MagicButton from './ui/MagicButton';
import Image from 'next/image';

const RecentProjects = () => {

    // Number of projects to display initially
    const INITIAL_DISPLAY_COUNT = 4;
    // Step for loading more projects
    const LOAD_MORE_STEP = 4;

    const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT);


    const handleShowMore = () => {
        setDisplayCount((prevCount) => prevCount + LOAD_MORE_STEP);
    };

    return (
        <div className="py-20 ">
            <h1 className="heading">
                A small selection of{" "}
                <span className="text-purple">recent projects</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
                {projects.slice(0, displayCount).map((item) => (
                    <div
                        className="lg:min-h-[30rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"

                        key={item.id}
                    >
                        <PinContainer
                            title={item.title}
                            href={item.link}
                        >
                            <div
                                className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] md:h-[30vh] mb-10"
                            >
                                <div
                                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                                    style={{ backgroundColor: "#13162D" }}
                                >
                                    <Image src="/bg.png" alt="bgimg" width={380} height={230} />
                                </div>
                                <Image
                                    src={item.img}
                                    alt="cover"
                                    className="z-10 absolute bottom-0"
                                    height={500}
                                    width={360}
                                />
                            </div>

                            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                {item.title}
                            </h1>

                            <p
                                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                                style={{
                                    color: "#BEC1DD",
                                    margin: "1vh 0",
                                }}
                            >
                                {item.des}
                            </p>

                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex items-center">
                                    {item.iconLists.map((icon, index) => (
                                        <div
                                            key={index}
                                            className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                            style={{
                                                transform: `translateX(-${5 * index + 2}px)`,
                                            }}
                                        >
                                            <Image src={icon} alt="icon" className="p-2" height={50} width={50} />
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-center items-center gap-1">
                                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                                        Check Live Site
                                    </p>
                                    <Link size={18} />
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
            <div className='flex justify-center'>
                {
                    displayCount < projects.length &&
                    <MagicButton
                        title='Show more'
                        icon={<ChevronRight />}
                        position='right'
                        handleClick={handleShowMore}
                        className='mx-auto'
                    />
                }

            </div>

        </div>
    );
};

export default RecentProjects;
