import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import EmailIcon from '@material-ui/icons/Email';
import FaceIcon from '@material-ui/icons/Face';
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import LockIcon from '@material-ui/icons/Lock';
import SvgIcon from '@material-ui/core/SvgIcon';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { auth } from "./../services/firebase";

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

function AppleIcon(props) {
  return (
    <SvgIcon {...props} x="0px" y="0px" width="35.676px" height="35.676px" viewBox="0 0 35.676 35.676">
      <path d="M32.295,26.202c-0.096,0.271-0.189,0.562-0.296,0.848c-0.886,2.399-2.231,4.529-3.863,6.481 c-0.315,0.38-0.682,0.724-1.061,1.043c-0.749,0.634-1.611,1.017-2.608,1.052c-0.749,0.024-1.468-0.112-2.161-0.394 c-0.502-0.205-0.996-0.434-1.505-0.619c-1.652-0.6-3.295-0.521-4.92,0.121c-0.586,0.232-1.164,0.488-1.761,0.689 c-0.692,0.232-1.41,0.326-2.141,0.188c-0.638-0.119-1.196-0.416-1.714-0.799c-0.643-0.476-1.183-1.056-1.688-1.67 c-2.391-2.916-3.996-6.213-4.771-9.906c-0.334-1.588-0.494-3.189-0.396-4.812c0.115-1.946,0.567-3.799,1.607-5.469 c1.305-2.099,3.146-3.474,5.568-4.041c1.457-0.343,2.874-0.203,4.263,0.332c0.731,0.28,1.464,0.557,2.198,0.832 c0.676,0.254,1.349,0.254,2.026-0.005c0.749-0.286,1.499-0.571,2.251-0.85c0.771-0.281,1.555-0.511,2.373-0.576 c1.224-0.099,2.418,0.06,3.58,0.449c1.647,0.551,2.987,1.526,3.999,2.946c0.027,0.039,0.057,0.082,0.077,0.113 c-2.552,1.779-4.005,4.129-3.794,7.311C27.771,22.65,29.485,24.804,32.295,26.202z M17.98,8.253 c0.753,0.02,1.477-0.125,2.174-0.402c3.179-1.262,4.841-4.625,4.791-7.197C24.941,0.447,24.927,0.24,24.918,0 c-0.327,0.049-0.625,0.072-0.911,0.144c-2.321,0.569-4.107,1.864-5.281,3.961c-0.687,1.228-1.069,2.532-0.952,3.957 C17.782,8.213,17.837,8.251,17.98,8.253z" />
    </SvgIcon>
  );
}

function FacebookIcon(props) {
  return (
    <SvgIcon {...props} x="0px" y="0px" viewBox="0 0 408.788 408.788">
      <path fill="#475993" d="M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085 h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882 v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955 l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087 c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085 C408.786,24.662,384.124,0,353.701,0z" />
    </SvgIcon>
  );
}

function GithubIcon(props) {
  return (
    <SvgIcon {...props}>
      <path fill="#000000" d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" />
    </SvgIcon>
  );
}

function GoogleIcon(props) {
  return (
    <SvgIcon {...props} x="0px" y="0px" viewBox="0 0 512 512">
      <path fill="#FBBB00" d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256 c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456 C103.821,274.792,107.225,292.797,113.47,309.408z" />
      <path fill="#518EF8" d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451 c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535 c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z" />
      <path fill="#28B446" d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512 c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771 c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z" />
      <path fill="#F14336" d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012 c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0 C318.115,0,375.068,22.126,419.404,58.936z" />
    </SvgIcon >
  );
}

function MicrosoftIcon(props) {
  return (
    <SvgIcon {...props} x="0px" y="0px" viewBox="0 0 512 512">
      <path fill="#4CAF50" d="M272,240h240V16c0-8.832-7.168-16-16-16H272V240z" />
      <path fill="#F44336" d="M240,240V0H16C7.168,0,0,7.168,0,16v224H240z" />
      <path fill="#2196F3" d="M240,272H0v224c0,8.832,7.168,16,16,16h224V272z" />
      <path fill="#FFC107" d="M272,272v240h224c8.832,0,16-7.168,16-16V272H272z" />
    </SvgIcon >
  );
}

