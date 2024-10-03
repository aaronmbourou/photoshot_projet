import React, { useState } from "react";
import photo_diaporama from "../assets/t.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
const Diaporama = () => {
    const list = [
        'bg-red-600',
        "bg-paysage",
        "bg-paysage_t",
        "bg-yellow-600",
        "bg-green-600",
        "bg-blue-600",
    ]
    const [currentIndex,setCurrentIndex] = useState(0);
    const goToSlide = (index) =>{
        setCurrentIndex(index)
    }
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex +1)% list.length )
    
    }
    const prevslide = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? list.length -1 : prevIndex-1)
    }
    return (
        <>
            <div className="relative w-full h-screen overflow-hidden">
                <div className="relative h-full w-full">
                    <div className=" flex transition-transform duration-700 ease-in-out w-full h-full" style={{transform:`translateX(-${currentIndex * 100}%)`}}>
                        {list.map((image,index)=>(
                            <div key={index} className={`${image} flex-shrink-0 h-full w-full bg-cover bg-bottom bg-no-repeat flex flex-col items-center md:flex-row justify-between px-6 py-10`}>

                            </div>
                        ))}

                    </div>
                </div>

                <div className="absolute bottom-4 flex left-1/2 transform -translate-x-1/2 space-x-3">
                    {list.map((_,index) => (
                        <button key={{index}} className={`${index == currentIndex ? "bg-[#7a8fa9]" :"bg-[#7a8fa9] bg-opacity-50 "}`} onClick={()=> goToSlide(index)} aria-label={`Slide ${index+1}`} />
                    ))}
                </div>
                <div className="absolute left-6 top-0 z-10 flex items-center justify-center h-full">
                    <button className="h-12 w-12 rounded-full text-white bg-[#7a8fa9] bg-opacity-50 hover:bg-opacity-70" onClick={prevslide} aria-label={`Previous Slide`} >
                        <FontAwesomeIcon icon={faChevronLeft}/>
                    </button>
                </div>
                <div className="absolute right-6 top-0 z-10 flex items-center justify-center h-full">
                    <button className="h-12 w-12 rounded-full text-white bg-[#7a8fa9] bg-opacity-50 hover:bg-opacity-70" onClick={nextSlide} aria-label={`Next Slide`}>
                        <FontAwesomeIcon icon={faChevronRight}/>
                    </button>
                </div>
            </div>
        </>
    )
}
export default Diaporama