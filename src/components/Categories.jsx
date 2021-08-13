import React from 'react';
import { Link } from 'react-router-dom';
import NavbarItems from '../content/NavbarItems';
const Categories = () => {
    return (
        <div className='categories'>
            <Link to="/" className='categories__item categories__item--active'>Editorial</Link>
            <Link to="/" className='categories__item'>Following</Link>
            <div className='categories__breaker'></div>
            <div className='categories__list'>
                {NavbarItems.map((e) => (
                    <Link to={`/s/${e.url}`} className='categories__item' key={e.id}>{e.title}</Link>
                ))}
            </div>
        </div>
    )
}

export default Categories