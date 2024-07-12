import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";
import instance from "./Axios/api";
import Footer from "./Components/Footer";
import PrivateRoute from "./Components/PrivateRoute";
import Dashboard from "./Pages/Admin/Dashboard";
import ProductForm from "./Pages/Admin/ProductForm";
import AuthForm from "./Pages/AuthForm";
import HomePage from "./Pages/HomePage";
import NotFound from "./Pages/NotFound";
import ProductDetail from "./Pages/ProductDetail";

function App() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
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

          {/* ADMIN */}
          <Route path="/admin" element={<PrivateRoute />}>
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
