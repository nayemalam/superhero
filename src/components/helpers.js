const filterArrayByName = function (data, text) {
    if(this.state.search == null)
        return data
    else if(data.name.toLowerCase().includes(text.toLowerCase())) {
        return data
    }
    // const filteredArray = array.filter(item => item.filters.includes(filteredString))

    // return filteredArray
}

module.exports = {
    filterArrayByName: filterArrayByName
}