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

loadinfo.addEventListener("click", load = () => {
  maintitles();
  showdata();
});//End of inputyear method

maintitles = () => {
  var container = document.getElementById('apidata');
  var title = document.createElement('div');
  title.className = 'api1data';
  var h_title = document.createElement('h3');
  h_title.className = 'head-title';
  title.appendChild(h_title);
  h_title.innerHTML = 'Title';
  var h_post = document.createElement('h3');
  h_post.className = 'head-post';
  h_post.innerHTML = 'Post';
  title.appendChild(h_post);
  var h_photos = document.createElement('h3');
  h_photos.className = 'head-photos';
  h_photos.innerHTML = 'Photos';
  title.appendChild(h_photos);
  container.appendChild(title);
}

showdata = () => {
  ajax("https://jsonplaceholder.typicode.com/posts", "GET").then((result) => {
    let obj = JSON.parse(result);
    
    for (let i = 0; i < obj.length; i++) {
    console.log(obj[i].body);
    
      var ul = document.createElement('ul');
      ul.className = 'api1-ul';
      var titleCell = document.createElement('div');
      var postCell = document.createElement('div');
      var photosCell = document.createElement('div');
      var li = document.createElement('li');
      titleCell.innerHTML = obj[i].title;
      titleCell.className = "titlecell";
      li.appendChild(titleCell);
      postCell.innerHTML = obj[i].body;
      postCell.className = "postcell";
      li.appendChild(postCell);
      photosCell.innerHTML = obj[i].id;
      photosCell.className = "photoscell";
      li.appendChild(photosCell);
      // ul.appendChild(li);
      var element = document.getElementsByClassName("mainposts")[0];
      element.appendChild(li);



    //=============SAFE CODE===============
    // var list = document.createElement("li");
    // list.className = "names";
    // var node = document.createTextNode(obj[i].body);
    // list.appendChild(node);
    // var element = document.getElementsByClassName("mainposts")[0];
    // element.appendChild(list);
  }      
    
  });//End of ajax
}
