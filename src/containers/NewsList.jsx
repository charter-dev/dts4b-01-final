import React from 'react'
import { NewsCard } from '../components/NewsCard'
import Grid from '@mui/material/Unstable_Grid2'
import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const NewsList = () => {
  let navigate = useNavigate()

  const toDetail = () => {
    navigate('/news/detail')
  }
  return (
    <section className="news-list" style={{ padding: '30px 0' }}>
      <Typography variant="h2" mt={2} sx={{ fontSize: '32px', mb: 2 }}>Latest News</Typography>
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
