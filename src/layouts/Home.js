import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { ReactComponent as Task } from './../assets/task.svg';

const useStyles = makeStyles((theme) => ({
  cardHome: {
    margin: 100,
  },
  cardContent: {
    margin: 20,
  },
}));

export default function HomePage() {

  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Card className={classes.cardHome}>
        <CardMedia title="logo">
          <Task />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h4" component="h1">
            Welcome to Tasky!!!
        </Typography>
          <Typography variant="h5" color="textSecondary" component="p">
            A great place to keep track of your taks
          </Typography>
        </CardContent>
        <CardActions className={classes.cardContent}>
          <Button variant="outlined" color="secondary" href="/login">
            Login
          </Button>
        </CardActions>
      </Card>
    </Container>
  )
}
