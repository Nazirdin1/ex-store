import {
  Box,
  Button,
  Container,
  IconButton,
  Input,
  Typography,
} from "@mui/material";
import { FaStar, FaStarHalfAlt, FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../../redux/slice/productsSlice";
import { useParams } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaMinus, FaPlus } from "react-icons/fa6";
const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { item } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  if (Object.keys(item).length === 0) {
    return <h3>Loading...</h3>;
  }

  const { title, images, price, description } = item;

  const randomRating = Math.floor(Math.random() * 100) + 1;
  return (
    <div>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            {images.map((imgUrl) => (
              <img key={imgUrl} width={145} src={imgUrl} alt="img" />
            ))}
          </Box>
          <Box>
            <img width={500} src={images[0]} alt="" />
          </Box>
        </Box>
        <Box sx={{ maxWidth: "370px" }}>
          <Typography variant="h6" component={"p"}>
            {title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "rgba(255, 173, 51, 1)",
              marginTop: "8px",
            }}
          >
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            <b style={{ marginLeft: "20px", color: "grey" }}>
              ({3 * randomRating})
            </b>
          </Box>
          <Typography variant="body" component={"p"}>
            ${price}
          </Typography>
          <Typography variant="body" component={"p"}>
            {description}
          </Typography>
          <Typography variant="body" component={"p"}>
            Colors:
            {["aqua", "red"].map((color) => (
              <span
                key={color}
                style={{
                  display: "inline-block",
                  width: "25px",
                  height: "25px",
                  backgroundColor: color,
                  borderRadius: "50px",
                  marginLeft: "10px",
                }}
              ></span>
            ))}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center",gap:"16px" }}>
            <Box sx={{ display: "flex", alignItems: "center", width: "150px",border:"1px solid red"  }}>
              <IconButton>
                <FaMinus />
              </IconButton>
              <input
                type="text"
                value={  1000}
                style={{ minWidth: "50px",
                   borderRight: "1px solid red",
                   borderLeft: "1px solid red",
                   height:"40px",
                   textAlign:"center"
                   }}
              />
              <IconButton>
                <FaPlus />
              </IconButton>
            </Box>

            <Button
              variant="contained"
              sx={{
                minWidth: "185px",
                bgcolor: "red",
                color: "#fff",
              }}
            >
              By Now
            </Button>

            <IconButton
              sx={{
                border: "2px solid red",
                borderRadius: "5px",
                marginLeft: "10px",
                p: "5px",
                color: "red",
              }}
            >
              <FaRegHeart />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Detail;
