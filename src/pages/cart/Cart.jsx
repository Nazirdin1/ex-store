// import { Box, Button, Container, IconButton } from "@mui/material";

// import { TiDelete } from "react-icons/ti";
// import { useSelector } from "react-redux";
// const Cart = () => {
//   const { items } = useSelector((state) => state.cart);
//   const total =
//     items?.reduce((prev, next) => prev + next.price * next.quantity, 0) || 0;
//   return (
//     <div>
//       <Container maxWidth="lg" sx={{ pt: "180px" }}>
//         <Box>
//           <Box
//             sx={{
//               mb: "40px",
//               display: "flex",
//               border: "1px solid red",
//               justifyContent: "space-between",
//               padding: "5px",
//             }}
//           >
//             <Box sx={{ with: "400px" }}>Product</Box>
//             <Box sx={{ with: "200px" }}>Price</Box>
//             <Box sx={{ with: "200px" }}>Quantity</Box>
//             <Box sx={{ with: "200px" }}>Subtotal</Box>
//           </Box>
//           {items?.map((el) => (
//             <Box
//               key={el?.id}
//               sx={{
//                 mb: "20px ",
//                 display: "flex",
//                 border: "1px solid red",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 padding: "5px",
//               }}
//             >
//               <Box
//                 sx={{
//                   with: "400px",
//                   position: "relative",
//                   display: "flex",
//                   gap: "20px",
//                   alignItems: "center",
//                 }}
//               >
//                 <IconButton
//                   sx={{
//                     position: "absolute",
//                     top: "-20px",
//                     left: "-20px",
//                     color: "red",
//                     "&:hover": {
//                       backgroundColor: "transparent",
//                     },
//                   }}
//                 >
//                   <TiDelete />
//                 </IconButton>
//                 <img
//                   width={"54px"}
//                   src={el?.images[0].replaceAll('["', "")}
//                   alt="img"
//                 />
//                 <p>{el?.title}</p>
//               </Box>
//               <Box sx={{ with: "200px" }}>$ {el?.price}</Box>
//               <Box
//                 sx={{
//                   with: "200px",
//                   display: "flex",
//                   justifyContent: "center",
//                 }}
//               >
//                 <input
//                   style={{ width: "60px" }}
//                   type="number"
//                   value={el.quantity}
//                 />
//               </Box>
//               <Box sx={{ with: "200px" }}>$ {el?.price * el.quantity}</Box>
//             </Box>
//           ))}

//           <Box
//             sx={{
//               mb: "80px",
//               display: "flex",
//               justifyContent: "space-between",
//               mt: "40px",
//             }}
//           >
//             <Button
//               sx={{
//                 border: "1px solid black",
//                 color: "black",
//                 "&:hover": {
//                   border: "1px solid black",
//                 },
//               }}
//               variant="outlined"
//             >
//               Return to Shop
//             </Button>
//             <Button
//               sx={{
//                 border: "1px solid black",
//                 color: "black",
//                 "&:hover": {
//                   border: "1px solid black",
//                 },
//               }}
//               variant="outlined"
//             >
//               Updata Cart
//             </Button>
//           </Box>
//         </Box>
//         <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//           <Box>
//             <input
//               style={{
//                 border: "1px solid black",
//                 padding: "5px",
//                 borderRadius: "5px",
//                 fontSize: "16px",
//               }}
//               type="text"
//               placeholder="Coupon Code"
//             />

//             <Button
//               sx={{
//                 color: "#fff",
//                 fontSize: "16px",
//                 background: "rgba(219, 68, 68, 1)",
//                 padding: "5px 15px",
//                 marginLeft: "16px",
//                 "&:hover": {
//                   color: "#fff",
//                   fontSize: "16px",
//                   background: "rgba(219, 68, 68, 1)",
//                 },
//               }}
//             >
//               Apply Coupon
//             </Button>
//           </Box>
//           <Box
//             maxWidth={470}
//             sx={{
//               width: "470px",
//               border: "1px solid black",
//               padding: "32px 24px",
//             }}
//           >
//             <h3
//               style={{
//                 fontSize: "20px",
//                 color: "black",
//                 fontWeight: "500",
//               }}
//             >
//               Cart Total
//             </h3>
//             <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//               <p
//                 style={{
//                   fontSize: "16px",
//                   color: "black",
//                   fontWeight: "400",
//                 }}
//               >
//                 Shipping
//               </p>
//               <p
//                 style={{
//                   fontSize: "16px",
//                   color: "black",
//                   fontWeight: "400",
//                 }}
//               >
//                 Free
//               </p>
//             </Box>

