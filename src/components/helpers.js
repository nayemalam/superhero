const sumItems = function (array, key) {
    return (array || []).map(item => parseInt(item.powerstats[key]))
    .reduce(((a,b) => (a || 0) + (b || 0)), 0)
}

const avgItems = function(array, key) {
    const value =  sumItems(array, key) / array.length
    const fixedDecValue = Math.round(value * 100)/100
    return fixedDecValue
}

module.exports = {
    sumItems: sumItems,
    avgItems: avgItems
}