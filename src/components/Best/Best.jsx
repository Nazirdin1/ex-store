import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../../redux/slices/allproduct';
import { Container, Button, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from '../card/Card';

const Best = () => {
  const dispatch = useDispatch();
  const { items, isLoading, isError } = useSelector((state) => state.productsAll);
  const [showAllProducts, setShowAllProducts] = React.useState(false);
  const [randomItems, setRandomItems] = React.useState([]);
  const [showDataMessage, setShowDataMessage] = React.useState(false);

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
    slideWidth: '80%',
    cellSpacing: 20,
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    if (items.length > 0) {
      setShowDataMessage(true);
    }
  }, [items]);

  useEffect(() => {
    if (showAllProducts) {
      const shuffledItems = items.slice().sort(() => 3.5 - Math.random());
      setRandomItems(shuffledItems.slice(0,21));
    }
  }, [items, showAllProducts]);

  const toggleViewProducts = () => {
    setShowAllProducts(prev => !prev);
  };

  if (isLoading) {
    return (
      <Container maxWidth="lg" sx={{ marginTop: '100px', padding: '0 20px', position: 'relative' }}>
        <Typography variant="h4">Лучшие продажи</Typography>
        <Typography variant="subtitle1" sx={{ marginTop: '20px' }}>
          Загрузка...
        </Typography>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container maxWidth="lg" sx={{ marginTop: '100px', padding: '0 20px', textAlign: 'center' }}>
        <Typography variant="h5" color="error">
          Произошла ошибка при загрузке продуктов.
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ marginTop: '100px', padding: '0 20px', position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'absolute', top: '-80px', width: '100%' }}>
        <Typography variant="h4">Best Selling Products</Typography>
        <Button
          onClick={toggleViewProducts}
          variant="contained"
          style={{
            backgroundColor: '#DB4444',
            color: 'white',
            fontSize: '16px',
            borderRadius: '5px',
            paddingLeft: '20px',
            paddingRight: '20px',
          }}
        >
          {showAllProducts ? 'Close' : 'View All'}
        </Button>
      </div>
      {showAllProducts ? (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            marginBottom: '50px',
          }}
        >
          {randomItems.map(el => (
            <Card key={el?.id} el={el} />
          ))}
        </div>
      ) : (
        <Slider {...sliderSettings}>
          {items.map(el => (
            <Card key={el?.id} el={el} />
          ))}
        </Slider>
      )}
    </Container>
  );
};

export default Best;
