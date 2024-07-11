import React from "react";
import { Link } from "react-router-dom";

const Dashboard = ({ data, removeProduct }) => {
  return (
    <div>
      <div className="boxAdmin">
        <h6>Hello Admin</h6>
      </div>
      <div className="addnew">
        <Link className="btn btn-primary" to="/admin/add">
          Add new Product
        </Link>
      </div>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Thumbnail</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <img
                  width={140}
                  height={100}
                  src={product.thumbnail}
                  alt={product.title}
                />
              </td>
              <td>{product.description}</td>
              <td>
                <Link
                  to={`/admin/edit/${product.id}`}
                  className="btn btn-danger"
                >
                  Update
                </Link>
                <button
                  className="btn btn-warning"
                  onClick={() => removeProduct(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
