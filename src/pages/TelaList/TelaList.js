import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../Constants/url';
import "./TelaList.css"
import { useNavigate } from "react-router-dom"
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { goTelaInfo } from '../../routes/coordinator';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';


export default function TelaList() {
  const navigate = useNavigate()
  const [matches, setMatches] = useState([])
  useEffect(() => {
    getMatches()
  }, [])

  const getMatches = () => {
    axios
      .get(
        `${BASE_URL}matches`
      )
      .then(res => {
        console.log(res.data.matches);
        setMatches(res.data.matches)
      })
      .catch(err => {
        console.log(err.response.data);
      })
  }

  const onClickReset = () => {
    axios.put(`${BASE_URL}clear`)
    .then(response => {
      console.log(response)
      setMatches([])
    })
  }
  return (
    <div className="tela2">
      <div className='icon' >
        <PeopleOutlineIcon sx={{ color: "#6115db", fontSize: 40 }} onClick={() => goTelaInfo(navigate)} />
        <ClearRoundedIcon  sx={{ color: "#d00649", fontSize: 40 }} onClick={onClickReset}/>
      </div>
      {matches.map((match) => {
        return (
          <div className="container" key={match.id}>
            <img className="imagem1" src={match.photo} alt={match.name} />
            <p>{match.name}</p>
            
          </div>
        )
      })}

      </div>
  )
}


