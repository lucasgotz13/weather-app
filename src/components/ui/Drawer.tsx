"use client";

import { WeatherContext } from "@/context/WeatherContext";
import { useContext, useEffect, useState } from "react";
import { MdClose, MdArrowForwardIos } from "react-icons/md";

export default function Drawer() {
    //@ts-ignore
    const { weatherData, setWeatherData, getDataFromCurrentLocation } =
        useContext(WeatherContext);
    const [input, setInput] = useState<string>("London");

    useEffect(() => {
        fetch(
            `http://api.weatherapi.com/v1/forecast.json?key=c6da61cae95f4d7895b34035230806&q=${input}&days=5&aqi=no&alerts=no`
        )
            .then((res) => res.json())
            .then((data) => {
                return setWeatherData(data);
            });
    }, []);

    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label
                    htmlFor="my-drawer"
                    className="drawer-button btn rounded-none bg-[#6E707A] text-white"
                >
                    Search for places
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu h-full w-[30%] bg-[#1E213A] px-16 py-5 text-base-content">
                    <div className="flex flex-col gap-10">
                        <label htmlFor="my-drawer">
                            <MdClose
                                size={30}
                                className="ml-auto hover:cursor-pointer"
                            />
                        </label>
                        <form className="flex items-center gap-2">
                            <input
                                type="text"
                                className="w-[75%] border-[1px] bg-transparent px-2 py-3"
                                placeholder="Search location"
                                onChange={(e) => setInput(e.target.value)}
                            />
                            <button
                                className="bg-[#3C47E9] px-6 py-3 text-[#E7E7EB]"
                                onClick={(e) =>
                                    getDataFromCurrentLocation(e, input)
                                }
                            >
                                Search
                            </button>
                        </form>
                        <div className="flex items-center justify-between border-2 border-[#1e213a] p-5 hover:cursor-pointer hover:border-[#E7E7EB]">
                            <p className="text-[#E7E7EB]">London</p>
                            <MdArrowForwardIos size={30} />
                        </div>
                        <div className="flex items-center justify-between border-2 border-[#1e213a] p-5 hover:cursor-pointer hover:border-[#E7E7EB]">
                            <p className="text-[#E7E7EB]">Barcelona</p>
                            <MdArrowForwardIos size={30} />
                        </div>
                        <div className="flex items-center justify-between border-2 border-[#1e213a] p-5 hover:cursor-pointer hover:border-[#E7E7EB]">
                            <p className="text-[#E7E7EB]">Long Beach</p>
                            <MdArrowForwardIos size={30} />
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    );
}
