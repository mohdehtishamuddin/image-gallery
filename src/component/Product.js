import React from "react";
import "./Style.css"


function Product(props) {
    return(
       
  <div id="product-101" className="product">
        <img src={props.img} alt="" />
        <h3 className="title">{props.name}</h3>
        <span>Price: $ ${props.price}</span>
        <button className="add-to-cart" >Add To Cart</button>
    </div>
     
    )
}
export default Product;