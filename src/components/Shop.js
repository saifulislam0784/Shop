import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import Products from './Products';


    const Shop = () => {


        const [products, setproduct] = useState([])


      useEffect(() => {

        const products=[

            {
                id: 1,
                name: 'Mobile Phone',
                price: 20000,
                saleprice: null
            },

            {
                id: 2,
                name: 'Computer',
                price: 35000,
                saleprice: null
            },

            {
                id: 3,
                name: 'Router',
                price: 2000,
                saleprice: null
            },

            {
                id: 4,
                name: 'Modem',
                price: 4000,
                saleprice: null
            },

            {
                id: 5,
                name: 'Headset',
                price: 2500,
                saleprice: null
            },

            {
                id: 6,
                name: 'Smart watch',
                price: 12000,
                saleprice: null
            },

            {
                id: 7,
                name: 'Laptop',
                price: 70000,
                saleprice: null
            },

            {
                id: 8,
                name: 'HDD',
                price: 3500,
                saleprice: null
            },

            {
                id: 9,
                name: 'SSD',
                price: 6500,
                saleprice: null
            },

            {
                id: 10,
                name: 'Mouse',
                price: 1000,
                saleprice: null
            },

            {
                id: 11,
                name: 'Keyboard',
                price: 500,
                saleprice: null
            },

            {
                id: 12,
                name: 'Ram',
                price: 2200,
                saleprice: null
            },

            {
                id: 13,
                name: 'Mobile Phone',
                price: 20000,
                saleprice: null
            },

            {
                id: 14,
                name: 'Mobile Phone',
                price: 20000,
                saleprice: null
            },

            {
                id: 15,
                name: 'Mobile Phone',
                price: 20000,
                saleprice: null
            },

            {
                id: 16,
                name: 'Mobile Phone',
                price: 20000,
                saleprice: null
            }
        ];

        setproduct(products);


          
      }, [])

        return (
        
                <div className="container my-5">
                    <div className="row">


                        {
                            products.map(( product )=> <Products productdata = {product} />)
                        }
                            

                    </div>
                </div>
                
                
        )
    }

    export default Shop;