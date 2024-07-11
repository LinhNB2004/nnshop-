import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schemaProduct = z.object({
  title: z.string().min(3).max(255),
  price: z.number().min(0),
  thumbnail: z.string(),
  description: z.string(),
});

const ProductAdd = ({ onAdd }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schemaProduct) });

  return (
    <div>
      <div>
        <div className="boxAdmin">
          <h6>Hello Admin</h6>
        </div>
      </div>
      <form
        className="addproduct"
        onSubmit={handleSubmit((data) => onAdd({ data }))}
      >
        <div className="form-group">
          <h4>Add Product</h4>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Title"
            {...register("title", {
              required: true,
            })}
          />
          {errors.title?.message && (
            <p className="text-danger">{errors.title?.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            placeholder="Price"
            {...register("price", { required: true, valueAsNumber: true })}
          />
          {errors.price?.message && (
            <p className="text-danger">{errors.price?.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="thumbnail">Image URL</label>
          <input
            type="text"
            className="form-control"
            id="thumbnail"
            placeholder="Image URL"
            {...register("thumbnail")}
          />
          {errors.thumbnail?.message && (
            <p className="text-danger">{errors.thumbnail?.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Description"
            {...register("description")}
          />
          {errors.description?.message && (
            <p className="text-danger">{errors.description?.message}</p>
          )}
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductAdd;
