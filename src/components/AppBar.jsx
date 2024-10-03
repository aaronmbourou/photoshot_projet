import React from "react"; 
import fantaLogo from "../assets/R-removebg-preview.png"

const AppBar = () => {
    return (
        <div className=" h-16 w-full z-50 absolute top-0 flex p-3 text-black justify-center font-bold">
            <div className="flex w-3/5 justify-between">
                <div className="h-full flex items-center gap-5 text-xl " >
                    <img className="h-full" src={fantaLogo} alt="" />
                    
                </div>
                <div className="flex items-center space-x-10 list-none">
                    <li>
                        <a className="text-base font-bold text-white hover:text-gray-900" href="contact">
                            CONTACT
                        </a>
                    </li>
                    <li>
                        <a className="text-base font-bold text-white hover:text-gray-900"href="about">
                            GALLERY
                        </a>
                    </li>
                    <li>
                        <a className="text-base font-bold text-white hover:text-gray-900" href="book">
                            PRICING
                        </a>
                    </li>
                    
                    
                    

                </div> 
                <div>
                    <button className="bg-white hover:bg-gray-100 py-2 px-6 hover:border-transparent rounded-3xl shadow-lg border border-transparent">
                        book 
                    </button>
                </div>          
            </div> 
        </div>
    )
}
export default AppBar