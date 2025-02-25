import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { CustomCard } from './components/Customcard'; 

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';

import { textGradient } from 'src/theme/styles';

import { ModularExponentiation } from './components/modular-exponentiation';
import { ExtendedEuclideanAlgorithm } from './components/extended-euclidean-algorithm';

const lgKey = 'lg';

export function HomeHeroCYSE1008() {
  const [isClicked, setIsClicked] = useState(false); 

  const handleClick = () => {
    setIsClicked(true); // Update state on button click
    console.log('Button clicked!'); // Optional: Log to console
  };

  const theme = useTheme();
  return (
    <Box
    sx={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh', // Full viewport height
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: '#ffffff',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for better contrast
      },
    }}
  >
    <Box sx={{ position: 'relative', zIndex: 1, maxWidth: '800px', width: '100%', padding: '0 20px' }}>
      {/* Use the CustomCard Component */}
      <CustomCard
        title="Welcome to FAHAD WEARS"
        description="Elevate Your Fitness Game with Premium Activewear"
        imageUrl="https://via.placeholder.com/345x140" // Optional image
      />

      {/* Button */}
      <Button
        variant="contained"
        onClick={handleClick}
        sx={{
          backgroundColor: 'primary.main', // Use primary color
          color: '#ffffff',
          padding: '16px 32px', // Larger button
          fontSize: '1.25rem', // Larger font size
          fontWeight: 'bold',
          borderRadius: '4px',
          textTransform: 'uppercase',
          transition: 'background-color 0.3s ease',
          marginTop: 4, // Add spacing above the button
          '&:hover': {
            backgroundColor: 'primary.dark', // Darker shade of primary on hover
          },
        }}
      >
        {isClicked ? 'Clicked!' : 'Shop Now'} {/* Change button text on click */}
      </Button>

      {/* Optional: Display a message when the button is clicked */}
      {isClicked && (
        <Box
          sx={{
            marginTop: 2,
            fontSize: '1.25rem',
            color: '#FFE66D', // Yellow color for the message
          }}
        >
          You clicked the button! Redirecting...
        </Box>
      )}
    </Box>
  </Box>
);

return (
  <Stack alignItems="center" spacing={2.5}>
    <Box
      component="h1"
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      sx={{
        ...theme.typography.h2,
        my: 0,
        mx: 'auto',
        maxWidth: 680,
        fontFamily: theme.typography.fontSecondaryFamily,
        [theme.breakpoints.up(lgKey)]: { fontSize: 72, lineHeight: '90px' },
      }}
    >
      <Box
        component={motion.span}
        animate={{ backgroundPosition: '200% center' }}
        transition={{
          duration: 20,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        sx={{
          ...textGradient(
            `300deg, ${theme.palette.primary.main} 0%, ${theme.palette.warning.main} 25%, ${theme.palette.primary.main} 50%, ${theme.palette.warning.main} 75%, ${theme.palette.primary.main} 100%`
          ),
          backgroundSize: '400%',
          ml: { xs: 0.75, md: 1, xl: 1.5 },
        }}
      >
        Welcome to Quilt
      </Box>
    </Box>
    <ExtendedEuclideanAlgorithm />
    <ModularExponentiation />
  </Stack>
);
}