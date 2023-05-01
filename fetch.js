let get = document.querySelector("button.get")
let fetchPosts = ()=>{
    let html = ""
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((data) => data.json())
    .then((res) => {
    res.forEach((element)=>{
        html +=`<div class="product">
            <h2>${element.title}</h2>
            <p>${element.body}</p>
            <h5>${element.id}</h5>
            <h5>${element.userId}</h5>
        </div>`;
    })
    document.querySelector("div.wrapper").innerHTML = html
    })
    .catch((err)=>console.log(err))
};
get.addEventListener("click",fetchPosts)