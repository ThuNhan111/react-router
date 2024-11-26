// src/pages/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  return <h1>Chi tiết sản phẩm: {id}</h1>;
}

export default ProductDetail;
