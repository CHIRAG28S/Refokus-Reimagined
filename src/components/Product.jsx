import { motion } from "framer-motion";
import { useState } from "react";
import Button from "./Button";

const Product = ({ value }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="w-full py-16 text-white"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center md:justify-between text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl capitalize font-medium">
                    {value.title}
                </h1>

                <motion.div
                    animate={{ scale: hovered ? 1.5 : 1.1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-40 sm:w-52 md:w-60 lg:w-72 xl:w-80 mb-4 mt-8 sm:mb-6 sm:mt-6"
                >
                    <video src={value.url} autoPlay loop muted playsInline
                        className="w-full h-auto object-cover rounded-xl"
                    />
                </motion.div>

                <div className="w-full md:w-1/3 mt-6 md:mt-0">
                    <p className="mb-6 sm:mb-12 text-sm sm:text-base">{value.description}</p>
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10">
                        {value.live && <Button />}
                        {value.case && <Button title="Case Study" />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
