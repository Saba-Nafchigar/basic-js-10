let get = document.querySelector("button.get")
let fetchPosts = async ()=>{
    let html = ""
    let data = await fetch("https://jsonplaceholder.typicode.com/posts")
    let res = await data.json()
    res.forEach((element)=>{
        html +=`<div class="product">
            <h2>${element.title}</h2>
            <p>${element.body}</p>
            <h5>${element.id}</h5>
            <h5>${element.userId}</h5>
        </div>`;
    })
    document.querySelector("div.wrapper").innerHTML = html
};
get.addEventListener("click",fetchPosts)