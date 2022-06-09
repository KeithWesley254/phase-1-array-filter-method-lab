// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, nameOfDriver){
    return drivers.filter(function (names){return names.toLowerCase() === nameOfDriver.toLowerCase()})
}

function fuzzyMatch(drivers, nameOfDriver){
    return drivers.filter(function (names){return names.toLowerCase().substring(0, nameOfDriver.length) === nameOfDriver.toLowerCase()})
}

function matchName(drivers, toxicMath){
    return drivers.filter(function (names){return names.name === toxicMath})
}