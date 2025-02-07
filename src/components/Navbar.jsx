import React from "react";
import Button from "./Button";

const Navbar = () => {
    return (
        <div className="max-w-screen-xl mx-auto p-6 flex justify-between items-center border-b border-zinc-700">
            <div className="flex items-center">
                <img
                    src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
                    alt="Refokus Logo"
                    className="w-24 sm:w-28"
                />

                <div className="hidden md:flex gap-10 ml-10">
                    {["Home", "Work", "Culture", "", "News"].map((ele, idx) => (
                        <a key={idx} className="text-sm flex items-center gap-1" href="#">
                            {ele.length === 0 && <span className="w-[1px] h-7 bg-zinc-600"></span>}
                            {idx === 1 && (
                                <span
                                    style={{ boxShadow: "0 0 0.45em" }}
                                    className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full"
                                ></span>
                            )}
                            {ele}
                        </a>
                    ))}
                </div>
            </div>

            <Button />
        </div>
    );
};

export default Navbar;
