import { useEffect, useState, React } from 'react'
import { NewsCard } from '../components/NewsCard'
import Grid from '@mui/material/Unstable_Grid2'
import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import apiaxios from '../services/apiaxios'

export const NewsList = () => {
  let navigate = useNavigate()

  const [newsDatas, setNewsDatas] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const fetchNews = await apiaxios.get("other/getall");
        setNewsDatas(fetchNews.data.Data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNews();
  }, []);


  const toDetail = () => {
    navigate('/news/detail')
  }




  return (
    <section className="news-list" style={{ padding: '30px 0' }}>
      <Typography variant="h2" mt={2} sx={{ fontSize: '32px', mb: 2 }}>Latest News</Typography>
      <Grid container spacing={2}>

        {newsDatas.map((newsData) => (
          <Grid xs={3}>
            <NewsCard key={newsData.judul} newsData={newsData} handleClick={toDetail} />
          </Grid>

        ))}
      </Grid>
    </section>
  )
}
