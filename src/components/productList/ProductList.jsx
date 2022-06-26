import React from 'react'
import "./productList.css"
import Product from "../product/Product"
import { products } from "../../data"

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Projects</h1>
                <p className="pl-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit aspernatur reprehenderit iure harum, praesentium dicta delectus at nisi nemo aliquam earum blanditiis perferendis nihil beatae animi doloremque dolores numquam aperiam.
                    Non voluptatem maxime iure ea sint pariatur. Porro dicta illum molestiae veniam perspiciatis necessitatibus, minus eaque itaque? Iste, odio veritatis. Aut, enim. Sapiente ipsam quidem alias odio illum, soluta corrupti?</p>
            </div>
            <div className="pl-list">
                { products.map((item) => (

                        <Product key={item.id} img={item.img} link={item.link} name={item.name} />
                    ))}
            </div>
        </div>




    );
};

export default ProductList