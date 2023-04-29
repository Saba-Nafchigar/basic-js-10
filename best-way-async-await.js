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
function addLaptop() {
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            laptop.push({
                "brand":"new",
                "price" : "1200$"
            })
            let flag = true
            if(flag){
                resolve(console.log("ok"))
            }else{
                reject(console.log("nok!"))
            }
        }, 2000);
    })
}

function deleteLaptop(){
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            laptop.shift()
            let flag = true
            if(flag){
                resolve(console.log("ok22"))
            }else{
                reject(console.log("nok22!"))
            }
        }, 4000);
    })
}
function showLaptop(){
    console.log(laptop);
}
async function allData() {
    await addLaptop()
    await deleteLaptop()
    showLaptop()
}
allData()