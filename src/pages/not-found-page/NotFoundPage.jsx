import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <Container>
        <h1
          style={{
            fontSize: "110px",
            fontWeight: "500",
            marginTop: "20%",
            textAlign: "center",
          }}
        >
          404 Not Found
        </h1>
        <p
          style={{
            fontSize: "16px",
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          Your visited page not found. You may go home page.
        </p>
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(219, 68, 68, 1)",
            color: "white",
            padding: "16px",
            borderRadius: "5px",
            margin: "50px auto 0",
            textDecoration: "none",
            width:"270px"
          }}
        >
          Back to home page
        </Link>
      </Container>
    </div>
  );
};

export default NotFoundPage;

