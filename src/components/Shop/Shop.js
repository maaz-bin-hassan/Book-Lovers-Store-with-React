import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import './Shop.css';
import Book from '../Book/Book';
import Cart from '../Cart/Cart';

const Shop = () => {

    const [books, setBooks] = useState([]);

    const [cart, setCart] = useState([]);

    //fetching the fake data
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, []);

    //event handler for add to cart button of books
    const addToCartHandler = (book) => {

        const newCart = [...cart, book];
        setCart(newCart);
    }

    //event handler for choose 1 for me button
    const randomBookSelect = () => {

        let randomBook = [];
        randomBook[0] = cart[Math.floor(Math.random() * cart.length)];
        setCart(randomBook);
    }

    return (
        <div id='shop-container' className='grid md:flex'>
            <div id='product-container' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10 lg:w-4/5 md:w-3/4 px-12'>
                {
                    books.map(book => <Book book={book} key={book.id} addToCartHandler={addToCartHandler}></Book>)
                }

            </div>
            <div id='cart-container' className='lg:w-1/5 md:w-1/4 order-first md:order-last bg-slate-100'>
                <Cart cart={cart} randomBookSelect={randomBookSelect}></Cart>
            </div>
        </div>
    );
};

export default Shop;