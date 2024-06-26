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
import React from "react";
import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../card/Card";

const Flash = () => {
  const { items, isError, isLoading } = useSelector((store) => store.products);

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
          slidesToShow: Math.min(items.length, 2),
        },
      },
    ],
    slideWidth: "80%",
    cellSpacing: 0,
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: "100px", padding: "0 20px" }}>
      <Slider {...sliderSettings}>
        {items.map((el) => (
          <Card key={el?.id} title={el?.title} images={el?.images} price={el?.price} />
        ))}
      </Slider>
    </Container>
  );
};

export default Flash;