function TwitterIcon(props) {
  return (
    <SvgIcon {...props} x="0px" y="0px" viewBox="0 0 512 512">
      <path fill="#03A9F4" d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016 c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992 c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056 c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152 c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792 c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44 C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568 C480.224,136.96,497.728,118.496,512,97.248z" />
    </SvgIcon>
  );
}

function YahooIcon(props) {
  return (
    <SvgIcon {...props} x="0px" y="0px" viewBox="0 0 291.319 291.319">
      <path fill="#720E9E" d="M145.659,0c80.45,0,145.66,65.219,145.66,145.66c0,80.45-65.21,145.659-145.66,145.659 S0,226.109,0,145.66C0,65.219,65.21,0,145.659,0z" />
      <path fill="#FFFFFF" d="M212.353,114.98l0.155-0.027l4.825-5.371l-0.237-0.018l0.51-0.801h-67.595l2.604,9.249h18.444 l-31.044,28.722c-6.336-9.24-21.184-30.479-31.544-46.411h19.254v-6.555l0.264-1.884l-0.264-0.036v-0.765H54.631v9.24H77.49 c8.876,7.328,47.358,54.049,48.76,58.51c0.564,4.179,1.366,28.841-0.291,30.698c-1.994,2.868-22.814,1.32-26.483,1.593 l-0.137,9.058c6.7,0.2,26.801-0.009,33.584-0.009c13.364,0,36.77-0.346,40.065-0.082l0.41-8.576l-26.901-0.401 c-0.564-3.887-1.183-28.422-0.619-31.098c2.54-7.765,43.816-39.902,48.059-41.112l3.997-0.901h12.472 C210.405,118.002,212.353,114.98,212.353,114.98z M202.266,179.079l11.689,0.892l13.628-49.979 c-2.276-0.082-22.95-1.93-25.636-2.431L202.266,179.079z M200.245,187.091l0.064,12.208l5.917,0.492l6.391,0.446l1.875-11.944 l-6.737-0.31C207.756,187.983,200.245,187.091,200.245,187.091z" />
    </SvgIcon>
  );
}

export default function LoginPage() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleGoogleLogin = (event) => {
    var provider = new auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    auth().signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
      console.log(result);
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.log(error);
    });
  }

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item xs={12} sm={12} md={10}>
        <div className={classes.paper}>
          <Card className={classes.paper}>
            <CardHeader title="Register" />
            <CardContent>
              <div className={classes.center}>
                <IconButton justIcon round>
                  <AppleIcon />
                </IconButton>
                {` `}
                <IconButton justIcon round>
                  <FacebookIcon />
                </IconButton>
                {` `}
                <IconButton justIcon round>
                  <GithubIcon />
                </IconButton>
                {` `}
                <IconButton justIcon round onClick={handleGoogleLogin} >
                  <GoogleIcon />
                </IconButton>
                {` `}
                <IconButton justIcon round>
                  <MicrosoftIcon />
                </IconButton>
                {` `}
                <IconButton justIcon round>
                  <TwitterIcon />
                </IconButton>
                {` `}
                <IconButton justIcon round>
                  <YahooIcon />
                </IconButton>
                {` `}
                <h3 className={classes.socialTitle}>or be classical</h3>
                <div>
                <TextField
                  className={classes.pos}
                  id="outlined-first-name-text"
                  label="Name"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaceIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                </div>
                <div>
                <TextField
                  className={classes.pos}
                  id="outlined-email-text"
                  label="Email"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                </div>
                <div>
                <TextField
                  className={classes.pos}
                  id="outlined-password-text"
                  label="Password"
                  variant="outlined"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end">
                          {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                </div>
                <div>
                  <Button variant="contained" color="primary">
                    Get started
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardActions>
            </CardActions>
          </Card>
        </div>
      </Grid>
    </Grid>
  );
}
