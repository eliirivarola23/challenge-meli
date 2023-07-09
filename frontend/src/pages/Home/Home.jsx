import React from "react";
import MenuHeader from "../../components/MenuHeader/MenuHeader";
import { HeaderProductDetail } from "../../components/ProductDetail/components/HeaderProductDetail";

const Home = () => {
  return (
    <>
      <MenuHeader />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div style={{ display: "flex" }}>
            <HeaderProductDetail photo="https://images.pexels.com/photos/3036882/pexels-photo-3036882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
