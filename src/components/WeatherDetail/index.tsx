import WeatherDayCard from "../WeatherDayCard";

export default function WeatherDetail() {
    return (
        <div className="flex flex-col justify-center gap-10 bg-[#100E1D] px-32 py-10">
            <div className="flex justify-end gap-3">
                <p className="rounded-full bg-[#E7E7EB] px-3 py-2 font-bold text-[#110E3C] hover:cursor-pointer">
                    °C
                </p>
                <p className="rounded-full bg-[#585676] px-3 py-2 font-bold text-[#E7E7EB] hover:cursor-pointer">
                    °F
                </p>
            </div>
            <div className="flex items-center justify-center">
                <WeatherDayCard />
                <WeatherDayCard />
                <WeatherDayCard />
                <WeatherDayCard />
                <WeatherDayCard />
            </div>
            <p className="ml-3 text-2xl font-bold text-white">
                Today's highlights
            </p>
            <div className="grid grid-cols-2 grid-rows-2 place-items-center gap-10">
                <div className="flex h-[175px] w-[350px] flex-col items-center justify-center gap-3 bg-[#1E213A]">
                    <p className="text-[16px] text-[#E7E7EB]">Wind status</p>
                    <p className="text-4xl text-white">
                        <span className="text-[64px] font-bold">7</span>mph
                    </p>
                </div>
                <div className="flex h-[175px] w-[350px] flex-col items-center justify-center gap-3 bg-[#1E213A]">
                    <p className="text-[16px] text-[#E7E7EB]">Humidity</p>
                    <p className="text-[64px] font-bold text-white">84%</p>
                    <progress
                        className="progress-warning progress w-56"
                        value="84"
                        max="100"
                    ></progress>
                </div>
                <div className="flex h-[175px] w-[350px] flex-col items-center justify-center gap-3 bg-[#1E213A]">
                    <p className="text-[16px] text-[#E7E7EB]">Visibility</p>
                    <p className="text-4xl text-white">
                        <span className="text-[64px] font-bold">6,4</span> miles
                    </p>
                </div>
                <div className="flex h-[175px] w-[350px] flex-col items-center justify-center gap-3 bg-[#1E213A]">
                    <p className="text-[16px] text-[#E7E7EB]">Air Pressure</p>
                    <p className="text-4xl text-white">
                        <span className="text-[64px] font-bold">998</span> mb
                    </p>
                </div>
            </div>
        </div>
    );
}
