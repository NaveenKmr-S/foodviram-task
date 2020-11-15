import React from "react";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Carousel from "./Carousel";
export default function header(){
    return(
        <div>
            <div className="res-img">
                <img style={{height:"180px"}} src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="restaurent-img" />
            </div>
            <div className="res-con">
                <h1>Al Harmani Restaurant</h1>
                <p className="quc">Quick Bites - Chinese, Briyani</p>
                <p className="loc">Thottapalayam, Vellore</p>
                <p className="loc">Cost for two - ₹350( approx. )</p>

                <ul>
                    <li className="rating"><StarIcon className="star"/></li>
                    <li className="rating"><StarIcon className="star"/></li>
                    <li className="rating"><StarIcon className="star"/></li>
                    <li className="rating"><StarIcon className="star"/></li>
                    <li className="rating"><StarBorderIcon className="star"/></li>
                    <li className="rating rev"> ( 4.2 )</li>
                    
                </ul>
               

            </div>
        </div>
    );
}
