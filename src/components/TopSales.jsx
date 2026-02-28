// components/TopSales.jsx
import React from 'react';
import image1 from '../images/single.jpeg'
import group5 from '../images/group5.jpg'
import family1 from '../images/family.webp'
import group3 from '../images/group2.jpg'


const TopSales = ({ theme, t }) => {
  const products = [
    {
      id: 1,
      name: 'Elegant Gold Shifon',
      price: '15000 Birr',
      image: image1
    },
    {
      id: 2,
      name: 'Red Celebration Dress',
      price: '16000 Birr',
      image: group5
    },
    {
      id: 3,
      name: 'Blue Traditional',
      price: '17000 Birr',
      image: group3
    },
    {
      id: 4,
      name: 'Family Set Special',
      price: '18000 Birr',
      image: family1
    }
  ];

  return (
    <section className="top-sales" id="topSales">
      <div className="container">
        <h2>{t.topSales}</h2>
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSales;