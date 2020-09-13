import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
}));

export default function LoginPage() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item xs={12} sm={12} md={10}>
        <div className={classes.paper}>
          <Card className={classes.paper}>
            <CardHeader title="Register" />
            <CardContent>
              <div className={classes.center}>
                <Button justIcon round color="twitter">
                  <i className="fab fa-twitter" />
                </Button>
                {` `}
                <Button justIcon round color="dribbble">
                  <i className="fab fa-dribbble" />
                </Button>
                {` `}
                <Button justIcon round color="facebook">
                  <i className="fab fa-facebook-f" />
                </Button>
                {` `}
                <h4 className={classes.socialTitle}>or be classical</h4>
              </div>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
      </Grid>
    </Grid>
  );
}
