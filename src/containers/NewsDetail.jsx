import React, { useEffect, useState } from 'react'
import { Card, Typography, CardMedia, Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import apiaxios from '../services/apiaxios'
import moment from 'moment';

export const NewsDetail = () => {
  let { newsId } = useParams()

  const [data, setData] = useState()
  const [isLoaded, setIsLoaded] = useState(false)


  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataFetched = await apiaxios.get('other/other', {
          params: {
            id: newsId
          }
        })
  
        setData(dataFetched.data.Data)
        setIsLoaded(true)
      } catch (error) {
        console.log(error);
      }
    }
    
    fetchData()
  }, [])
  
  console.log(newsId);
  if (!isLoaded) {
    return (
      <Typography variant="h1" sx={{ fontSize: '38px', mb: 2 }}>Loading...</Typography>
    )
  }

  return (
    <section className="news-detail" style={{ padding: '30px 0' }}>
      <Typography variant="h1" sx={{ fontSize: '38px', mb: 2 }}>Hot Topics</Typography>
      <Card sx={{ borderRadius: '4px' }}>
        <CardMedia
          component="img"
          height="400"
          image={data.url}
          alt="news image"
          sx={{ borderRadius: '8px' }}
        />
      </Card>

      <Box sx={{ margin: '40px 0' }}>
        <Typography variant="h2" sx={{ fontSize: 32, mb: '10px', fontFamily: "'Playfair Display', serif" }} gutterBottom>
          {data.judul}
        </Typography>
        <Typography variant="body1" sx={{ fontSize: 12 }}>
          {moment(data.createdAt).format('MMMM Do YYYY')} | {data.createdBy}
        </Typography>
      </Box>
      <Box>
        <Typography>{data.content}</Typography>
      </Box>
    </section>
  )
}