var LOBSTER_INFO = {
    name: 'lobster',
    unit: 'lb',
}

var LOBSTER_VENDOR_DATA_0 = {
    name: 'Fresh Catch',
    location: 'Pawtucket, RI',
    price: 30,
    rating: 3,
    description: 'Fresh caught seafood caught fresh every day. Our team works tirelessly to get you the best fish!'
};

var LOBSTER_VENDOR_DATA_1 = {
    name: 'Shuckers',
    location: 'Narragansett, RI',
    price: 25,
    rating: 4,
    description: 'Shuckers is Narragansett\'s original seafood eatery! We specialize is locally caught seafood.'
};

var LOBSTER_VENDORS = [LOBSTER_VENDOR_DATA_0, LOBSTER_VENDOR_DATA_1];

var PRODUCT_INFO_DB = {
    lobster: LOBSTER_INFO
}

var VENDORS_DB = {
    lobster: LOBSTER_VENDORS
}

var PRODUCTS = [
    'lobster',
    'linguini',
    'licorice',
    'lavendar',
    'crab',
    'lemon',
    'lollipop',
    'cabbage',
    'kale'
]

var CATEGORY_MAP = {
    dairy: ['milk', 'cream', 'butter'],
    herbs: ['sage', 'rosemary', 'thyme', 'basil'],
    vegetables: ['cauliflower', 'lettuce', 'potato', 'tomato'],
    seafood: ['shrimp', 'swordfish', 'scallops', 'lobster']
}

var CATEGORIES = [
    'dairy',
    'herbs',
    'pastries',
    'vegetables',
    'fruits',
    'meats',
    'pastas',
    'seafood',
]

//End of mock data


//This is an awful, slow implementation of autoComplete. Once I have db initialized I will use a DB prefix query.
//or load all products into trie and implement autoCopmlete that way.
function autoComplete (string, array) {
    if (string.charAt(0) === '#') {
        string = string.substring(1);
    }
    var output = [];
    var n = string.length;
    for (var element of array) {
        if (element.substring(0, n) === string) {
            output.push(element);
        }
    }
    return output;
    
}


var dbHelpers = {
    getProduct (name) {
        return PRODUCT_INFO_DB[name];
    },
    getVendors (name) {
        return VENDORS_DB[name];
    },
    //bad test version
    isProduct (name) {
        return (PRODUCTS.indexOf(name) > -1)
    },
    productsInCategory (name) {
        return CATEGORY_MAP[name]
    },
    //add 'max'
    suggestions (text, isCategorySearch) {
        return autoComplete(text, isCategorySearch ? CATEGORIES : PRODUCTS);
    }
}

export default dbHelpers;