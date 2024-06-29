
import { useSelector, useDispatch } from "react-redux";
import Card from "../../components/card/Card";
import { removeAllItems2 } from "../../redux/slice/HeartSlice";
import { Container } from "@mui/material";


const Heart = () => {
  const dispatch = useDispatch();
  const { items2 } = useSelector((state) => state.heart);

  const handleRemoveAllFavorites = () => {
    dispatch(removeAllItems2());
  };

  return (
    <div>
      <Container  maxWidth="lg" sx={{ marginTop: "100px", padding: "0 20px" }}>
      <button style={{
              
              color: "#000",
              fontSize: "16px",
              padding: "5px 10px",
              borderRadius: "5px",
           right:"100px",
           margin:"auto",
           border:"1px solid #000"
              
            }}
            onClick={handleRemoveAllFavorites}>Move All To Bag</button>
      {items2.map((item) => (
        <Card key={item.id} el={item} />
      ))}</Container>
    </div>
  );
};

export default Heart;
