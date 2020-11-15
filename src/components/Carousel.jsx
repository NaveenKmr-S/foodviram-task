import React from "react";
import Carousel from 'react-elastic-carousel';
import Carcard from "./Car_card";



export default function carousel(){
    return(

        <div className="sec2 ">
            <h1 className="underline">Today's Special</h1>
            <Carousel itemsToShow={1} enableSwipe={true}  enableMouseSwipe={true} className="car" enableAutoPlay={true} autoPlaySpeed={3000}>
                <div className="pad">
                    <Carcard 
                        title="Pizza"
                        alt="pizza"
                        content="A large disc of dough, covered with tomato paste, then either only grated cheese or pieces of mozzarella cheese, or other toppings like vegetables"
                        url="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
                </div>
                <div className="pad">
                    <Carcard 
                        title="Burger"
                        alt="burger"
                        content="A burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun."
                        url="https://images.unsplash.com/photo-1428660386617-8d277e7deaf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80" />
                </div>
                <div className="pad">
                    <Carcard 
                        title="Salad"
                        alt="salad"
                        content="A salad is a dish consisting of pieces of food in a mixture, with at least one raw ingredient. any herb or green vegetable, as lettuce, used for salads ."
                        url="https://images.unsplash.com/photo-1547496502-affa22d38842?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=584&q=80" />
                </div>
                <div className="pad">
                    <Carcard 
                        title="Fried chicken"
                        alt="Fried chicken"
                        content="fried chicken, also known simply as fried chicken, is a dish consisting of chicken pieces which have been coated in a seasoned batter and pan-fried"
                        url="https://images.unsplash.com/photo-1562967914-01efa7e87832?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                </div>

                <div class="cardss">
                    <div class="shimmerBG media"></div>
                    <div class="p-32">
                    <div class="shimmerBG title-line"></div>

                    <div class="shimmerBG content-line m-t-24"></div>
                    <div class="shimmerBG content-line end"></div>
                    </div>
                </div>
            </Carousel>
        </div>
    
    );
}