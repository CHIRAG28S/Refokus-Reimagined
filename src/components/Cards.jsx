import React from "react";
import Card from "./Card";

const Cards = () => {
    return (
        <div className="w-full px-4">
            <div className="max-w-screen-xl mx-auto py-20 flex flex-col md:flex-row gap-4">
                <Card
                    width="w-full md:basis-1/3"
                    start={false}
                    para={true}
                    title="WORK"
                    heading="Projects & Case Studies"
                    bg="bg-zinc-800"
                />
                <Card
                    width="w-full md:basis-2/3"
                    start={true}
                    para={false}
                    title="GET IN TOUCH"
                    heading="Let's get to it."
                    bg="#7443ff"
                />
            </div>
        </div>
    );
};

export default Cards;
