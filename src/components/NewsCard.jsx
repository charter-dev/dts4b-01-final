import React from 'react'
import { Card, CardContent, Typography, CardMedia, Button } from '@mui/material'

export const NewsCard = ({ handleClick }) => {
  return (
    <Button onClick={() => handleClick()}>
      <Card sx={{ minWidth: 278, boxShadow: 'none' }}>
        <CardMedia
          component="img"
          height="176"
          image="https://images.squarespace-cdn.com/content/v1/571abd61e3214001fb3b9966/1d4a6001-0ce0-42c5-b655-2d12445fef89/JoJo+35th+Anniversary+Spring+2022+Magazine"
          alt="JoJo"
          sx={{ borderRadius: '8px' }}
        />
        <CardContent sx={{ textAlign: 'left', padding: '16px 0' }}>
          <Typography variant="h3" sx={{ fontSize: 24, mb: '24px', fontFamily: "'Playfair Display', serif" }} gutterBottom>
            News Title Lorem Ipsum Dolor Sit Amet
          </Typography>
          <Typography variant="body2" sx={{ fontSize: 12 }}>
            1 Hour Ago | CNN Indonesia
          </Typography>
        </CardContent>
      </Card>
    </Button>
  )
}