import React from 'react'
import { pluck } from 'ramda'

    // const getFiniteValue = (obj) => {
    //     getProp(obj);
             
    //     function getProp(o) {
    //         // let result = 0
    //         for(let prop in o) {
    //             if(typeof(o[prop]) === 'object') {
    //                 getProp(o[prop]);
    //             } else {
    //                 // return o[prop]
    //                 // result += o[prop]
    //                 // return o[prop]
    //                 return console.log('Finite value: '+o[prop])
    //             }
    //             // return result
    //         }
    //     }
    //     return getProp(obj);
    // }


const sum = (state, typeParametrs, parametrType, payload, parametr) => {
   
    let parametrs = state.basicParameters[typeParametrs]
    
    let valueParametrs = Object.values(pluck("value", parametrs)) 
   
    const sum = valueParametrs.reduce((prevValue, currentValue) => prevValue + currentValue, 1)
    if(payload === 1) { 
        return sum
    }

    if(payload === -1) {
        if(sum === 0) {
            return
        }
        console.log(state.basicParameters[typeParametrs][parametrType], "utils dec parametr");
       return state.basicParameters[typeParametrs][parametrType].value + payload
    // return sum + payload
    }


}



export default sum