import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SideImage from '../assets/Side-Image.png';

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', gap: '69px', alignItems: 'center', marginTop: '140px' }}>
          <div style={{ width: '653px', height: '336px' }}>
            <Typography variant="h2" sx={{ fontSize: '54px', fontWeight: '600', marginBottom: '40px' }}>
              {t('Our story')}
            </Typography>
            <Typography sx={{ paddingBottom: '24px', fontWeight: '400', fontSize: '16px' }}>
              {t('Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.')}
            </Typography>
            <Typography>
              {t('Exclusive offers more than 1 million products, growing rapidly. It provides a diverse assortment in categories ranging from consumer goods to electronics.')}
            </Typography>
          </div>

          <div>
            <img src={SideImage} alt="Side Image" style={{ width: '100%', height: 'auto' }} />
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default About;
