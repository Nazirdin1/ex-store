// import React from "react";
// import Card from "../card/Card";
// import { Container } from "@mui/material";
// import { useSelector } from "react-redux";

// const Flash = () => {

//   const {items,isError,isLoading}= useSelector(store=>store.products)

//   return (
//     <Container maxWidth="lg" sx={{ display: "flex", gap: "20px" , marginTop:"100px"}}>
//       {items.map(el=> <Card  key={el?.id}  title={el?.title} />)}

//     </Container>
//   );
// };
//  export default Flash;

// export default Flash;import React from "react";

import React, { useState } from "react";
import { Container, Button } from "@mui/material";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../card/Card";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Flash = () => {
  const { items } = useSelector((store) => store.products);
  const [showAllProducts, setShowAllProducts] = useState(false);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(items.length, 4),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(items.length, 4),
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: Math.min(items.length, 3),
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: Math.min(items.length, 1),
        },
      },
    ],
    slideWidth: "80%",
    cellSpacing: 0,
  };

  const sliderRef = React.useRef(null);

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const previousSlide = () => {
    sliderRef.current.slickPrev();
  };

  const handleViewAllProducts = () => {
    setShowAllProducts(true);
  };

  const handleCloseViewAllProducts = () => {
    setShowAllProducts(false);
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: "100px", padding: "0 20px" }}>
      {!showAllProducts ? (
        <>
          <div style={{ position: "absolute", right: "200px", marginTop: "-50px" }}>
            <Button
              onClick={previousSlide}
              style={{
                padding: "0",
                minWidth: "auto",
                margin: "0 10px",
                background: "rgba(245, 245, 245, 1)",
                borderRadius: "50%",
                width: "36px",
                height: "46px",
                color: "black",
                fontSize: "22px",
              }}
            >
              <GoArrowLeft />
            </Button>
            <Button
              onClick={nextSlide}
              style={{
                padding: "0",
                minWidth: "auto",
                margin: "0 10px",
                background: "rgba(245, 245, 245, 1)",
                borderRadius: "50%",
                width: "36px",
                height: "46px",
                color: "black",
                fontSize: "22px",
              }}
            >
              <GoArrowRight />
            </Button>
          </div>
          <Slider {...sliderSettings} ref={sliderRef}>
            {items.map((el) => (
              <Card
                key={el?.id}
                id={el?.id}
                title={el?.title}
                images={el?.images[1]}
                price={el?.price}
              />
            ))}
          </Slider>
          <button
            onClick={handleViewAllProducts}
            style={{
              background: "rgba(219, 68, 68, 1)",
              color: "white",
              fontSize: "16px",
              padding: "5px 10px",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "50px auto",
            }}
          >
            View All Products
          </button>
        </>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              marginBottom: "50px",
            }}
          >
            {items.map((el) => (
              <Card
                key={el?.id}
                id={el?.id}
                title={el?.title}
                images={el?.images[1]}
                price={el?.price}
                style={{
                  width: "30%",
                  margin: "10px",
                }}
              />
            ))}
          </div>
          <button
            onClick={handleCloseViewAllProducts}
            style={{
              background: "rgba(219, 68, 68, 1)",
              color: "white",
              fontSize: "16px",
              padding: "5px 10px",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 50px auto",
            }}
          >
            Close
          </button>
        </>
      )}
    </Container>
  );
};

export default Flash;
