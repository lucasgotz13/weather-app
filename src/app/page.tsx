"use client";
import DrawerContainer from "@/components/DrawerContainer";
import WeatherDetail from "@/components/WeatherDetail";
import { WeatherProvider } from "@/context/WeatherContext";

export default function Home() {
    return (
        <WeatherProvider>
            <main className="grid grid-cols-[30%_70%]">
                <DrawerContainer />
                <WeatherDetail />
            </main>
        </WeatherProvider>
    );
}
