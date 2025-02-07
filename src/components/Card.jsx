import React from "react";
import { FaArrowRight } from "react-icons/fa6";
const Card = ({ width, start, para, title, heading, bg }) => {
    return (
        <div
            className={`p-5 hover:p-6 rounded-xl ${width} flex flex-col justify-between ${bg} hover:bg-zinc-100 hover:text-black transition-all duration-500 ease-in-out`}
            style={{ backgroundColor: bg }}
        >
            <div>
                <div className="w-full flex justify-between items-center">
                    <h2 className="text-lg sm:text-xl">{title}</h2>
                    <FaArrowRight className="text-sm sm:text-base" />
                </div>
                <h1 className="text-2xl sm:text-3xl mt-5">{heading}</h1>
            </div>

            <div className="mt-20 sm:mt-40 md:mt-60 w-full">
                {start && (
                    <>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl tracking-tight leading-none">
                            Start a Project
                        </h1>
                        <button className="mt-5 px-4 py-2 text-sm sm:text-base rounded-full border-[1px]">
                            Contact Us
                        </button>
                    </>
                )}

                {para && (
                    <p className="text-xs sm:text-sm text-zinc-500">
                        Web Design, WebFlow, Creative Development and beyond.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Card;
