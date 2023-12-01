import React from "react";

const Header = (props)=>{
    console.warn("Header",props.Data);
    return(
        <div>
            
            <div className="add-cart">
                <span>{props.Data.length}</span>
                <img src="https://images.cdn3.stockunlimited.net/preview1300/add-to-cart-icon_1249253.jpg" alt=""/>
            </div>
            
        </div>
    )
}

export default Header;