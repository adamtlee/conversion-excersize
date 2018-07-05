# conversion-excersize

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

Write a function to take the above object and turn it into:
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