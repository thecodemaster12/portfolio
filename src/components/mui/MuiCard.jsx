import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

export default function MultiActionAreaCard({ title, details, image, link, github }) {
  return (
    <Card sx={{ maxWidth: 345, height: "100%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          alt="green iguana"
          sx={{ height: 200 }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {details}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      {link && 
        <Button size="small" color="primary">
          <a href={link} target='_blank'>Preview</a>
        </Button>
      }
      {github && 
        <Button size="small" color="primary">
          <a href={github} target='_blank'>Github</a>
        </Button>
      }
      </CardActions>
    </Card>
  );
}
