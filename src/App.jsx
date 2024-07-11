import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NotFound from "./Pages/NotFound";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import instance from "./Axios/api";
import ProductDetail from "./Pages/ProductDetail";
import Dashboard from "./Pages/Admin/Dashboard";
import ProductAdd from "./Pages/Admin/ProductAdd";
import ProductEdit from "./Pages/Admin/ProductEdit";
import ProductForm from "./Pages/Admin/ProductForm";
import AuthForm from "./Pages/AuthForm";
// function Hello(props) {
//   return <h1>Hello {props.username}</h1>;
// }

function App() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetch("http://localhost:3000/products")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setProducts(data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await instance.get("/products");
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  //DELETE
  const removeProduct = (id) => {
    // console.log(id);
    (async () => {
      try {
        if (confirm("Ban co chac chan muon xoa?")) {
          await instance.delete(`/products/${id}`);
          const newData = products.filter((item) => item.id !== id && item);
          setProducts(newData);
          alert("Xoa thanh cong");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };

  // HandleProduct
  const handleProduct = async (data) => {
    if (data.id) {
      // EDIT
      const res = await instance.patch(`/products/${data.id}`, data);
      setProducts([...products, res.data]);
      const newData = await instance.get(`/products`);
      // console.log(newData);
      setProducts(newData.data);
    } else {
      // ADD
      const res = await instance.post("/products", data);
      setProducts([...products, res.data]);
    }
    alert(" Thành công! chuyển hướng sang Admin ");
    navigate("/admin");
  };

  return (
    <>
      {/* <Hello username="Linh" /> */}
      <main>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage data={products} />} />
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="/product-detail/:id" element={<ProductDetail />} />
            <Route path="/login" element={<AuthForm />} />
            <Route path="/register" element={<AuthForm isRegister />} />
          </Route>

          <Route path="/admin">
            <Route
              index
              element={
                <Dashboard data={products} removeProduct={removeProduct} />
              }
            />

            <Route
              path="/admin/add"
              element={<ProductForm handleProduct={handleProduct} />}
            />
            <Route
              path="/admin/edit/:id"
              element={<ProductForm handleProduct={handleProduct} />}
            />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
