import { PlayerActionTypes } from './user.types';

// export const setCurrentPlayer = player => (dispatch) => ({
// 	type: PlayerActionTypes.CURRENT_PLAYER,
// 	payload: player
// })

export const setCurrentPlayer = player => ({
	type: PlayerActionTypes.CURRENT_PLAYER,
	payload: player
})

export const setRegisterStart = check => ({
	type: PlayerActionTypes.REGISTER_PALYER,
	payload: check,
})


export const editNamePlayer = edit => ({
	type: PlayerActionTypes.EDIT_PLAYER_NAME,
	payload: edit
})

export const setPower = power => ({
	type: PlayerActionTypes.PLAYER_POWER,
	payload: power
})

export const setAgility = agility => ({
	type: PlayerActionTypes.PLAYER_AGIBILITY,
	payload: agility
})

export const setIntellect = intellect => ({
	type: PlayerActionTypes.PLAYER_INTELLECT,
	payload: intellect
})

export const setCharisma = charisma => ({
	type: PlayerActionTypes.PLAYER_CHARISMA,
	payload: charisma
})

export const setAttack = attack => ({
	type: PlayerActionTypes.PLAYER_ATTACK,
	payload: attack	
})

export const setStels = stels => (dispatch, getState) => {
	// const { user: {basicParameters: {parametrsAgility: {stelsParametr, attackArchParametr}}}} = getState()
		dispatch({
			type: PlayerActionTypes.PLAYER_STELS,
			payload: stels
		})

}
export const setAttachArch = attackAtch => ({
	type: PlayerActionTypes.PLAYER_ATTACH_ARCH,
	payload: attackAtch
})
export const setEducability = educability  => ({
	type: PlayerActionTypes.PLAYER_EDUCABILITY,
	payload: educability
})

export const setSurvival = survival => ({
	type: PlayerActionTypes.PLAYER_SURVIVAL,
	payload: survival
})
export const setMedicine = medicine => ({
	type: PlayerActionTypes.PLAYER_MEDICINE,
	payload: medicine
})

export const setFear = fear => ({
	type: PlayerActionTypes.PLAYER_FEAR,
	payload: fear
})

export const setInsight = insight => ({
	type: PlayerActionTypes.PLAYER_INSIGHT,
	payload: insight
})

export const setAppearance = appearance => ({
	type: PlayerActionTypes.PLAYER_APPEARANCE,
	payload: appearance
})

export const setManipulation = manipulation => ({
	type: PlayerActionTypes.PLAYER_MANIPULATION,
	payload: manipulation
})