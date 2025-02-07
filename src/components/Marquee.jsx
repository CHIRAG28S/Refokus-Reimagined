import React from "react";
import { motion } from "framer-motion";

const Marquee = ({ images, direction }) => {
    return (
        <div className="flex w-full overflow-hidden">
            <motion.div
                initial={{ x: direction === "left" ? "0" : "-100%" }}
                animate={{ x: direction === "left" ? "-100%" : "0" }}
                transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                className="flex flex-shrink-0 gap-10 sm:gap-20 md:gap-40 py-5 sm:py-10 pr-10 sm:pr-20"
            >
                {images.map((i, idx) => (
                    <img
                        src={i}
                        key={idx}
                        className="sm:w-24 md:w-28 lg:w-32"
                        alt={`marquee-img-${idx}`}
                    />
                ))}
            </motion.div>

            <motion.div
                initial={{ x: direction === "left" ? "0" : "-100%" }}
                animate={{ x: direction === "left" ? "-100%" : "0" }}
                transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                className="flex flex-shrink-0 gap-10 sm:gap-20 md:gap-40 py-5 sm:py-10 pr-10 sm:pr-20"
            >
                {images.map((i, idx) => (
                    <img
                        src={i}
                        key={idx}
                        className="sm:w-24 md:w-28 lg:w-32"
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default Marquee;
