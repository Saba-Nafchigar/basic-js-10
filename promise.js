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
    let promise = new Promise((resolve , reject)=>{
        setTimeout(() => {
            laptop.push({
                "brand":"msi",
                "prise" : "2000",
            })
            let flag = true
            if(flag){
                resolve(apiData())
            }else{
                reject("error from server!")
            }
        }, 2000);
        
    })
    return promise
}
function getLaptop(){
    return laptop
}
create(getLaptop).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})
