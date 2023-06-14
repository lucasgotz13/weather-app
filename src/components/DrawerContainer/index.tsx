import Drawer from "../ui/Drawer";
import { BiCurrentLocation } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";

export default function DrawerContainer() {
    return (
        <div className="bg-[#1E213A] bg-[url('/images/Cloud-background.png')] bg-no-repeat bg-[center_top_5rem] bg-blend-overlay h-screen w-full p-10 flex flex-col  gap-5">
            <div className="mb-10 flex items-center justify-between gap-32">
                <Drawer />
                <BiCurrentLocation size={40} />
            </div>
            <div className="flex justify-center">
                <img src="../images/Shower.png" alt="" />
            </div>
            <p className="text-[144px] text-[#E7E7EB] text-center">
                15
                <span className="text-5xl text-[#A09FB1] text-center">°C</span>
            </p>
            <p className="text-4xl mb-16 text-center">Shower</p>
            <p className="text-center">
                Today <span className="mx-5">•</span> Fri, 5 Jun
            </p>
            <div className="flex items-center justify-center">
                <MdLocationOn />
                <p className="ml-2">Helsinki</p>
            </div>
        </div>
    );
}
