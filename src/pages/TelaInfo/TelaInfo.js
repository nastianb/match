import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./TelaInfo.css"
import { BASE_URL } from '../../Constants/url';
import { useNavigate } from 'react-router-dom'
import { goTelaList } from '../../routes/coordinator'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';



export default function TelaInfo() {
  const navigate =useNavigate()



  const [profile, setProfile] = useState({})
  useEffect(() => {
    getProfileChoose()
  }, [])

  const getProfileChoose = () => {
    axios
      .get(`${BASE_URL}person`)
      .then((res) => {
        setProfile(res.data.profile)
      })
      .catch((error) => {
        alert(error.response.data)
      })
  }
  const choosePerson = (id, boolean) => {
    const body = {
      id: id,
      choice: boolean,
    }
    axios.post(`${BASE_URL}choose-person`, body)
      .then((res) => {
        getProfileChoose()
      })
      .cath((err) => {
        alert(err.response.data)
      })
  }
//comentario
  return (
    <div className="tela">
      <img className="imagem" src={profile.photo} alt={profile.name} />
      <section className="info" >
        <Card sx={{ minWidth: 275 }}>
          <CardContent style={{ backgroundColor: "#f3e5f5" }}>
            <Typography variant="h5" component="div" style={{ color: "#6115db" }}>
              {profile.name}
              <br />
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {profile.age}
            </Typography>
            <Typography variant="body2">
              {profile.bio}
              <br />
            </Typography >
          </CardContent>
        </Card>
      </section>
      <div className="botoes">
        <ClearRoundedIcon sx={{ color: "#d00649", fontSize: 65 }} onClick={() => choosePerson(profile.id, false)} />
        <FavoriteBorderOutlinedIcon sx={{ color: "#0caf6b", fontSize: 60 }} onClick={() => choosePerson(profile.id, true)} />
        <FormatListBulletedOutlinedIcon sx={{ color: "#6115db", fontSize: 60 }} onClick={() => goTelaList(navigate)} />
      </div>
    </div>


  )
}


