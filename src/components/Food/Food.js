import React, { useState } from 'react';
import './Food.css';
import fakedata from '../../fakedata/index';
import FoodItems from '../FoodItems/FoodItems';

const Food = () => {

    const allFoods = [...fakedata];

    const lunch= allFoods.filter((food) => {
        return food.category === 'lunch';                        
   });

    const [menu,setMenu]=useState(lunch);
    const filterFoods = (category) => {
        let menuFoods; 
        menuFoods = allFoods.filter((food) => {
             return food.category === category;                        
        });
        setMenu(menuFoods);    
    };
    console.log(menu);

    return (
        <div className='navigation'>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <button onClick={() => filterFoods('breakfast')} className="food-menu-button">Breakfast</button>
                </li>
                <li className="nav-item">
                    {/* <a className="nav-link" href="#">Lunch</a> */}
                    <button onClick={() => filterFoods('lunch')} className="food-menu-button">Lunch</button>
                </li>
                <li className="nav-item">
                    {/* <a className="nav-link" href="#">Dinner</a> */}
                    <button onClick={() => filterFoods('dinner')} className="food-menu-button">Dinner</button>
                </li>
            </ul>
            <div className='row my-5 food-item-container d-flex justify-content-center '>
                {
                    menu.map((item)=><FoodItems item={item}/>)
                }
            </div>
        </div>

    );
};

export default Food;