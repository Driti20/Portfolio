import React, { useState, useEffect } from "react";
import './colorSwitch.css'
import { AiFillSetting, AiOutlineCaretRight } from 'react-icons/ai'

const ColorSwitch = () => {

    const [mode1, setMode1] = useState(() => localStorage.getItem("mode1"));

    useEffect(() => {
        window.addEventListener("storage", setPreferedTheme1);
        return () => {
            window.removeEventListener("storage", setPreferedTheme1);
        };
    }, []);

    const setPreferedTheme1 = () => {
        const _mode1 = localStorage.getItem("mode1");
        if (_mode1) {
            setMode1(_mode1);
        } 
        else {
            setMode1("light1");
        }
    };

    useEffect(() => {

        if (mode1  === "theme-orange") {
            document.body.classList.add("theme-orange");
            document.body.classList.remove('theme-pink', 'theme-red', 'theme-green', 'theme-blue');
            localStorage.setItem("mode1", "theme-orange");
        } 
        else if (mode1 === "theme-pink") {
            document.body.classList.add("theme-pink");
            document.body.classList.remove('theme-orange', 'theme-red', 'theme-green', 'theme-blue');
            localStorage.setItem("mode1", "theme-pink");
        } 
        else if (mode1 === "theme-green") {
            document.body.classList.add("theme-green");
            document.body.classList.remove('theme-orange', 'theme-red', 'theme-pink', 'theme-blue');
            localStorage.setItem("mode1", "theme-green");
        } 
        else if (mode1 === "theme-red") {
            document.body.classList.add("theme-red");
            document.body.classList.remove('theme-orange', 'theme-green', 'theme-pink', 'theme-blue');
            localStorage.setItem("mode1", "theme-red");
        } 
        else if (mode1 === "theme-blue") {
            document.body.classList.add("theme-blue");
            document.body.classList.remove('theme-orange', 'theme-green', 'theme-pink', 'theme-red');
            localStorage.setItem("mode1", "theme-blue");
        } 
        else {
            document.body.classList.add("theme-orange");
            document.body.classList.remove('theme-pink', 'theme-red', 'theme-green', 'theme-blue');
            localStorage.setItem("mode1", "theme-orange");
        } 
       
    }, [mode1]);


    return(
        <>
        <div className="color-switch">
            <AiFillSetting/>
        </div>
        <div className='color-switch-container'>
            <AiOutlineCaretRight className="arrowRight"/>

            <div className={`${mode1 === 'theme-orange' ? "color color1 active" : "color color1"}`}  
                onClick={() => setMode1('theme-orange')} >
            </div>

            <div className={`${mode1 === 'theme-blue' ? "color color2 active" : "color color2"}`}
                onClick={() => setMode1('theme-blue')}>
            </div>

            <div className={`${mode1 === 'theme-pink' ? "color color3 active" : "color color3"}`}
                onClick={() => setMode1('theme-pink')}>
            </div>

            <div className={`${mode1 === 'theme-red' ? "color color4 active" : "color color4"}`}
                onClick={() => setMode1('theme-red')}>
            </div>

            <div className={`${mode1 === 'theme-green' ? "color color5 active" : "color color5"}`}
                onClick={() => setMode1('theme-green')}>
            </div>

        </div>
        </>
    ) 
};

export default ColorSwitch;