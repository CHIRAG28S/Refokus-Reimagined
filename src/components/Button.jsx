import React from "react";
import { HiArrowTurnDownRight } from "react-icons/hi2";

const Button = ({ title = "Get Started" }) => {
    return (
        <div className="px-3 sm:px-4 py-2 rounded-2xl bg-zinc-200 text-black flex items-center justify-between gap-2 sm:gap-3">
            <span className="text-xs sm:text-sm font-bold">{title}</span>
            <HiArrowTurnDownRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
    );
};
export default Button;
