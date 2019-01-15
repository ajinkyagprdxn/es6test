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
  var promise = new Promise(function(resolve, reject) {
   
    var myGen = function* () {
      yield load1();
      yield load2();
      yield load3();
    };

    var gen = myGen();

    console.log(gen.next());
    console.log(gen.next());
    console.log(gen.next());
    
    loadinfo.classList.add('hide');
  });

    promise.then(firstResult).then(secondResult).then(lastResult);

    function firstResult(response) {
      return console.log(gen.next().value);
    }

    function secondResult(response) {
      return console.log(gen.next().value);
    }

    function lastResult(response) {
      return console.log(gen.next().value);
    }
    
});

load1 = () => {

    showdata(0, 3);
    showphotos(0, 3);
};

load2 = () => {

    showdata(3, 6);
    showphotos(3, 6);
  
};

load3 = () => {

    showdata(6, 10);
    showphotos(6, 10);

};



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

showdata = (start, end) => {
  ajax("https://jsonplaceholder.typicode.com/posts", "GET").then((result) => {
    let obj = JSON.parse(result);
    
    for (let i = start; i < end; i++) {
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
      ul.appendChild(li);
      var element = document.getElementsByClassName("mainposts")[0];
      element.appendChild(li);
    } 
    
  });//End of ajax
}


showphotos = (start, end) => {
  ajax("https://jsonplaceholder.typicode.com/photos", "GET").then((result) => {
    let imgobj = JSON.parse(result);

    for (let i = start; i < end; i++) {
      var ul = document.createElement('ul');
      ul.className = 'api2-ul';
      var photosCell = document.createElement('img');
      var li = document.createElement('li');
      photosCell.src = imgobj[i].thumbnailUrl;
      photosCell.className = "photoscell";
      li.appendChild(photosCell);
      ul.appendChild(li);
      var element = document.getElementsByClassName("photosposts")[0];
      element.appendChild(li);
    } 

  });//End of ajax
}
