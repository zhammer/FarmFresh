

function priceMarker (currency, price, unit) {
    return (currency ? currency : '$')  + price + (unit ? '/' + unit : '')
}


export default priceMarker;