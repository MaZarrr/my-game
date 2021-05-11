import React, { useState, useEffect } from 'react';
import logo from './images/hero2.jpg';
import './App.css';
import { connect } from "react-redux"
import { setCurrentPlayer, editNamePlayer, setPower, setCharisma, setAgility, setIntellect, setRegisterStart } from "./redux/user/user.actions"

import Skills from "./components/Skills"

type Skill = string | number

// type Players = {
//  readonly id: number,
//   name?: string,
// }

const playerSkill: Array<{id: number, name: string}> = [
  {
    id: 1,
    name: "igor"
  },
  {
    id: 2,
    name: "Slave"
  },
  {
    id: 3,
    name: "Petr"
  }
]

// const playerSkill: Array<Players> = [
//   {
//     id: 1,
//     name: "igor"
//   },
//   {
//     id: 2,
//     name: "Slave"
//   },
//   {
//     id: 3,
//     name: "Petr"
//   }
// ]

interface IPlayerProps {
  playerName: string;
  setNameCurrentUser: Function;
  setEditNamePlayer: Function;
  setPower: Function;
  setAgility: Function;
  setIntellect: Function;
  setRegisterStart: Function;
  setCharisma: Function;
  playerLevel: string;
  playerLife: Skill;
  playerDodging: Skill;
  playerEnergy: Skill;
  power: Skill;
  agility: Skill;
  intellect: Skill;
  charisma: Skill;
  editName: boolean;
  registerPlayer: boolean;
  basicParametr: object;
}


// interface IPlayerProps {
//   playerName: string;
//   setNameCurrentUser: Function;
//   setEditNamePlayer: Function;
//   setPower: Function;
//   setAgility: Function;
//   setIntellect: Function;
//   setRegisterStart: Function;
//   setCharisma: Function;
//   playerLevel: string;
//   playerLife: number;
//   playerDodging: number;
//   playerEnergy: number;
//   power: number;
//   agility: number;
//   intellect: number;
//   charisma: number;
//   editName: boolean;
//   registerPlayer: boolean;
//   basicParametr: object;
// }

function App({ playerName, playerLevel, playerLife, playerDodging, playerEnergy, editName, registerPlayer,
  setNameCurrentUser, setEditNamePlayer, setPower, setAgility, setIntellect, setCharisma, setRegisterStart 
   }: IPlayerProps) {


const handleSubmit = (e: any) => {
  e.preventDefault();
  setEditNamePlayer(false)
  if(!registerPlayer) {
    setRegisterStart(true)
    setPower(2)
    setAgility(2)
    setIntellect(2)
    setCharisma(2)
    setRegisterStart(true)
    alert(playerName + ' вы получили новые скиллы');
  }
}

const func = <T extends object, R extends keyof T>(obj: T, key: R) => {
  return obj[key]
}


const editNamePlayer = (): void => {
  setEditNamePlayer(true)
}
const players = playerSkill.filter(el => el.id > 1)

  return (
    <>
    <div className="section"> 
    <a href="#" className="menu-btn">
      <span></span>
    </a>
  </div>
    <div className="App">
        
     

        <Skills registerPlayer={registerPlayer} />

        <div className="person_container">
          <div> 
          <div style={{padding: 0, margin: 0}}> {registerPlayer?  <h1 style={{margin: 0}}>{playerName}</h1> : <h1>Придумайте имя персонажа</h1>} </div>
          <div>
            { editName ? <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                required 
                maxLength={40}
                onChange={(e) => setNameCurrentUser(e.target.value)} 
                value={playerName}/> 
              <button type="submit">Сохранить</button>
            </form> : <p onClick={editNamePlayer} style={{ textDecoration: "underline", cursor: "pointer" }}>Изменить имя</p>}
            </div>
          </div>
        
          <span>Уровень: {playerLevel}</span>
          <div className="image_person">
          <img src={logo} className="App-logo" alt="logo" /> 
          </div>
          <div className="person_content">
          <ul className="skills_contetn">
              <li><p>Жизненная сила: {playerLife}</p></li>
              <li><p>Уклонение: {playerDodging}</p></li>
              <li><p>Энергичность: {playerEnergy}</p></li>
          </ul>
          </div>
        </div>

      </div>
    {/* // </div> */}
    </>
  );
}

const mapStateToProps = (state: any) => ({
  playerName: state.user.playerName,
  editName: state.user.editNamePlayer,
  registerPlayer: state.user.registerPlayer,
  basicParametr: state.user.basicParameters,
  playerLevel: state.user.playerLevel.untrained,
  playerLife: state.user.playerParameters.life,
  playerDodging: state.user.playerParameters.dodging,
  playerEnergy: state.user.playerParameters.energy,
  power: state.user.basicParameters.power,
  agility: state.user.basicParameters.agility,
  intellect: state.user.basicParameters.intellect,
  charisma: state.user.basicParameters.charisma,
})


const mapDispatchToProps =  {
	setNameCurrentUser: setCurrentPlayer,
  setEditNamePlayer: editNamePlayer,
  setPower,
  setAgility,
  setIntellect,
  setRegisterStart,
  setCharisma,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
