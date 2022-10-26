import React from 'react'
import { Card, CardContent, Typography, CardMedia, Button } from '@mui/material'
import moment from 'moment'

export const NewsCard = ({ newsData, handleClick }) => {
  return (
    <Button onClick={() => handleClick(newsData.id)}>
      <Card sx={{ minWidth: 278, boxShadow: 'none' }}>
        <CardMedia
          component="img"
          height="176"
          image={newsData.url}
          alt="news image"
          sx={{ borderRadius: '8px' }}
        />
        <CardContent sx={{ textAlign: 'left', padding: '16px 0' }}>
          <Typography variant="h3" sx={{ fontSize: 24, mb: '24px', fontFamily: "'Playfair Display', serif" }} gutterBottom>
            {newsData.judul}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: 12 }}>
            {moment(newsData.createdAt).format('MMMM Do YYYY')} | {newsData.createdBy}
          </Typography>
        </CardContent>
      </Card>
    </Button>
  )
}
