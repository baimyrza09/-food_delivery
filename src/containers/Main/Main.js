import React from 'react';
import {Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from './Main.css';

const useStyles = makeStyles((theme) => ({
    mainFuturesPost: {
        position: "relative",
        color: "black",
        marginBottom: theme.spacing(4),
        backgroundSize: "cover",
        backgroundColor: "#ffc244"
      },
      overlay: {
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left:0,
        backgroundOverlay: "rgba(0,0,0,.3)"
      },
    
      mainFuturesPostContent: {
        position: "relative",
        height: '70vh',
        padding: theme.spacing(6)

      }
}))

const Main = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState("recents")
    
    const handleChange = (event, newValue) => {
        setValue(newValue)
      }
    return (
        <div position="fixed">
            <main>
                <Paper className={classes.mainFuturesPost}>
                    <Container style={{height: '100vh'}} className={styles.container}>
                        <h1 style={{textAlign: 'center', color: '#00a082', fontSize: 48, marginTop: "15%"}}>Potato.KG</h1>
                        <h2 style={{textAlign: "center", color: "#ffffff", fontSize: 54}}>Anything in Bishkeк <br/> delivered in a minute</h2>
                    </Container>
                </Paper>
            </main>
        </div>
    );
};

export default Main;