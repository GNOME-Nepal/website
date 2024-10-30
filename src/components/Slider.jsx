import { useRef } from "react";

export function Slider({ children }) {
    const sliderStyle = {
        width: "100%",
        height: "fit-content"
    };
    const sliderClass = "";
    
    const currentActive = useRef(0);    

    const updateSlide = () => {
        // make the current one disappear

        currentActive.current++;
        if (currentActive.current >= children.length)
            currentActive.current = 0;

        // put the current active one
    };

    // setInterval(updateSlide, 3000);

    return (
        <>
            <div className={sliderClass} style={sliderStyle}>
                {children}
            </div>
        </>
    );
}