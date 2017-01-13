//convert to plural ('lb' to 'lbs')
//convert to formal plural ('lbs' to 'Pounds')
var pluralMap = {
    lb: 'lbs',
    oz: 'oz',
}

var longPluralMap = {
    lb: 'pounds',
    oz: 'ounces'
}

var helpers = {
    toPlural (unit) {
        return pluralMap[unit];
    },
    toLongPlural (unit) {
        return longPluralMap[unit];
    }
}

export default helpers;