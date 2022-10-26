import React from 'react'
import { Card, CardContent, Typography, CardMedia, Button } from '@mui/material'

export const NewsCard = ({ newsData, handleClick }) => {
  return (
    <Button onClick={() => handleClick()}>
      <Card sx={{ minWidth: 278, boxShadow: 'none' }}>
        <CardMedia
          component="img"
          height="176"
          image={newsData.url}
          alt="JoJo"
          sx={{ borderRadius: '8px' }}
        />
        <CardContent sx={{ textAlign: 'left', padding: '16px 0' }}>
          <Typography  variant="h3" sx={{ fontSize: 24, mb: '24px', fontFamily: "'Playfair Display', serif" }} gutterBottom>
          { newsData.judul}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: 12 }}>
          {newsData.createdAt}
          </Typography>
        </CardContent>
      </Card>
    </Button>
  )
}
