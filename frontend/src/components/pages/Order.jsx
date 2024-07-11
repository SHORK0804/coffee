import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './style.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Order() {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const productId = queryParams.get('productId');
    const productName = queryParams.get('productName');
    const productPrice = queryParams.get('productPrice');
    const img = queryParams.get('img');
    const description = queryParams.get('description');

    const navigate = useNavigate()

    const openForm = () => {
        navigate(`/payment?productId=${productId}&productName=${productName}&productPrice=${productPrice}&img=${img}&description=${description}`);
    };

    return (
        <div>
            <div className="container">
                <h2>Chi tiết sản phẩm</h2>
                <div className="row">
                    <div className="col-md-4 col-xl-6">
                        <img className={styles.prodimage} src={img} alt="Product" />
                    </div>
                    <div className="col-md-4 col-xl-6">
                        <h1>{productName}</h1>
                        <h2 className={styles.paymentprice}>{productPrice}</h2>
                        <button className={styles.order_delivery} onClick={openForm}>
                            Điền thông tin nhận hàng
                        </button>
                    </div>
                </div>
                <hr />
                <div className="desciption_section">
                    <h5>Mô tả sản phẩm</h5>
                    <p>{description}</p>
                </div>
                <hr />
            </div>
        </div>
    );
}

export default Order;