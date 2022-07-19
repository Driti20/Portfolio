import React, { useEffect, useState } from 'react'
import {BsMoonFill, BsSunFill} from 'react-icons/bs'
import './modeSwitch.css'

const ModeSwitch = () => {
    const [mode, setMode] = useState(() => localStorage.getItem("mode"));

    useEffect(() => {
        window.addEventListener("storage", setPreferedTheme);
        return () => {
            window.removeEventListener("storage", setPreferedTheme);
        };
    }, []);

    const setPreferedTheme = () => {
        const _mode = localStorage.getItem("mode");
        if (_mode) {
            setMode(_mode);
        } else {
            setMode("light");
        }
    };

    useEffect(() => {
        if (mode === "dark") {
            document.body.classList.add("dark-mode");
            localStorage.setItem("mode", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("mode", "light");
        }
    }, [mode]);
  return (
    <>
            {mode === "dark" ? 
                <div className='mode-switch' onClick={() =>
                    setMode(mode => (mode === "dark" ? "light" : "dark"))   
                }>
                    <BsMoonFill />
                </div> 
                :
                <div className='mode-switch' onClick={() =>
                    setMode(mode => (mode === "dark" ? "light" : "dark"))   
                }>
                    <BsSunFill />
                </div> 
            }                           
    </>
        
  )
}

export default ModeSwitch