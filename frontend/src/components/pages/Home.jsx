import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import styles from './style.module.css'


function Home() {

  const [products, setProducts] = useState([]);
  const [randomProducts, setRandomProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = "https://coffee-sandy-gamma.vercel.app/";
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(API_URL + "api/v1/products");
        // No filtering is needed, setProducts directly
        setProducts(response.data);

        // Shuffle the entire product array for randomness
        const shuffledProducts = [...response.data].sort(() => Math.random() - 0.5);

        // Select the first 4 random products
        setRandomProducts(shuffledProducts.slice(0, 4));
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
    navigate(`/order?productId=${id}&productName=${product_name}&productPrice=${product_price}&img=${image_url}&description=${description}`);
  };

  if (isLoading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error fetching products: {error.message}</p>;
  }

  const homeImageDes = {
    alignItem: "center",
    display: "flex",
    justifyContent: "center",
  }
  const titleText = {
    color: "orange",
  }
  const margin4Content = {
    marginTop: "100px",
    marginBottom: "100px",
  }
  return (
    <>
      <Link to='/menu'>
        <img className={styles.home_topmenu} src='https://file.hstatic.net/1000075078/file/web_moi_-_desktop.jpg' alt='homepicture' width="100%" />
      </Link>

      <div className="container" style={margin4Content}>
        <h4 className="display-4 text-center" style={titleText}>Sản phẩm ngẫu nhiên cho bạn</h4>
        <div className="row">
          {randomProducts.map((product, index) => (
            <div className="col-md-4 col-xl-3" key={product.id} onClick={() => handleCardClick(product)}>
              <img src={product.image_url} alt="product image" className="card-img-top"></img>
              <div className="card-body">
                <h5 className="card-title">{product.product_name}</h5>
                <p className="card-text">{product.product_price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container d-flex flex-column align-items-center justify-content-center" style={margin4Content}>
        <div className="row">
          <div className="col-md-4 col-xl-6">
            <img className={styles.homeimg1} src="https://phuclong.com.vn/uploads/post/20649d183ca5f1-bannertrangchu.jpg" alt="homeimg1" />
          </div>
          <div className="col-md-6 col-xl-5" style={homeImageDes}>
            <div className="des">
              <h4 style={titleText}>TỪ NHỮNG MẦM TRÀ, CHÚNG TÔI TẠO RA NIỀM ĐAM MÊ</h4>
              <p>Trải qua hơn 50 năm chắt chiu tinh hoa từ những búp trà xanh và hạt cà phê thượng hạng cùng mong muốn mang lại cho khách hàng những trải nghiệm giá trị nhất khi thưởng thức, chúng tôi liên tục là thương hiệu tiên phong với nhiều ý tưởng sáng tạo đi đầu trong ngành trà và cà phê.
                Chúng tôi tin rằng từng sản phẩm trà và cà phê sẽ càng thêm hảo hạng khi được tạo ra từ sự phấn đấu không ngừng cùng niềm đam mê. Và chính kết nối dựa trên niềm tin, sự trung thực và tin yêu sẽ góp phần mang đến những nét đẹp trong văn hóa thưởng trà và cà phê ngày càng bay cao, vươn xa.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex flex-column align-items-center justify-content-center" style={margin4Content}>
        <div className="row">
          <div className="col-md-6 col-xl-5" style={homeImageDes}>
            <div className="des">
              <h4 style={titleText}>ĐỘI NGŨ NHÂN VIÊN TRÀN ĐẦY NHIỆT HUYẾT</h4>
              <p>
                Trong suốt quá trình hoạt động và phát triển, đội ngũ quản lý và nhân viên của Coffee & Tea, qua bao thế hệ, đã cùng nhau xây dựng, nuôi dưỡng niềm đam mê dành cho trà và cà phê với mong muốn được thử thách bản thân trong ngành dịch vụ năng động và sáng tạo.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-xl-6">
            <img className={styles.homeimg1} src="https://hrw.hstatic.net/200000000005/24/recruitment/1a160a4a24f641fea3bf63a0e2f984fb.jpg" alt="homeimg2" />
          </div>
        </div>
      </div>

    </>
  )
}

export default Home
