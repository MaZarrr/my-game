// import React from 'react'
// import { pluck } from 'ramda'

// // function objSearch(serObj, prop){
// //     // For loop through the object.
// //     for( prop in serObj ){
// //         // If the property is price get the price.
// //         if(typeof(el) === 'number'){
// //             // Got the price property now return the value of price.
// //             console.log('I have price...', prop, '=', serObj[prop]);
// //             // If the property is an object send it through the function again.
// //         } else if(typeof serObj[prop] === 'object'){  
// //             // Pass the nested object.
// //             objSearch(serObj[prop]);
// //         }
// //     }
// // }

//     const getFiniteValue = (obj) => {
//         getProp(obj);
             
//         function getProp(o) {
//             // let result = 0
//             for(let prop in o) {
//                 if(typeof(o[prop]) === 'object') {
//                     getProp(o[prop]);
//                 } else {
//                     // return o[prop]
//                     // result += o[prop]
//                     // return o[prop]
//                     return console.log('Finite value: '+o[prop])
//                 }
//                 // return result
//             }
//         }
//         return getProp(obj);
//     }


// const sum = (state, typeParametrs, parametrType, payload, parametr) => {
   

//     // console.log(payload);

//     // let skill = state.basicParameters[typeParametr][parametr] + 1
//     let parametrs = state.basicParameters[typeParametrs]
    
// //    console.log(getFiniteValue(parametrs)); 
//     // let ss = Object.keys(parametrs)[parametrType].filter((el) => typeof(el) === 'number')
//     let valueParametrs = Object.values(parametrs).filter((el) => typeof(el) === 'number' )
//     // console.log(ss);
//     console.log(parametrs);
//     console.log(valueParametrs);
//     // console.log(objSearch(parametrs, parametrType));
   
//     // Object.entries(parametrs).forEach(([key, value]) => console.log(`${key}: ${value}`));
//     // console.log(skill);
//     const sum = valueParametrs.reduce((prevValue, currentValue) => prevValue + currentValue, 1)
//     // console.log(sum, "utils sum");
//     if(payload === 1) { 
//         console.log(sum, "utils sum");
//         return sum
//     }

//     if(payload === -1) {
//         console.log(state.basicParameters[typeParametrs][parametr] + payload, "utils dec parametr");
//        return state.basicParameters[typeParametrs][parametr] + payload
//         // return dec - 1
//     }


// }



// export default sum


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