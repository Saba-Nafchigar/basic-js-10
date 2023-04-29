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
function create(apiData) {
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            laptop.push({
                "brand":"msi",
                "prise" : "2000",
            })
            let flag = true
            if (flag) {
                resolve(apiData())
            }
            else{
                reject(console.log("reject"))
            }
        }, 2000);
        
    })
 
}
function getLaptop(){
   console.log(laptop);
}
async function allData(){
   await create(getLaptop)
}
allData()