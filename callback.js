//callback
let laptop = [
    {
        "brand" : "asus",
        "price" : "3000$"
    },
    {
        "brand" : "lenovo",
        "price" : "2000$"
    },
    {
        "brand" : "apple",
        "price": "4000$"
    }
]
function add(callback) {
    setTimeout(() => {
        laptop.push({
            "brand" : "hp",
            "price" : "1500$"
        })
        callback()
    }, 2000);
    
    
}
function getLapTop() {
    console.log(laptop);
}
add(getLapTop)