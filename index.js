const output = {
    "Items": [
        {
            "country": {
                "S": "USA"
            },
            "firstName": {
                "S": "rob4"
            },
            "lastName": {
                "S": "toftness"
            },
            "id": {
                "N": "1"
            },
            "winning": {
                "N": "10"
            }
        },
        {
            "firstName": {
                "S": "rob"
            },
            "lastName": {
                "S": "toftness"
            },
            "country": {
                "S": "USA"
            },
            "id": {
                "N": "2"
            },
            "winning": {
                "N": "100"
            }
        }
    ],
    "Count": 2,
    "ScannedCount": 2
};

// write a function to take the above object and turn it into:
/*
[
    {
        "firstName": "rob4",
        "lastName": "toftness",
        "country": "USA",
        "id": 1,
        "winning": 10
    },
    {
        "firstName": "rob",
        "lastName": "toftness",
        "country": "USA",
        "id": 2,
        "winning": 100
    }
]
*/

// Guidline.

/**
 * There are two objects in the array, with 5 properties each. Some properties are strings, some are numbers. The original format 
 * has everything as strings, but contains hints as to what kind of datatype they are.
 * 
 * Convert the first array into the nicer formatted array.
 * 
 * You can use whatever lirbaries (or not you want)
 * 
 * You must print it out to the console at the end.
 * 
 * String must be strings and numbers must be numbers.
 * 
 * If we add more items to the first array this should still work.
 * 
 * I highly recommend debugging this using Visual Studio code and breakpoints
 * 
 */

// here is a start
const start = () => {
    const formattedObject = getFormattedObjects(output);
    console.log(`Our newly formatted objects: ${JSON.stringify(formattedObject)}`);
};

/**
 * Convert an array of objects to our clean JSON format
 * @param {object[]} objectArray The array of objects that will be converted 
 * @returns {object[]} A new array with the newly formatted objects on it;
 */
const getFormattedObjects = objectArray => {
    // create a new array that contains your cleanly formatted objects
    // return this array
    return []; //placeholder for now
};

start();