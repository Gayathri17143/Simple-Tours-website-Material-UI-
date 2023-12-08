import React from 'react'

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import Rating from '@mui/material/Rating';
// import { red } from '@mui/material/colors';
import Favorite from '@mui/icons-material/Favorite';
import Share from '@mui/icons-material/Share';
const TourCard = () => {
  return (
    <Card sx={{ maxWidth: 600, marginBottom: '20px' }}>
      <CardHeader

        title="A Perfect Holiday Spot"
      />
      <CardMedia
        component="img"
        height="194"
        image={require('../assets/1.jpg')}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>

        <Rating
          name="simple-controlled"
          value={4}

        />
      </CardActions>

    </Card>
  )
}

export default TourCard
