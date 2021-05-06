import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { setAttack, setStels, setAttachArch } from '../redux/user/user.actions'

  const Skills = ({ 
    setAttack, setStels, setAttachArch,
    power, agility, intellect, charisma, 
    attack, stels, attackArch, registerPlayer,
    disabledDescPower, disabledIncPower, disabledIncAgibilityStels, disabledDescAgibilityStels, disabledIncAgibilityArch, disabledDescAgibilityArch
}) => {

  const stelsParametrFunc = (num, stels) => {
    setStels({num, stels})
  }
    return (
      <> { registerPlayer ?
        <div className="skils_container">
        <div><h2>Скиллы</h2> </div>
          <div className="skills">
            <div><h3>Сила: {power}</h3></div>
            <ul>
            <li><p>Атака: {attack}</p>
            <button disabled={disabledIncPower} onClick={() => setAttack({num: 1, attack})}><FontAwesomeIcon icon={faPlus} /></button>
            <button disabled={disabledDescPower} onClick={() => setAttack({num: -1, attack})}><FontAwesomeIcon icon={faMinus} /></button> 
            </li>
            </ul>
            </div>
          <div className="skills">
            <div><h3>Ловкость: {agility}</h3></div>
            <ul>
            <li><p>Стелс: {stels} </p>
            <button disabled={disabledIncAgibilityStels} onClick={() => stelsParametrFunc(1, stels)}><FontAwesomeIcon icon={faPlus} /></button>
            <button disabled={disabledDescAgibilityStels} onClick={() => stelsParametrFunc(-1, stels)}><FontAwesomeIcon icon={faMinus} /></button> 
            </li>
            <li><p>Стрельба из лука: {attackArch}</p>
            <button disabled={disabledIncAgibilityArch} onClick={() => setAttachArch({num: 1, attackArch})}><FontAwesomeIcon icon={faPlus} /></button>
            <button disabled={disabledDescAgibilityArch} onClick={() => setAttachArch({num: -1, attackArch})}><FontAwesomeIcon icon={faMinus} /></button> 
            </li>
            </ul>
            </div>
          <div className="skills">
        <div><h3>Интелект: {intellect}</h3></div>
        <ul>
          <li><p>Обучаемость</p>
          <button><FontAwesomeIcon icon={faPlus} /></button>
           <button><FontAwesomeIcon icon={faMinus} /></button> 
          </li>
          <li><p>Выживание</p>
          <button><FontAwesomeIcon icon={faPlus} /></button>
           <button><FontAwesomeIcon icon={faMinus} /></button> 
          </li>
          <li><p>Медицина</p>
          <button><FontAwesomeIcon icon={faPlus} /></button>
           <button><FontAwesomeIcon icon={faMinus} /></button> 
          </li>
        </ul>
        </div>
          <div className="skills">
            <div><h3>Харизма: {charisma}</h3></div>
            <ul>
              <li><p>Запугивание</p>
              <button><FontAwesomeIcon icon={faPlus} /></button>
           <button><FontAwesomeIcon icon={faMinus} /></button> 
              </li>
              <li><p>Проницательность</p>
              <button><FontAwesomeIcon icon={faPlus} /></button>
           <button><FontAwesomeIcon icon={faMinus} /></button> 
              </li>
              <li><p>Внешний вид</p>
              <button><FontAwesomeIcon icon={faPlus} /></button>
           <button><FontAwesomeIcon icon={faMinus} /></button> 
              </li>
              <li><p>Манипулирование</p>
              <button><FontAwesomeIcon icon={faPlus} /></button>
           <button><FontAwesomeIcon icon={faMinus} /></button> 
              </li>
          </ul>
          </div>
          
        </div> 
      : <h1>Введите имя игрока</h1> } </>
    )

}

const mapStateToProps = (state) => ({
    playerLevel: state.user.playerLevel.untrained,
    power: state.user.basicParameters.power,
    agility: state.user.basicParameters.agility,
    intellect: state.user.basicParameters.intellect,
    charisma: state.user.basicParameters.charisma,
    attack: state.user.basicParameters.parametrsPower.attackParametr.value,
    stels: state.user.basicParameters.parametrsAgility.stelsParametr.value,
    attackArch: state.user.basicParameters.parametrsAgility.attackArchParametr.value,
    disabledIncPower: state.user.basicParameters.parametrsPower.attackParametr.buttonIncDisabled,
    disabledDescPower: state.user.basicParameters.parametrsPower.attackParametr.buttonDescDisabled,
    disabledIncAgibilityStels: state.user.basicParameters.parametrsAgility.stelsParametr.buttonIncDisabled,
    disabledDescAgibilityStels: state.user.basicParameters.parametrsAgility.stelsParametr.buttonDescDisabled,
    disabledIncAgibilityArch: state.user.basicParameters.parametrsAgility.attackArchParametr.buttonIncDisabled,
    disabledDescAgibilityArch: state.user.basicParameters.parametrsAgility.attackArchParametr.buttonDescDisabled,
  })
  
  const mapDispatchToProps = {
    setAttack,
    setStels,
    setAttachArch,
  }

export default  connect(mapStateToProps, mapDispatchToProps)(Skills)