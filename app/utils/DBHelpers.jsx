/* MOCK DB */

var VENDORS = {
    freshcatch: {
        name: 'Fresh Catch',
        location: 'Pawtucket RI',
        rating: 3,
        description: 'Fresh caught seafood caught fresh every day. Our team works tirelessly to get you the best fish!',
        productPrices: {
            lobster: 30
        }
    },
    shuckers: {
        name: 'Shucker\'s',
        location: 'Narragansett RI',
        rating: 4,
        description: 'Shuckers is Narragansett\'s original seafood eatery! We specialize is locally caught seafood.',
        productPrices: {
            lobster: 25
        }
    }
}

var CATEGORIES = {
    meats: {name: 'meats', color: '#640D14', products: ['lamb', 'chicken']},
    seafood: {name: 'seafood', color: '#FFFFFA', products: ['lobster', 'crab']}
}

var PRODUCTS = {
    lobster: {name: 'lobster', unit: 'lb', color: '#FABABA', vendors: ['freshcatch', 'shuckers']},
    linguini: {name: 'linguini', unit: 'lb', color: '#FFE09F'},
    chicken: {name: 'chicken', unit: 'lb', color: '#FFE0B5'},
    lamb: {name: 'lamb', unit: 'lb', color: '#7E5920'},
    lavendar: {name: 'lavendar', unit: 'oz', color: '#BEEF9E'},
    scallop: {name: 'scallop', unit: 'lb', color: '#EABD8C'},
    lemon: {name: 'lemon', unit: 'lb', color: '#FFDA72'},
    cabbage: {name: 'cabbage', unit: 'lb', color: '#D6F6DD'},
    kale: {name: 'kale', unit: 'lb', color: '#1E3F20'},
}

/* END OF MOCK DB */

/* Very slow test implementation */
function autoComplete (string, dict) {
    string = string.toLowerCase();
    var output = [];
    var n = string.length;
    for (let [key, value] of Object.entries(dict)){
        if (key.substring(0, n) === string) {
            output.push(value.name);
        }
    }   
    return output;
    
}


var dbHelpers = {
    //bad test version
    isProduct (name) {
        return name in PRODUCTS;
    },
    isCategory (name) {
        return name in CATEGORIES;
    },
    getProduct (name) {
        return PRODUCTS[name];
    },
    getVendorsOfProduct (product) {
        return PRODUCTS[product].vendors.map((vendor) => {
            return VENDORS[vendor];
        })
    },
    getProductsInCategory (category) {
        return CATEGORIES[category].products.map((product) => {
            return PRODUCTS[product];
        })
    },
    suggestCategories (string) {
        return autoComplete(string.substring(1), CATEGORIES).map((name) => {
           return [name, CATEGORIES[name].color]; 
        });
    },
    suggestProducts (string) {
        return autoComplete(string, PRODUCTS).map((name) => {
            return [name, PRODUCTS[name].color]
        });
    },
    getProductColor (product) {
        return PRODUCTS[product].color;
    },
}

export default dbHelpers;