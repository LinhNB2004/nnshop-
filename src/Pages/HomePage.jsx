import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slide from "../Components/Slide";
import Header from "../Components/Header";

function HomePage({ data }) {
  // console.log(data);
  return (
    <>
      <Header />

      <Slide />
      <main>
        <div class="bg-white" id="listproduct">
          <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div id="spbc">
              <h1>Sản phẩm bán chạy nhất</h1>
              <button></button>
            </div>
            <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {data.map((product) => (
                <div class="group relative">
                  <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <Link to={`/product-detail/${product.id}`}>
                      <img
                        src={product.thumbnail}
                        alt="Front of men&#039;s Basic Tee in black."
                        class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </Link>
                  </div>
                  <h2 class="text-2xl tracking-tight text-gray-900">
                    <Link to={`/product-detail/${product.id}`}>
                      {product.title}
                    </Link>
                  </h2>
                  <div class="mt-4 flex justify-between">
                    <div>
                      <h3 class="text-sm text-gray-700">Giá</h3>
                    </div>
                    <p class="text-sm font-medium text-gray-900">
                      {product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <div class="bg-gray-100">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 class="text-2xl font-bold text-gray-900">Bài viết</h2>

            <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              <div class="group relative">
                <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src="https://i.pinimg.com/474x/c1/8a/ef/c18aefb3a0d82d0b28ca8125b3f36c77.jpg"
                    alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                    class="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 class="mt-6 text-sm text-gray-500">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    𝐃𝐮̀𝐧𝐠 𝐧𝐮̛𝐨̛́𝐜 𝐡𝐨𝐚 𝐭𝐡𝐞𝐨 𝐥𝐨𝐚̣𝐢 𝐝𝐚? Cùng một hương nước hoa nhưng
                    bạn dùng lại không thấy được như đồng nghiệp dùng? ... thêm
                  </a>
                </h3>
                <p class="text-base font-semibold text-gray-900">
                  Dùng nước hoa theo loại da perfume skin type
                </p>
              </div>
              <div class="group relative">
                <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src="https://i.pinimg.com/564x/70/a6/4d/70a64dc27632324245c050485738fad4.jpg"
                    alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant."
                    class="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 class="mt-6 text-sm text-gray-500">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Khám phá xem mùi hương nói lên tính cách của bạn như nào.
                    Find out what scent suits your personality.
                  </a>
                </h3>
                <p class="text-base font-semibold text-gray-900">
                  Bạn thuộc nhóm hương nào?
                </p>
              </div>
              <div class="group relative">
                <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src="https://i.pinimg.com/564x/99/5f/69/995f694f80689fcf5ac001eb9d56ac8a.jpg"
                    alt="Collection of four insulated travel bottles on wooden shelf."
                    class="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 class="mt-6 text-sm text-gray-500">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Khác với suy nghĩ của nhiều người rằng khi dùng nước hoa cứ
                    phải xịt nhiều mới thơm, thực tế chỉ cần bạn chọn đúng vị
                    trí để xịt chắc chắn cơ thể bạn sẽ thơm phức cả ngày, thêm
                    một vài mẹo còn có thể tiết kiệm nước hoa nữa. ... thêm
                  </a>
                </h3>
                <p class="text-base font-semibold text-gray-900">
                  Học ngay những mẹo sử dụng nước hoa "không phải ai cũng biết"
                  này để làm chủ mùi hương độc đáo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
}

export default HomePage;
