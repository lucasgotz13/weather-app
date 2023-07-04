export default function WeatherDayCard() {
    return (
        <div className="mx-3 flex flex-col items-center justify-center gap-5 bg-[#1E213A] px-12 py-8">
            <p className="text-[#E7E7EB]">Tomorrow</p>
            <img src="../images/Shower.png" alt="" />
            <div className="flex items-center justify-center gap-5">
                <p className="text-[#E7E7EB]">15°C</p>
                <p>11°C</p>
            </div>
        </div>
    );
}
