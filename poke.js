const pokeTypes = require('poke-types')

console.log(pokeTypes.getTypeWeaknesses('water', 'flying'))

console.log(pokeTypes.getTypeStrengths('electric'))

// import { getTypeWeaknesses } from 'poke-types'
// import { noEffect, notVeryEffective, superEffective, ultraEffective } from 'poke-types/effectiveness'

// const abilityEffectiveness = (targetType, abilityType) => {
//   switch (getTypeWeaknesses(...targetType)[abilityType]) {
//     case noEffect: return 'It has no effect...'
//     case notVeryEffective: return 'It\'s not very effective...'
//     case superEffective: case ultraEffective: return 'It\'s super effective!'
//     default: return ''
//   }
// }

// const attack = pokemon => target => ability => {
//   return `
//   ${pokemon.name} used ${ability.name}!
//             💥
//   ${abilityEffectiveness(target.type, ability.type)}
//   `
// }

// const pikachu = {
//   name: 'Pikachu',
//   type: 'electric',
//   abilities: {
//     thunderbolt: {
//       name: 'Thunderbolt',
//       type: 'electric'
//     }
//   },
//   attack: target => ability => attack(pikachu)(target)(pikachu.abilities[ability])
// }

// const gyarados = {
//   name: 'Gyarados',
//   type: ['water', 'flying']
// }

// console.log(pikachu.attack(gyarados)('thunderbolt'))
