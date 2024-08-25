// rest here represents the rest of the image attributes 

import { useEffect } from "react";
import { preloadImage } from "@/lib/preloadImage";

// other than src
const Image = ({ src, ...rest }) => {
    useEffect(() => {
        preloadImage(src)
            .catch((e) => console.log(e))
        return () => {
            preloadImage(src)
        }
    }, [src]);

    return <img src={src} loading="lazy" {...rest} />
};

export default Image;