//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 borderTop: "1px solid black",
//                 padding: "15px 0",
//                 margin: "15px 0",
//               }}
//             >
//               <p>Total</p>
//               <p>{total}</p>
//             </Box>
//             <Button
//               sx={{
//                 color: "#fff",
//                 fontSize: "16px",
//                 background: "rgba(219, 68, 68, 1)",
//                 padding: "5px 15px",
//                 marginLeft: "16px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 margin: "16px auto",
//                 "&:hover": {
//                   color: "#fff",
                
//                 background: "rgba(219, 68, 68, 1)",
//                 },
//               }}
//             >
//               Procees to checkout
//             </Button>
//           </Box>
//         </Box>
//       </Container>
//     </div>
//   );
// };

// export default Cart;


import { Box, Button, Container, IconButton } from "@mui/material";
import { TiDelete } from "react-icons/ti";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const handleRemoveItem = (id) => {
    dispatch({ type: "cart/removeItem", payload: { id } });
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity >= 1) {
      dispatch({ type: "cart/updateQuantity", payload: { id, quantity: newQuantity } });
    }
  };

  const total = items.reduce((prev, next) => prev + next.price * next.quantity, 0);

  return (
    <div>
      <Container maxWidth="lg" sx={{ pt: "180px" }}>
        <Box>
          <Box
            sx={{
              mb: "40px",
              display: "flex",
              border: "1px solid red",
              justifyContent: "space-between",
              padding: "5px",
            }}
          >
            <Box sx={{ width: "400px" }}>Product</Box>
            <Box sx={{ width: "200px" }}>Price</Box>
            <Box sx={{ width: "200px" }}>Quantity</Box>
            <Box sx={{ width: "200px" }}>Subtotal</Box>
          </Box>
          {items.map((el) => (
            <Box
              key={el.id}
              sx={{
                mb: "20px",
                display: "flex",
                border: "1px solid red",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "5px",
              }}
            >
              <Box
                sx={{
                  width: "400px",
                  position: "relative",
                  display: "flex",
                  gap: "20px",
                  alignItems: "center",
                }}
              >
                <IconButton
                  onClick={() => handleRemoveItem(el.id)}
                  sx={{
                    position: "absolute",
                    top: "-20px",
                    left: "-20px",
                    color: "red",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  <TiDelete />
                </IconButton>
                
                <img
                  width={"54px"}
                  src={el?.images[0].replaceAll('["', "")}
                  alt="img"
                />
                <p>{el.title}</p>
              </Box>
              <Box sx={{ width: "200px" }}>${el.price}</Box>
              <Box
                sx={{
                  width: "200px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <input
                  style={{ width: "60px" }}
                  type="number"
                  value={el.quantity}
                  onChange={(e) => handleQuantityChange(el.id, parseInt(e.target.value))}
                />
              </Box>
              <Box sx={{ width: "200px" }}>${el.price * el.quantity}</Box>
            </Box>
          ))}

          <Box
            sx={{
              mb: "80px",
              display: "flex",
              justifyContent: "space-between",
              mt: "40px",
            }}
          >
            <Button
              LinkComponent={Link}
              to="/"
              sx={{
                border: "1px solid black",
                color: "black",
                "&:hover": {
                  border: "1px solid black",
                },
              }}
              variant="outlined"
            >
              Return to Shop
            </Button>
            <Button
              sx={{
                border: "1px solid black",
                color: "black",
                "&:hover": {
                  border: "1px solid black",
                },
              }}
              variant="outlined"
            >
              Update Cart
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <input
              style={{
                border: "1px solid black",
                padding: "5px",
                borderRadius: "5px",
                fontSize: "16px",
              }}
              type="text"
              placeholder="Coupon Code"
            />

            <Button
              sx={{
                color: "#fff",
                fontSize: "16px",
                background: "rgba(219, 68, 68, 1)",
                padding: "5px 15px",
                marginLeft: "16px",
                "&:hover": {
                  color: "#fff",
                  fontSize: "16px",
                  background: "rgba(219, 68, 68, 1)",
                },
              }}
            >
              Apply Coupon
            </Button>
          </Box>
          <Box
            maxWidth={470}
            sx={{
              width: "470px",
              border: "1px solid black",
              padding: "32px 24px",
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                color: "black",
                fontWeight: "500",
              }}
            >
              Cart Total
            </h3>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <p
                style={{
                  fontSize: "16px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                Shipping
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                Free
              </p>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                borderTop: "1px solid black",
                padding: "15px 0",
                margin: "15px 0",
              }}
            >
              <p>Total</p>
              <p>{total}</p>
            </Box>
            <Button
              sx={{
                color: "#fff",
                fontSize: "16px",
                background: "rgba(219, 68, 68, 1)",
                padding: "5px 15px",
                marginLeft: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "16px auto",
                "&:hover": {
                  color: "#fff",
                  background: "rgba(219, 68, 68, 1)",
                },
              }}
            >
              Process to checkout
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Cart;
