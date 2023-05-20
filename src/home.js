import React, {useState} from 'react';

function Home(){

    const [restaurants] = useState([
        {
            id:1,
            img:'https://images.pexels.com/photos/15472451/pexels-photo-15472451/free-photo-of-hotel-and-restaurant-near-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name:'Restaurant Name',           
            cuisine:'Italian',
            location:'Hyderabad'
        },
        {
            id:2,
            img:'https://images.pexels.com/photos/15484277/pexels-photo-15484277/free-photo-of-emojis-decorations-over-people-in-restaurant-in-alley-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name:'Restaurant Name',
            cuisine:'Italian',
            location:'Secunderabad'
        },
        {
            id:3,
            img:'https://images.pexels.com/photos/15501337/pexels-photo-15501337/free-photo-of-entrance-to-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name:'Restaurant Name',
            cuisine:'Italian',
            location:'Secunderabad'
        },
        {
            id:4,
            img:'https://images.pexels.com/photos/15506657/pexels-photo-15506657/free-photo-of-tables-and-an-entrance-to-the-restaurant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name:'Restaurant Name',           
            cuisine:'Italian',
            location:'Hyderabad'
        },
        {
            id:5,
            img:'https://images.pexels.com/photos/15512151/pexels-photo-15512151/free-photo-of-woman-on-bicycle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name:'Restaurant Name',
            cuisine:'Italian',
            location:'Secunderabad'
        },
        {
            id:6,
            img:'https://images.pexels.com/photos/15527028/pexels-photo-15527028/free-photo-of-candles-on-gold-holders-on-restaurant-decor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name:'Restaurant Name',
            cuisine:'Italian',
            location:'Secunderabad'
        },
    ]);

    return(
        <div>
            <div className="container">
                <div className="restaurant-list">
                    {restaurants.map(restaurant=>(
                        <div className='rest-item'>
                            <figure>
                                <img src={restaurant.img} alt="" className='restimg'/>
                            </figure>
                            <article>
                                <h3>{restaurant.name}</h3>
                                <p>{restaurant.cuisine}</p>
                                <p><i>Location: <strong>{restaurant.location}</strong></i></p>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home;