import React from "react";

const Stripe = ({ url, number }) => {
    return (
        <div className="w-1/5 h-[80px] md:h-[90px] lg:h-[100px] px-4 border-t border-b border-r border-zinc-600 flex flex-wrap justify-between items-center">
            <img src={url} alt="logo" className="w-20 md:w-24 lg:w-28 xl:w-32 h-auto" />
            <span className="font-semibold text-xs md:text-sm lg:text-base">{number}</span>
        </div>
    );
};

export default Stripe;
