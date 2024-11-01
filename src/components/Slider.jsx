import { useRef, useEffect } from "react";
import React from "react";

export function Slider({ children =[] }) {
    const sliderStyle = {
        width: "100%",
        height: "fit-content"
    };
    const sliderClass = "";

    const currentActive = useRef(0);
    const childrenRefs = useRef([]);

    useEffect(() => {
        childrenRefs.current.forEach((childRef, index) => {
            if (childRef) {
                if (index === currentActive.current) {
                    childRef.classList.remove('GNOMEDivHide');
                } else {
                    childRef.classList.add('GNOMEDivHide');
                }
            }
            console.log("here");
        });
    }, [currentActive.current]);

    setInterval(() => {
        currentActive.current++;
        if (currentActive.current >= children.length) {
            currentActive.current = 0;
        }

        childrenRefs.current.forEach((childRef, index) => {
            if (childRef) {
                if (index === currentActive.current) {
                    childRef.classList.remove('GNOMEDivHide');
                } else {
                    childRef.classList.add('GNOMEDivHide');
                }
            }
        });
    }, 15000);

    return (
        <div className={sliderClass} style={sliderStyle}>
            {React.Children.map(children, (child, index) =>
                React.cloneElement(child, {
                    ref: el => (childrenRefs.current[index] = el)
                })
            )}
        </div>
    );
}