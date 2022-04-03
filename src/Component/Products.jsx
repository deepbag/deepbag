import React from 'react';
import '../Styles/Product.css';
import Book from '../Image/book.png';
import Money from '../Image/money.png';
import Power from '../Image/power.png';

const Products = () => {
    return (
        <>
            <div className='product_block'>
                <h3>⇀ Products</h3>
                <hr/>

                <div className='product_single'>
                    <div className='row'>

                        <div className='product'>
                            <div className='product_single_block'>
                                <img src={Book} alt='book' width='200px' height='280px' />
                                <h4>Do Epic Shit</h4>
                                <h6>by Ankur Warikoo</h6>
                                <div className='purchase'>
                                    <a href='https://amzn.to/3JSzjYM' target="_blank" rel="noreferrer">Amazon</a>
                                    <a href='https://www.flipkart.com/do-epic-shit/p/itmf9eb1e437199a' target="_blank" rel="noreferrer">Flipkart</a>
                                </div>
                            </div>
                        </div>
                        <div className='product'>
                            <div className='product_single_block'>
                                <img src={Money} alt='book' width='200px' height='280px' />
                                <h4>The Psychology of Money</h4>
                                <h6>by Morgan Housel</h6>
                                <div className='purchase'>
                                    <a href='https://amzn.to/36X4m7d' target="_blank" rel="noreferrer">Amazon</a>
                                    <a href='https://www.flipkart.com/the-psychology-of-money/p/itm9399e3b814533?pid=9789390166268&lid=LSTBOK9789390166268VFRLP9&marketplace=FLIPKART&cmpid=content_book_15083003945_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,556262839325,,,,c,,,,,,,&gclid=Cj0KCQjw_4-SBhCgARIsAAlegrXrf5kj1MEaXmog3GqgAAPVvwj8PhyNeObW5loQeu0K8gJRQQvoq5oaAjQ3EALw_wcB' target="_blank" rel="noreferrer">Flipkart</a>
                                </div>
                            </div>
                        </div>
                        <div className='product'>
                            <div className='product_single_block'>
                                <img src={Power} alt='book' width='200px' height='280px' />
                                <h4>Your Subconscious Mind</h4>
                                <h6>by Murphy Joseph</h6>
                                <div className='purchase'>
                                    <a href='https://amzn.to/3iOMCxz' target="_blank" rel="noreferrer">Amazon</a>
                                    <a href='https://www.flipkart.com/power-your-subconscious-mind-unlock-master-key-success/p/itmfc599jmcfhhwm?pid=9788172345662&lid=LSTBOK9788172345662FFUG9N&marketplace=FLIPKART&cmpid=content_book_15083003945_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,556262839325,,,,c,,,,,,,&gclid=Cj0KCQjw_4-SBhCgARIsAAlegrXKLxF76z4_CRnND3yjKDt5Fc8zYCxYa-j6NiueVLqqoiSECUhS1JsaAg0qEALw_wcB' target="_blank" rel="noreferrer">Flipkart</a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products
