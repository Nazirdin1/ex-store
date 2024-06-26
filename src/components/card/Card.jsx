import React from "react";
import {
  Card as MuiCard,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const Card = ({ title }) => {
  return (
    <MuiCard sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image="https://mui.com/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
