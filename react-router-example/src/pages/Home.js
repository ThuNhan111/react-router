// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Trang Chủ</h1>
            <h2>Danh sách sản phẩm:</h2>
            <ul>
                <li><Link to="/product/1">Sản phẩm 1</Link></li>
                <li><Link to="/product/2">Sản phẩm 2</Link></li>
                <li><Link to="/product/3">Sản phẩm 3</Link></li>
            </ul>
        </div>
    );
};

export default Home;
