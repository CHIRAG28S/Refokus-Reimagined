import React from "react";
import Product from "./Product";
import arqitel from "../assets/arqitel.mp4";
import ttr from "../assets/ttr.mp4";
import yir from "../assets/yir.mp4";
import yahoo from "../assets/yahoo.mp4";
import rainfall from "../assets/rainfall.mp4";

const Products = () => {
    var products = [
        {
            title: "arqitel",
            description:
                "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
            live: true,
            case: false,
            url: arqitel
        },
        {
            title: "TTR",
            description:
                "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
            live: true,
            case: false,
            url:ttr
        },
        {
            title: "YIR 2022",
            description:
                "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
            live: true,
            case: false,
            url: yir
        },
        {
            title: "Yahoo",
            description:
                "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
            live: true,
            case: true,
            url: yahoo
        },
        {
            title: "Rainfall ",
            description:
                "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
            live: true,
            case: true,
            url: rainfall
        },
    ];

    return (
        <div className="mt-16 sm:mt-24 md:mt-32 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-y-16 md:gap-y-32">
                {products.map((product, idx) => (
                    <Product key={idx} value={product} />
                ))}
            </div>
        </div>
    );
};

export default Products;
