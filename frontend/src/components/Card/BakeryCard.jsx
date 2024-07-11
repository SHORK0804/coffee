import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Card.css';

function BakeryCard() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = "https://coffee-lilac.vercel.app/";

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(API_URL + "api/v1/products");
        setProducts(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (product) => {
    const { id, product_name, product_price, image_url, description } = product;
    navigate(`/order?productId=${id}&productName=${encodeURIComponent(product_name)}&productPrice=${encodeURIComponent(product_price)}&img=${encodeURIComponent(image_url)}&description=${encodeURIComponent(description)}`);
  };

  if (isLoading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error fetching products: {error.message}</p>;
  }

  return (
    <div className="container">
      <div className="row">
        {products.filter(product => product.type === 'bakery').map((product, index) => (
          <div className="col-md-6 col-xl-3" key={product.id} onClick={() => handleCardClick(product)}>
            <img src={product.image_url} alt="product image" className="card-img-top"></img>
            <div className="card-body">
              <h5 className="card-title">{product.product_name}</h5>
              <p className="card-text">{product.product_price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BakeryCard;
