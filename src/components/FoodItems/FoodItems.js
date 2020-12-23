import React from 'react';

const FoodItems = (props) => {
    const item=props.item;
    return (
        <div  className="col-md-4 mb-4">
            <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={item.img} alt="Card" />
                <div className="card-body">
                    <h6 className="card-title">{item.name}</h6>
                    <p className="card-text">{item.description}</p>
                    <h4>${item.price}</h4>
                </div>
            </div>
        </div>
    );
};

export default FoodItems;