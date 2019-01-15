var loadinfo = document.getElementsByClassName("loadinfo-btn")[0];

ajax = (url, method, data) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.responseType = 'text';
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    reject(Error(xhr.statusText));
                }
            }
        };
        xhr.onerror = () => {
            reject(Error("Network Error"));
        };
        xhr.open(method, url, true);
        xhr.send(data);
    });
}

loadinfo.addEventListener("click", inputyear = () => {
  showdata();
});//End of inputyear method

showdata = () => {
  ajax("https://jsonplaceholder.typicode.com/posts", "GET").then((result) => {
    let obj = JSON.parse(result);
    for (let i = 0; i < obj.length; i++) {
    
    console.log(obj[i].body);
    var list = document.createElement("li");
    list.className = "names";
    var node = document.createTextNode(obj[i].body);
    list.appendChild(node);
    var element = document.getElementsByClassName("mainposts")[0];
    element.appendChild(list);
  }      
    
  });//End of ajax
}
