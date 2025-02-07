import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const Work = () => {
    const [images, setImages] = useState([
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
            top: "50%",
            left: "50%",
            isActive: false,
        },
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
            top: "56%",
            left: "44%",
            isActive: false,
        },
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
            top: "45%",
            left: "55%",
            isActive: false,
        },
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
            top: "63%",
            left: "53%",
            isActive: false,
        },
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
            top: "42%",
            left: "46%",
            isActive: false,
        },
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
            top: "75%",
            left: "50%",
            isActive: false,
        },
    ]);

    const { scrollYProgress } = useScroll();

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        function showImages(arr) {
            setImages((prev) =>
                prev.map((item, index) =>
                    arr.indexOf(index) === -1
                        ? { ...item, isActive: false }
                        : { ...item, isActive: true }
                )
            );
        }

        switch (Math.floor(latest * 100)) {
            case 0:
                showImages([]);
                break;
            case 1:
                showImages([0]);
                break;
            case 2:
                showImages([0, 1]);
                break;
            case 3:
                showImages([0, 1, 2]);
                break;
            case 4:
                showImages([0, 1, 2, 3]);
                break;
            case 6:
                showImages([0, 1, 2, 3, 4]);
                break;
            case 8:
                showImages([0, 1, 2, 3, 4, 5]);
                break;
        }
    });

    return (
        <div className="w-full border-red-400 ">
            <div className="relative max-w-screen-xl mx-auto text-center ">
                <h1 className="text-[33vw] leading-none select-none tracking-tight">work</h1>
                <div className="absolute top-0 w-full h-full">
                    {images.map((ele, idx) => {
                        return (
                            ele.isActive && (
                                <img
                                    className="absolute w-32 sm:w-40 md:w-48 lg:w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                                    key={idx}
                                    src={ele.url}
                                    style={{ top: ele.top, left: ele.left }}
                                />
                            )
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Work;
