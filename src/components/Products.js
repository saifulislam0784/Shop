
import React from 'react'
import { Fragment } from 'react'
import product_image from '../m.jpg';

const Products = (data) => {
    return (

        <Fragment>

            <div className="col-md-3 my-5">
                <div className="card shadow">
                    <img src={ product_image } alt="" />
                    <div className="card-body">
                        <h2>{ data.productdata.name }</h2>
                        <p>{data.productdata.price} Taka</p>
                        <a className="btn btn-warning" href="">Add to card</a>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Products;
