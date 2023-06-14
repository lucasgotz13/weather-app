import DrawerContainer from "@/components/DrawerContainer";
import WeatherDetail from "@/components/WeatherDetail";

export default function Home() {
    return (
        <main className="grid grid-cols-[30%_70%]">
            <DrawerContainer />
            <WeatherDetail />
        </main>
    );
}
