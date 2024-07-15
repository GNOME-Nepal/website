import react from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook} from "@fortawesome/free-brands-svg-icons"
import {faSquareXTwitter} from "@fortawesome/free-brands-svg-icons"
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faInstagram} from "@fortawesome/free-brands-svg-icons"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";


const NextArrow = ({ className, style, onClick }) => (
    <div
        className={`${className} text-green-500`}
        style={{ ...style, display: "block", color: "green" }}
        onClick={onClick}
    >
        <FontAwesomeIcon icon={faChevronRight} />
    </div>
);

const PrevArrow = ({ className, style, onClick }) => (
    <div
        className={`${className} text-green-500`}
        style={{ ...style, display: "block", color: "green" }}
        onClick={onClick}
    >
        <FontAwesomeIcon icon={faChevronLeft} />
    </div>
);

function ContributorsDetails() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };
    return (
        <div className="w-3/4 m-auto" >
            <div >
            <Slider {...settings}>
                {data.map((d,index)=> (
                    <div key={index} className="px-4">
                    <div className="border-4 rounded-lg gap-9 ">
                      
                        <div className="h-60 rounded-t-xls bg-green-500 flex  ">
                            <img src={d.img} alt={d.name} className="h-50" />
                        </div>

                        <div className="flex flex-col justify-center items-center p-4">
                            <p className="text-xl font-semibold">{d.name}</p>
                           
                        </div>
                        <div  className="flex space-x-4  justify-center items-center h">
                            <a href="#"><FontAwesomeIcon icon={faFacebook} /> </a>
                            <a href="#"><FontAwesomeIcon icon={faSquareXTwitter} /> </a>
                            <a href="#"><FontAwesomeIcon icon={faLinkedin} /> </a>
                            <a href="#"><FontAwesomeIcon icon={faInstagram} /> </a>
                        </div>
                    </div>
                    </div>
                ))}
                </Slider>
            </div>
        </div>
    );
}

const data = [
    {
        img: `/image/image1.png`,
        name: `Ashwini`,
     
    },
    {
        img: `/image/image1.png`,
        name: `Supreme`,
       
    },
    {
        name: `Saksham Humagain`,
        img: `/image/image1.png`,
        
    },

    {
        name:`Tamrakar`,
        img: `/image/image1.png`,
        
    },
    {
        name :`Ananda`,
        img: `/image/image1.png`,
        
    },
    {
        name: `Arjun Gautam`,
        img: `/image/image1.png`,
    },
    {
        name: `Bikash`,
        img: `/image/image1.png`,
    },
    {
        name: 'Shailee',
        img: `/image/image1.png`,
    },
    {
        name : 'Utsav',
        img: `/image/image1.png`,
    },

]

export default ContributorsDetails;