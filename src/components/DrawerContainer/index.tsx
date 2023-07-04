"use client";
import { WeatherContext } from "@/context/WeatherContext";
import { useContext } from "react";
import Drawer from "../ui/Drawer";
import { BiCurrentLocation } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";

export default function DrawerContainer() {
    //@ts-ignore
    const { weatherData } = useContext(WeatherContext);
    console.log(weatherData);

    const today = new Date();
    const options = { weekday: "short", day: "numeric", month: "short" };
    const formattedDate = today.toLocaleDateString("en-US", options);

    return (
        <div className="flex h-screen w-full flex-col gap-5 bg-[#1E213A] bg-[url('/images/Cloud-background.png')] bg-[center_top_5rem] bg-no-repeat p-10  bg-blend-overlay">
            <div className="mb-10 flex items-center justify-between gap-32">
                <Drawer />
                <BiCurrentLocation size={40} />
            </div>
            <div className="flex justify-center">
                <img
                    src={`../images/${
                        weatherData?.current?.condition?.text ?? "LightRain"
                    }.png`}
                    alt=""
                />
            </div>
            <p className="text-center text-[144px] text-[#E7E7EB]">
                {weatherData?.current?.temp_c}
                <span className="text-center text-5xl text-[#A09FB1]">°C</span>
            </p>
            <p className="mb-16 text-center text-4xl">
                {weatherData?.current?.condition?.text}
            </p>
            <p className="text-center">
                Today <span className="mx-5">•</span> {formattedDate}
            </p>
            <div className="flex items-center justify-center">
                <MdLocationOn />
                <p className="ml-2">{weatherData?.location?.name}</p>
            </div>
        </div>
    );
}
