import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import storeService from "../../api/service";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa6";
import logo from "../../assets/logo.png"
const fakeData = [
  {
    title: "iPhone 14 Series",
    sale: "Up to 10% off Voucher",
    image: "https://www.myphone.kg/cache/files/17314.webp_w800_h800_resize.webp?t=1716473760",
  
  },
  {
    title: "iPhone 15 Series",
    sale: "Up to 15% off Voucher",
    image: "https://www.myphone.kg/cache/files/17314.webp_w800_h800_resize.webp?t=1716473760",
  
  },
  {
    title: "iPhone 15 pro Series",
    sale: "Up to 20% off Voucher",
    image: "https://www.myphone.kg/cache/files/17314.webp_w800_h800_resize.webp?t=1716473760",
  
  },
  {
    title: "iPhone 15 pro max  Series",
    sale: "Up to 20% off Voucher",
    image: "https://www.myphone.kg/cache/files/17314.webp_w800_h800_resize.webp?t=1716473760",
  
  },
];

const Hero = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await storeService.getAllCategories();
      console.log(data, "---data---");
      setCategories(data);
    };

    getCategories();
  }, []);

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Container maxWidth="lg" sx={{ display: "flex" }}>
        <Box
          sx={{
            minWidth: "265px",
            borderRight: "1px solid blue",
          }}
        >
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {categories?.map((el) => (
              <ListItem key={el.id}>
                <ListItemText onClick={el.id} primary={`Line item ${el.name}`} />
              </ListItem>
            ))}
          </List>
        </Box>
        
        <Box sx={{ width: "75%", height: "344px", bgcolor: "green" }}>
                    <Slider {...settings}>
                        {fakeData.map(promo => (
                            <div>
                                <Box sx={{
                                    background: `url(${promo.image}) no-repeat right/contain`,
                                    height: "344px"
                                }}>
                                    <Typography component={"p"} sx={{display:'flex' ,alignItems:"center", gap:"24px"}}><img src={logo} alt="" /> {promo.title}</Typography>
                                    <Typography component={"h1"}>{promo.sale}</Typography>
                                    <Typography component={"a"}>Shop Now <FaArrowRight /></Typography>
                                </Box>
                            </div>
                        ))}

                    </Slider>
                </Box>

      </Container>
    </div>
  );
};

export default Hero;
