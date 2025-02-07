import React from "react";

const Footer = () => {
    return (
        <div className="w-full px-6 md:px-12">
            <div className="max-w-screen-xl mx-auto py-10 flex flex-wrap lg:flex-nowrap gap-45">
                <div className="w-full lg:w-[30%] xl:w-[25%] text-center lg:text-left">
                    <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[6rem] xl:text-[7rem] font-bold leading-none whitespace-nowrap">
                        refokus.
                    </h1>
                </div>

                <div className="w-full lg:w-[70%] xl:w-[75%] flex flex-wrap lg:flex-nowrap gap-6 lg:gap-10">
                    <div className="min-w-[120px] flex-1">
                        <h4 className="mb-4 text-lg font-semibold">Socials</h4>
                        {["Instagram", "Twitter", "LinkedIn"].map((item, idx) => (
                            <a
                                className="block mt-2 text-zinc-600 capitalize text-sm sm:text-base"
                                key={idx}
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="min-w-[120px] flex-1">
                        <h4 className="mb-4 text-lg font-semibold">Links</h4>
                        {["Home", "Work", "Careers", "Contacts"].map((item, idx) => (
                            <a
                                className="block mt-2 text-zinc-600 capitalize text-sm sm:text-base"
                                key={idx}
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="min-w-[150px] flex-1 text-right flex flex-col justify-between">
                        <p className="text-sm sm:text-base text-zinc-500 leading-relaxed">
                            Refokus is a pioneering digital agency driven by design and empowered by
                            technology.
                        </p>
                        <img
                            src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp"
                            className="w-28 sm:w-32 md:w-40 lg:w-44 mt-6 md:mt-10 self-end"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
