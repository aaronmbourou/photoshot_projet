import React from "react"; 
import fantaLogo from "../assets/R-removebg-preview.png"

const AppBar = () => {
    return (
       <div className="bg-white h-24 w-full absolute top-0 flex p-3 text-black justify-between font-bold">
            <div className="h-full flex items-center gap-5 text-xl " >
                <img className="h-full" src={fantaLogo} alt="" />
                <p>My fanta app</p>
            </div>
            <div className="flex items-center gap-16 pr-20 ">
                <a className="text-black text-xl" href="contact">
                    <p>Contact</p>
                </a>
                <a className="text-black text-xl" href="about">
                    <p>about</p>
                </a>
                <a className="text-black text-xl" href="book">
                    <p>book </p>
                </a>
            </div>
       </div>
    )
}
export default AppBar