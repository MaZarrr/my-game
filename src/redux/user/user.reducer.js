import { PlayerActionTypes } from './user.types';
import sum from '../../utils/sum'

const INITIAL_STATE = {
    editNamePlayer: true,
    registerPlayer: false,
    user: "Придумайте имя персонажа",
    activeParametrs: "",
    activeParametr: "",
    playerName: "",
    playerLevel: {
        untrained: "Нетренированный",
        initiat:  "Новичок",
        learn: "Ученик",
        adept: "Адепт",
        technician: "Эксперт",
    },
    basicParameters: {
        power: 0,
        agility: 0,
        intellect: 0,
        charisma: 0,
        parametrsPower: { 
            attackParametr: {
                value: 0,
                buttonIncDisabled: false,
                buttonDescDisabled: true
            }
        },
        parametrsAgility: { 
           stelsParametr: {
            value: 0,
            buttonIncDisabled: false,
            buttonDescDisabled: true
           },
           attackArchParametr: {
            value: 0,
            buttonIncDisabled: false,
            buttonDescDisabled: true
           }  
        },
        parametrsIntellect: { 
            educability: 0,
            survival: 0,
            medicine: 0
        },
        parametrsCharisma: {
            fear: 0, 
            insight: 0,
            appearance: 0,
            manipulation: 0
        }
    
    },
    playerParameters: {
        life: 0,
        dodging: 0,
        energy: 0
    }
};


const playerReducer = (state = INITIAL_STATE, action) => {

switch(action.type) {
	case PlayerActionTypes.CURRENT_PLAYER:
	return {
		...state,
		playerName: action.payload
	}
    case PlayerActionTypes.EDIT_PLAYER_NAME: 
    return {
        ...state,
        editNamePlayer: action.payload
    }
    case PlayerActionTypes.REGISTER_PALYER: 
    return {
        ...state,
       registerPlayer: action.payload
    }
    case PlayerActionTypes.PLAYER_POWER: 
    return {
        ...state,
        basicParameters: {
            ...state.basicParameters,
            power: action.payload

        }
    }
    case PlayerActionTypes.PLAYER_AGIBILITY:
        return {
            ...state,
            basicParameters: {
                ...state.basicParameters,
                agility: action.payload

        }
    }
    case PlayerActionTypes.PLAYER_INTELLECT:
        return {
            ...state,
            basicParameters: {
                ...state.basicParameters,
                intellect: action.payload
    
            }
        }
    case PlayerActionTypes.PLAYER_CHARISMA:
        return {
            ...state,
            basicParameters: {
                ...state.basicParameters,
                charisma: action.payload
    
            }
        }

    case PlayerActionTypes.PLAYER_ATTACK:
        return paramersUpdate(state, "parametrsPower", "attackParametr", action.payload, "attack", "power", "life")
    
    case PlayerActionTypes.PLAYER_STELS:
        console.log(action.payload);
        return paramersUpdate(state, "parametrsAgility", "stelsParametr", action.payload, "stels", "agility", "dodging")
    case PlayerActionTypes.PLAYER_ATTACH_ARCH:
        return paramersUpdate(state, "parametrsAgility", "attackArchParametr",  action.payload, "attackArch", "agility", "dodging")

    case PlayerActionTypes.PLAYER_EDUCABILITY:
    return {
        ...state,
        basicParameters: {
            ...state.basicParameters,
            charisma: action.payload

        }
    }
    case PlayerActionTypes.PLAYER_SURVIVAL:
    return {
        ...state,
        basicParameters: {
            ...state.basicParameters,
            charisma: action.payload

        }
    }
    case PlayerActionTypes.PLAYER_MEDICINE:
    return {
        ...state,
        basicParameters: {
            ...state.basicParameters,
            charisma: action.payload

        }
    }
    case PlayerActionTypes.PLAYER_FEAR:
    return {
        ...state,
        basicParameters: {
            ...state.basicParameters,
            charisma: action.payload

        }
    }
    case PlayerActionTypes.PLAYER_INSIGHT:
    return {
        ...state,
        basicParameters: {
            ...state.basicParameters,
            charisma: action.payload

        }
    }
    case PlayerActionTypes.PLAYER_APPEARANCE:
    return {
        ...state,
        basicParameters: {
            ...state.basicParameters,
            charisma: action.payload

        }
    }
    case PlayerActionTypes.PLAYER_MEDICINE:
    return {
        ...state,
        basicParameters: {
            ...state.basicParameters,
            charisma: action.payload

        }
    }
	default:
		return state
	}
}
const paramersUpdate = (state, skillsType, parametrType, payload, parametr, basicParametr, playerParameter) => {
    const sumParametrs = sum(state, skillsType, parametrType, payload.num, parametr);
   
            if(state.basicParameters[basicParametr] === 0) {  
            return {
            ...state,
            playerParameters: {
                ...state.playerParameters,
                [playerParameter]: payload.num === -1 ? state.playerParameters[playerParameter] -3 : state.playerParameters[playerParameter] + 3 
            },
            basicParameters: {
                ...state.basicParameters,
                [basicParametr]:  payload.num === 1 ? state.basicParameters[basicParametr]: state.basicParameters[basicParametr] + 1,
                [skillsType]: {
                    ...state.basicParameters[skillsType],
                    [parametrType]: {
                        ...state.basicParameters[skillsType][parametrType],
                        value: payload.num === -1 ? state.basicParameters[skillsType][parametrType].value + payload.num : state.basicParameters[skillsType][parametrType].value,
                    buttonIncDisabled: false,
                    buttonDescDisabled: state.basicParameters[skillsType][parametrType].value === 0 ? true : false
                }
            }
        }
    }
}


if(sumParametrs === 0) {
return {
    ...state,
    playerParameters: {
        ...state.playerParameters,
        [playerParameter]: payload.num === -1 ? state.playerParameters[playerParameter] -3 : state.playerParameters[playerParameter] + 3 
    },
    activeParametrs: skillsType,
    activeParametr: parametrType,
    basicParameters: {
        ...state.basicParameters,
        [basicParametr]: payload.num === 1 ? state.basicParameters[basicParametr] - 1 : state.basicParameters[basicParametr] + 1,
        [skillsType]: {
            ...state.basicParameters[skillsType],
            [parametrType]: {
                ...state.basicParameters[skillsType][parametrType],
           
                value: payload[parametr] + payload.num,
                
            buttonIncDisabled:  false,
            buttonDescDisabled: true,
        }
    }
    }
}  

}

return {
    ...state,
    playerParameters: {
        ...state.playerParameters,
        [playerParameter]: payload.num === -1 ? state.playerParameters[playerParameter] -3 : state.playerParameters[playerParameter] + 3 
    },
    activeParametrs: skillsType,
    activeParametr: parametrType,
    basicParameters: {
        ...state.basicParameters,
        [basicParametr]: payload.num === 1 ? state.basicParameters[basicParametr] - 1 : state.basicParameters[basicParametr] + 1,
        [skillsType]: {
            ...state.basicParameters[skillsType],
            [parametrType]: {
                ...state.basicParameters[skillsType][parametrType],
                value: state.basicParameters[skillsType] === 0 ?  state.basicParameters[skillsType][parametrType].value : payload[parametr] + payload.num,
           
            buttonIncDisabled:  false,
            buttonDescDisabled: false
        
        }
    }
    }
}
}

export default playerReducer;

