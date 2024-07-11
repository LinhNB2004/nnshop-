import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <ul>
          <li>
            <img
              src="https://wikici.com/Upload/chu-ky/chu-ky-ten-linh-livingston-sanserif-otf.jpeg"
              alt=""
              width="100px"
              style={{ margin: "10px" }} // Sửa lỗi: style là một object
            />
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Shop</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </header>
    </>
  );
}
