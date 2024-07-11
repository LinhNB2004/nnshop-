import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../Axios/api";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const { data } = await instance.get(`/products/${id}`);
        console.log(data);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div className="ctsp">
      <div className="anh">
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{
            width: "500px",
            height: "560px",
            borderRadius: "50px 0 0 50px",
          }}
        />
      </div>
      <div className="nd">
        <h3>{product.title}</h3>
        <button className="bt"></button> <br />
        <span>
          <b> {product.price}VNĐ</b>
        </span>
        <br />
        <p>{product.description}</p>
        <br />
        <p>
          Hàng chính hãng 100% Gói hàng đảm bảo Giao tận nhà trên toàn quốc Giao
          hàng thu tiền tận nhà Kiểm hàng trước khi thanh toán. <br />
          <br />
          <b>Vận chuyển:</b> Miễn phí <br />
          <b>Tình trạng:</b> Còn hàng <br />
          <b>Dung lượng:</b> 100ml <br />
          <b>Số lượng: </b>
          <button className="button">-</button>
          <button className="button">1</button>
          <button className="button">+</button>
        </p>
        <button className="button1">THÊM VÀO GIỎ HÀNG</button>
        <button className="button2">MUA NGAY</button>
      </div>
    </div>
  );
};

export default ProductDetail;
