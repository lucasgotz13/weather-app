import WeatherDayCard from "../WeatherDayCard";

export default function WeatherDetail() {
    return (
        <div className="bg-[#100E1D] px-32 py-10 flex flex-col justify-center gap-10">
            <div className="flex justify-end gap-3">
                <p className="bg-[#E7E7EB] rounded-full text-[#110E3C] font-bold px-3 py-2">
                    °C
                </p>
                <p className="bg-[#585676] rounded-full text-[#E7E7EB] font-bold px-3 py-2">
                    °F
                </p>
            </div>
            <div className="flex justify-center items-center">
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
                <div className="bg-[#1E213A] w-[350px] h-[175px] flex flex-col gap-3 justify-center items-center">
                    <p className="text-[16px] text-[#E7E7EB]">Wind status</p>
                    <p className="text-4xl text-white">
                        <span className="text-[64px] font-bold">7</span>mph
                    </p>
                </div>
                <div className="bg-[#1E213A] w-[350px] h-[175px] flex flex-col gap-3 justify-center items-center">
                    <p className="text-[16px] text-[#E7E7EB]">Humidity</p>
                    <p className="text-[64px] font-bold text-white">84%</p>
                    <progress
                        className="progress progress-warning w-56"
                        value="84"
                        max="100"
                    ></progress>
                </div>
                <div className="bg-[#1E213A] w-[350px] h-[175px] flex flex-col gap-3 justify-center items-center">
                    <p className="text-[16px] text-[#E7E7EB]">Visibility</p>
                    <p className="text-4xl text-white">
                        <span className="text-[64px] font-bold">6,4</span> miles
                    </p>
                </div>
                <div className="bg-[#1E213A] w-[350px] h-[175px] flex flex-col gap-3 justify-center items-center">
                    <p className="text-[16px] text-[#E7E7EB]">Air Pressure</p>
                    <p className="text-4xl text-white">
                        <span className="text-[64px] font-bold">998</span> mb
                    </p>
                </div>
            </div>
        </div>
    );
}
