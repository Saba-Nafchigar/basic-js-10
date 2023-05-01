let get = document.querySelector("button.get")
let fetchPosts =async ()=>{
    let html = ""
    let res = await axios.get("https://jsonplaceholder.typicode.com/posts").then(res=>{
        res.data.forEach((element)=>{
            html +=`<div class="product">
                <h2>${element.title}</h2>
                <p>${element.body}</p>
                <h5>${element.id}</h5>
                <h5>${element.userId}</h5>
            </div>`;
        })
        document.querySelector("div.wrapper").innerHTML = html
    })
}

get.addEventListener("click",fetchPosts)