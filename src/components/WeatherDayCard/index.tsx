export default function WeatherDayCard() {
    return (
        <div className="px-12 py-8 bg-[#1E213A] flex flex-col items-center justify-center gap-5 mx-3">
            <p className="text-[#E7E7EB]">Tomorrow</p>
            <img src="../images/Shower.png" alt="" />
            <div className="flex justify-center items-center gap-5">
                <p className="text-[#E7E7EB]">15°C</p>
                <p>11°C</p>
            </div>
        </div>
    );
}
