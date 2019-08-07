import carSales from "./data.js"

const totalProfits = carSales.map(sale => sale.gross_profit).reduce((total, indvSale) => total += indvSale, 0)
console.log('totalProfits: ', totalProfits)





// CREATE MAP DATA STRUCTURE FUNCTIONS

const makeNewMap = (array, incrementer, startingValue) => {
    const map = new Map()
    array.forEach(property => {
        if (map.has(property)) {
            map.set(property, (map.get(property)) + incrementer)
        } else {
            map.set(property, startingValue)
        }
    })
    return map
}


const findMax = (map) => {
    let maxKey, count = 0
    map.forEach((value, key) => {
        if (count < value) {
            count = value
            maxKey = key
        }
    })
    return maxKey
}

const makeProfitMap = (carSales) => {
    const map = new Map()
    carSales.forEach(car => {
        if (map.has(car.sales_agent.last_name)) {
            map.set(car.sales_agent.last_name, (map.get(car.sales_agent.last_name)) + car.gross_profit)
        } else {
            map.set(car.sales_agent.last_name, car.gross_profit)
        }
    })
    return map  
}
// FINDS THE MONTHS WITH THE MOST CARS SOLD
const monthsPurchasedArr = carSales.map(car => car.purchase_date.slice(5, 7))
const monthsPurchasedMap = makeNewMap(monthsPurchasedArr, 1, 1)
console.log("Month with most cars sold is: ", findMax(monthsPurchasedMap))

// FINDS THE REP WITH THE MOST CARS SOLD
const lastNames = carSales.map(car => car.sales_agent.last_name)
const lastNamesMap = makeNewMap(lastNames, 1, 1)
console.log("Rep with most cars sales is: ", findMax(lastNamesMap))

// const test = parseFloat(carSales.map(car => car.gross_profit))
// console.log('TEST: ', test)


const individualProfitsMap = makeProfitMap(carSales)
console.log('individualProfitsMap: ', individualProfitsMap)
console.log("The Rep with the most gross profits is: ", findMax(individualProfitsMap))

const carModelsMap = makeNewMap(carSales.map(car => car.vehicle.model), 1, 1)
console.log('carModelsMap: ', carModelsMap)
console.log(`The most popluar car was: ${findMax(carModelsMap)}`)

const creditProvidersMap = makeNewMap(carSales.map(car => car.credit.credit_provider), 1, 1)
console.log('creditProvidersMap: ', creditProvidersMap)
console.log(`The most popluar credit provider was: ${findMax(creditProvidersMap)}`)





