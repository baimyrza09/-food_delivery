import React, { useState, useEffect } from 'react';
import { Grid, Avatar, TextField, Button } from '@material-ui/core'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import './Profile.css'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(17),
      height: theme.spacing(17),
      margin: 'auto',
  
    },
    inp: {
      margin: '15px',
      color: '#000'
    }
  }));

const Profile = () => {

    const classes = useStyles();
    const [state, setState] = useState({})
    const [isEdit, setEdit] = useState(false)
    
    async function showProfile(){
        const {data} = await axios(`http://localhost:8001/profile`)
        setState(data[0])
    }

    useEffect(() => {
        showProfile()
    }, [])

    function handle(e) {
        let obj = {
            ...state,
            [e.target.value]: e.target.value
        }
        setState(obj)
    }

    async function saveDb(){
        await axios.patch(`http://localhost:8001/profile/${0}`, state)
        setEdit(false)
    }
    return (
<div className="copy-body">
      <div className="main">
        <div className="row">

          {!isEdit ?
            <>
              <div >
                <div className="ava" >
                  <Avatar alt="Remy Sharp" src={state.avatar} className={classes.large} />
                </div>
                <div className="info">
                  <span> <TextField name='name' label="Name" disabled id="standard-disabled" value={state.name} variant="outlined" /></span>
                  <span><TextField name='lastname' label="Lastname" disabled id="standard-disabled" value={state.lastname} variant="outlined" /></span>
                  <span><TextField name='phone' label="Phone" disabled id="standard-disabled" value={state.phone} variant="outlined" /></span>
                  <span> <TextField name='email' label="Email" disabled id="standard-disabled" value={state.email} variant="outlined" /></span>
                  <span><TextField name='address' label="Address" disabled id="standard-disabled" value={state.address} variant="outlined" /></span>
                </div>
              </div>
            </> :
            <>
              <div container spacing={3}>
                <div className="ava" >
                  <Avatar alt="Remy Sharp" src={state.avatar} className={classes.large} />
                </div>
                <div className="info">
                  <TextField onChange={handle} label="Name" name='name' id="outlined-basic" value={state.name} className={classes.inp} variant="outlined" />
                  <TextField onChange={handle} label="Lastname" name='lastname' id="outlined-basic" value={state.lastname} className={classes.inp} variant="outlined" />
                  <TextField onChange={handle} label="Phone" name='phone' id="outlined-basic" value={state.phone} className={classes.inp} variant="outlined" />
                  <TextField onChange={handle} label="Email" name='email' id="outlined-basic" value={state.email} className={classes.inp} variant="outlined" />
                  <TextField onChange={handle} label="Address" name='address' id="outlined-basic" value={state.address} className={classes.inp} variant="outlined" />
                  <TextField onChange={handle} label="Avatar" name='avatar' id="outlined-basic" value={state.avatar} className={classes.inp} variant="outlined" />

                </div>
              </div>
            </>}
          {isEdit ?
            <Button variant="contained" color="secondary" onClick={saveDb}>SAVE</Button> :
            <Button variant="contained" color="secondary" onClick={() => setEdit(true)}>EDIT</Button>}
        </div>
      </div >
    </div >
  );
};

export default Profile;