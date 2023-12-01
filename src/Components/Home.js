import React from "react";

const Home = (props)=>{
    console.warn("HOME",props.Data);
    return(
        <div>
            
            
            <h3>Home Components</h3>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                        <img src="https://images.unsplash.com/photo-1611791484670-ce19b801d192?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="phone"/>
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone price: <br/>
                    </span>
                    <span>
                         $1000
                    </span>

                </div>
                <div className="btn-wrapper item">
                <button onClick={()=>props.addToCartHandler({price:1000,name:'Iphone 11'})}>Add Cart</button>
                <button className="rem" onClick={()=>props.remToCartHandler()}>Remove Cart</button>
                </div>

            </div>
        </div>
    )
}

export default Home;