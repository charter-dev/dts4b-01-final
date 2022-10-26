import { useEffect, useState, React } from 'react'
import { NewsCard } from '../components/NewsCard'
import Grid from '@mui/material/Unstable_Grid2'
import { Typography } from '@mui/material'
import { NewsHeroCard } from '../components/NewsHeroCard'
import { useNavigate, Link } from 'react-router-dom'
import apiaxios from '../services/apiaxios'

export const Home = () => {
  let navigate = useNavigate()

  const [newsDatas, setNewsDatas] = useState([]);
  const [hotNews, setHotNews] = useState([]);
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

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const fetchTopics = await apiaxios.get("other/hottopics");
        setHotNews(fetchTopics.data.Data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTopics();
  }, []);

  const toDetail = () => {
    navigate('/news/detail')
  }
  return (
    <section className="news-list" style={{ padding: '30px 0' }}>
      <Typography variant="h1" sx={{ fontSize: '38px', mb: 2 }}>Hot Topics</Typography>
      <Grid container spacing={2}>
        <Grid xs={9}>
          <NewsHeroCard hotNews handleClick={toDetail} />
        </Grid>

        
         <Grid xs={3}>
         <Typography sx={{fontSize: '18px', fontFamily: "'Playfair Display', serif", lineheight: '28px' }}>
           <Typography variant='span' sx={{ fontSize: '20px' }}>{hotNews.judul}</Typography>, 
           {hotNews.content} <Link style={{color: '#000', fontWeight: 700, textDecoration: 'none'}} to="/news/detail">read more</Link>
         </Typography>
       </Grid>

        

        
      </Grid>
      <Typography variant="h2" mt={5} sx={{ fontSize: '32px', mb: 2 }}>Latest News</Typography>
      <Grid container spacing={2}>
      {newsDatas.map((newsData) => (
          <Grid xs={3}>
            <NewsCard key={newsData.id} newsData={newsData} handleClick={toDetail} />
          </Grid>

        ))}
      </Grid>
    </section>
  )
}
