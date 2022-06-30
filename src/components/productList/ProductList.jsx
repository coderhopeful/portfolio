import React from 'react'
import "./productList.css"
import Product from "../product/Product"
import { products } from "../../data"

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Projects</h1>
                <p className="pl-desc">These are some of the projects I have worked on during my training at Luminar and on my own. Clicking on the image will take you to the GitHub repository. The title can be clicked to redirect you to a hosted version of the project.</p>
            </div>
            <div className="pl-list">
                {products.map((item) => (

                    <Product key={item.id} img={item.img} link={item.link} name={item.name} />
                ))}
            </div>

        </div>





    );
};

export default ProductList