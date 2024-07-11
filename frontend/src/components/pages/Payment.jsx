import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './style.module.css';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';

function Payment() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productName = queryParams.get('productName');
  const productPrice = queryParams.get('productPrice');

  const [productQuantity, setProductQuantity] = useState(1);
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handleQuantityChange = (value) => {
    const newQuantity = productQuantity + value;
    if (newQuantity > 0) {
      setProductQuantity(newQuantity);
    }
  };

  const borderStyle = {
    border: '1px solid gray',
  }

  const placeOrder = async (data) => {
    try {
      const response = await fetch("https://coffee-sandy-gamma.vercel.app/api/v1/orders", {
        method: 'POST',
        body: JSON.stringify({
          productname: productName,
          productprice: String((productPrice * productQuantity)/1000) + ".000 đ",
          quantity: productQuantity,
          name: data.customername,
          phone: data.phone,
          address: data.address,
        }),
        headers: {
          'Content-type': 'application/json',
        },
      });

      if (response.ok) {
        console.log('Order placed successfully!');
        navigate('/');
      } else {
        console.error('Error placing order:', response.status);
      }
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };



  return (
    <form className={styles.showform} onSubmit={handleSubmit(placeOrder)}>
      <h2>Thông tin đặt hàng</h2>
      <div className="mb-3">
        <label htmlFor="productName" className="form-label">
          Sản phẩm
        </label>
        <input
          type="text"
          id="productName"
          style={borderStyle}
          className="form-control"
          required
          value={productName}
          disabled
        />
      </div>
      <div className="mb-3">
        <div className="mb-3 d-flex justify-content-between align-items-center" style={{ padding: '0 5px 0 0' }}>
          <label htmlFor="productQuantity" className="form-label">
            Số lượng
          </label>
          <div className="d-flex">
            <button
              type="button"
              style={{ border: '1px solid orange' }}
              className={`btn btn-sm ${styles.quantity_btn}`}
              onClick={() => handleQuantityChange(-1)}
              disabled={productQuantity <= 1}
            >
              -
            </button>
            <input
              type="text"
              className={`form-control ${styles.quantity_input}`}
              id="productQuantity"
              style={borderStyle}
              required
              value={productQuantity}
              {...register('quantity', { required: true })}
              onChange={(e) => setProductQuantity(parseInt(e.target.value))}
            />
            <button
              type="button"
              style={{ border: '1px solid orange' }}
              className={`btn btn-sm ${styles.quantity_btn}`}
              onClick={() => handleQuantityChange(1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="productPrice" className="form-label">
          Giá
        </label>
        <input
          type="text"
          id="productPrice"
          className="form-control"
          style={borderStyle}
          required
          value={productPrice * productQuantity}
          disabled
        />
      </div>
      <div className="mb-3">
        <label htmlFor="customerName" className="form-label">
          Họ tên
        </label>
        <input
          type="text"
          className="form-control"
          id="customerName"
          style={borderStyle}
          required
          value={customerName}
          {...register('customername', { required: true })}
          onChange={(e) => setCustomerName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phoneNumber" className="form-label">
          Số điện thoại
        </label>
        <input
          type="text"
          id="phoneNumber"
          className="form-control"
          style={borderStyle}
          required
          value={phoneNumber}
          {...register('phone', { required: true })}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">
          Địa chỉ
        </label>
        <input
          type="text"
          id="address"
          className="form-control"
          style={borderStyle}
          required
          value={address}
          {...register('address', { required: true })}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <button type="submit" className={styles.order_delivery}>
        Đặt hàng
      </button>
    </form>
  );
}

export default Payment;
