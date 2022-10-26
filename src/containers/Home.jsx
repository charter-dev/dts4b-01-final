import React from 'react'
import { NewsCard } from '../components/NewsCard'
import Grid from '@mui/material/Unstable_Grid2'
import { Typography } from '@mui/material'
import { NewsHeroCard } from '../components/NewsHeroCard'
import { useNavigate, Link } from 'react-router-dom'

export const Home = () => {
  let navigate = useNavigate()

  const toDetail = () => {
    navigate('/news/detail')
  }
  return (
    <section className="news-list" style={{ padding: '30px 0' }}>
      <Typography variant="h1" sx={{ fontSize: '38px', mb: 2 }}>Hot Topics</Typography>
      <Grid container spacing={2}>
        <Grid xs={9}>
          <NewsHeroCard handleClick={toDetail} />
        </Grid>
        <Grid xs={3}>
          <Typography sx={{fontSize: '18px', fontFamily: "'Playfair Display', serif", lineheight: '28px' }}>
            <Typography variant='span' sx={{ fontSize: '20px' }}>Nisi</Typography>, 
            sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris, magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque... <Link style={{color: '#000', fontWeight: 700, textDecoration: 'none'}} to="/news/detail">read more</Link>
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="h2" mt={5} sx={{ fontSize: '32px', mb: 2 }}>Latest News</Typography>
      <Grid container spacing={2}>
        <Grid xs={3}>
          <NewsCard handleClick={toDetail} />
        </Grid>
        <Grid xs={3}>
          <NewsCard handleClick={toDetail} />
        </Grid>
        <Grid xs={3}>
          <NewsCard handleClick={toDetail} />
        </Grid>
        <Grid xs={3}>
          <NewsCard handleClick={toDetail} />
        </Grid>
        <Grid xs={3}>
          <NewsCard handleClick={toDetail} />
        </Grid>
        <Grid xs={3}>
          <NewsCard handleClick={toDetail} />
        </Grid>
        <Grid xs={3}>
          <NewsCard handleClick={toDetail} />
        </Grid>
        <Grid xs={3}>
          <NewsCard handleClick={toDetail} />
        </Grid>
      </Grid>
    </section>
  )
}
