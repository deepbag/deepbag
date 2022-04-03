import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Notfound.css';

const Notfound = () => {
    return (
        <>
            <div className="notfoundblock">
                <h3>⇀ 404 Not Found </h3> 
                <hr/>
                <div className="notfounddatablock">
                    <h2>⇀ Oop's You Have Some Problem! ⚡</h2>
                    <p>Dear User, The page you are looking for was moved, removed, renamed or might never existed.<br /> Please use Navigation Bar where you want to go!</p>
                </div>
            </div>
        </>
    )
}

export default Notfound;
