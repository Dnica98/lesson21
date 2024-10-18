
const str = 'string'

// console.log(str.split(''))

// for(let i = 0; i < str.length; i++){
//     console.log(str[i])
// }

// for(let i = 0; i < str.length; i++){
//     console.log(str[str.length -i - 1])
// }

// for (let i = str.length - 1; i >= 0; i--){
//     console.log(str[i])
// }

// let strInvers = ''

// for(let i = 0; i < str.length; i++){
//     strInvers = strInvers + str[str.length -i - 1]
    
// }

// console.log(strInvers)


// const result = str.split('').reverse().join('')

// console.log(result)


const polindrom = 'level'

const checkPolindrom = (str) =>{
    for(let i = 0; i < str.length/2 ; i++){
       if ( str[i] !== str[str.length -i - 1] ) return false
    }

    return true
}

console.log(checkPolindrom(polindrom))
