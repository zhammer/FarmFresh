/* MOCK DB */

var VENDORS = {
    freshcatch: {
        name: 'Fresh Catch',
        location: 'Pawtucket RI',
        rating: 3,
        description: 'Fresh caught seafood caught fresh every day. Our team works tirelessly to get you the best fish!',
        productPrices: {
            lobster: 30,
            scallops: 18,
            tarragon: 3,
        }
    },
    shuckers: {
        name: 'Shucker\'s',
        location: 'Narragansett RI',
        rating: 4,
        description: 'Shuckers is Narragansett\'s original seafood eatery! We specialize is locally caught seafood.',
        productPrices: {
            lobster: 25,
            scallops: 20
        }
    },
    blueskyfarms: {
        name: 'Blue Sky Farms',
        location: 'Cranston RI',
        rating: 5,
        description: 'Blue Skys Flower Farm, in Cranston RI, is a one acre flower, herb, and vegetable farm. Christina Dedora started the farm about five years ago.',
        productPrices: {
            lavendar: 5,
            tarragon: 7,
            rosemary: 7,
        }
    },
    farmacyherbs: {
        name: 'Farmacy Herbs',
        location: 'Providence RI',
        rating: 3,
        description: 'We cultivate, wildcraft and formulate our herbal medicine on the premises and on local farms. Our collection of tinctures, tea blends and herbal products are produced by Farmacy\'s staff of herbalists, apprentices, volunteers and the Herbal Education and Training Program (HEAT).',
        productPrices: {
            lavendar: 4,
            tarragon:  5,
            rosemary: 3,
        }
    },
    patspastured: {
        name: 'Pat\'s Pastured',
        location: 'East Greenwich RI',
        rating: 5,
        description: 'Pat\'s Pastured was founded in 2002 and provides the highest quality pasture raised and grass fed meats. Our goal is to provide our livestock with a life that allows them to express their natural instincts fully in a pasture environment. That means that pigs get to root, run and play; chickens get to peck, scratch and crow; turkeys goggle and strut; cows eat grass outside, NOT corn in confinement. ',
        productPrices: {
            chicken: 6,
            lamb: 16
        }
    },
    aquidneckfarms: {
        name: 'Aquidneck Farms',
        location: 'Portsmouth RI',
        rating: 4,
        description: 'Aquidneck Farm raises grass fed beef and pastured poultry on 350 acres of conserved land. Most of our cattle is born on the farm, raised on mother’s milk and weaned on lush legume pastures. Our herd is rotationally grazed during the growing season. In the winter they are fed home grown stored forage in the form of dry hay and grass silage. We continue to improve our 175 head herd by selecting for genetics that will thrive in a sustainable, grass based system. All of our animals are source verified. We do not feed grain to our cattle. We do not use hormones or add antibiotics to our feed.',
        productPrices: {
            chicken: 7,
            lamb: 20
        }
    },
    loremipsumfarms: {
        name: 'Lorem Ipsum Farms',
        location: 'Rome Italy',
        rating: 2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        productPrices: {
            linguini: 8,
            lemon: 4,
            cabbage: 7,
            kale: 6
        }
    },
    schrutefarms: {
        name: 'Schrute Farms',
        location: 'Scranton PA',
        rating: 5,
        description: 'The natural aroma of beets drifts into the bedrooms and makes you dream of simpler times. The dawn goose-walk will tug at your heart strings. Table making never seemed so possible! You will never wanna leave your room. The architecture reminds one of a quaint tuscan beet farm.',
        productPrices: {
            linguini: 4,
            lemon: 3,
            cabbage: 9,
            kale: 10
        }
    },
}

var CATEGORIES = {
    meats: {name: 'meats', color: '#640D14', products: ['lamb', 'chicken']},
    seafood: {name: 'seafood', color: '#78CDD7', products: ['lobster', 'scallops']},
    herbs: {name: 'herbs', color: '#739E82', products: ['lavendar', 'rosemary', 'tarragon']}
}

var PRODUCTS = {
    lobster: {name: 'lobster', unit: 'lb', color: '#FABABA', vendors: ['freshcatch', 'shuckers']},
    linguini: {name: 'linguini', unit: 'lb', color: '#FFE09F', vendors: ['loremipsumfarms', 'schrutefarms']},
    chicken: {name: 'chicken', unit: 'lb', color: '#FFE0B5', vendors: ['aquidneckfarms', 'patspastured']},
    lamb: {name: 'lamb', unit: 'lb', color: '#7E5920', vendors: ['aquidneckfarms', 'patspastured']},
    lavendar: {name: 'lavendar', unit: 'oz', color: '#BEEF9E', vendors: ['farmacyherbs', 'blueskyfarms']},
    tarragon: {name: 'tarragon', unit: 'oz', color: '#40F99B', vendors: ['farmacyherbs', 'blueskyfarms', 'freshcatch']},
    rosemary: {name: 'rosemary', unit: 'oz', color: '#7EA172', vendors: ['farmacyherbs', 'blueskyfarms']},
    scallops: {name: 'scallops', unit: 'lb', color: '#EABD8C', vendors: ['freshcatch', 'shuckers']},
    lemon: {name: 'lemon', unit: 'lb', color: '#FFDA72', vendors: ['loremipsumfarms', 'schrutefarms']},
    cabbage: {name: 'cabbage', unit: 'lb', color: '#D6F6DD', vendors: ['loremipsumfarms', 'schrutefarms']},
    kale: {name: 'kale', unit: 'lb', color: '#1E3F20', vendors: ['loremipsumfarms', 'schrutefarms']},
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
        return CATEGORIES[category].products.map((name) => {
            return [name, PRODUCTS[name].color];
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
    getCategoryColor(category) {
        return CATEGORIES[category].color;
    }
}

export default dbHelpers;