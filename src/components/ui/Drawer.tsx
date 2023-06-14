import { MdClose, MdArrowForwardIos } from "react-icons/md";

export default function Drawer() {
    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label
                    htmlFor="my-drawer"
                    className="btn bg-[#6E707A] drawer-button rounded-none text-white"
                >
                    Search for places
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu px-16 py-5 w-[30%] h-full bg-[#1E213A] text-base-content">
                    <div className="flex flex-col gap-10">
                        <label htmlFor="my-drawer">
                            <MdClose
                                size={30}
                                className="ml-auto hover:cursor-pointer"
                            />
                        </label>
                        <div className="flex items-center gap-2">
                            <input
                                type="text"
                                className="w-[75%] px-2 py-3 bg-transparent border-[1px]"
                                placeholder="Search location"
                            />
                            <button className="px-6 py-3 bg-[#3C47E9] text-[#E7E7EB]">
                                Search
                            </button>
                        </div>
                        <div className="border-2 border-[#1e213a] hover:border-[#E7E7EB] p-5 flex items-center justify-between">
                            <p className="text-[#E7E7EB]">London</p>
                            <MdArrowForwardIos size={30} />
                        </div>
                        <div className="border-2 border-[#1e213a] hover:border-[#E7E7EB] p-5 flex items-center justify-between">
                            <p className="text-[#E7E7EB]">Barcelona</p>
                            <MdArrowForwardIos size={30} />
                        </div>
                        <div className="border-2 border-[#1e213a] hover:border-[#E7E7EB] p-5 flex items-center justify-between">
                            <p className="text-[#E7E7EB]">Long Beach</p>
                            <MdArrowForwardIos size={30} />
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    );
}
