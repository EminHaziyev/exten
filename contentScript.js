// const iframe = document.createElement("iframe");
// const el = document.getElementsByClassName("ytd-page-manager")[0];
// // Set attributes for the iframe
// iframe.src = "https://final.syntheyesis.repl.co/detect"; // Replace with the URL you want to embed
// iframe.width = "400";
// iframe.height = "1000";
// iframe.id = "finall";
// iframe.style.position = "fixed";
// iframe. allow="camera https://final.syntheyesis.repl.co"




// document.body.appendChild(iframe);


const videos = document.getElementsByClassName("style-scope ytd-item-section-renderer");


if (window.location.href == "https://www.instagram.com/") {
  setInterval(getreqInsta, 1000);

} else {
  setInterval(getreqYt, 1000);

}
var indexYt = 3;



function getreqYt() {

  fetch("https://final.syntheyesis.repl.co/api/dir/get")
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      
      if (data.direction == "eyeLookInLeft" && indexYt != 11) {
        videos[indexYt].style.border = "none";
        index -= 1
        videos[indexYt].style.border = "10px solid red";


      }
      if (data.direction == "eyeLookInRight") {
        videos[indexYt].style.border = "none";
        index += 1
        videos[indexYt].style.border = "10px solid red";

      }
      if (data.direction == "eyeLookUpRight") {
        document.getElementsByClassName("style-scope ytd-item-section-renderer")[4].querySelectorAll("#video-title")[0].click()

      }
      fetch("https://final.syntheyesis.repl.co/api/dir/set?direction=none")
        .then()
        .catch(err => {
          console.log(err);
        })


    })
    .catch(error => {
      console.error('API error:', error);
    });
}

var indexInsta = 0;


function getreqInsta() {
  const posts = document.querySelectorAll("article");
  fetch("https://final.syntheyesis.repl.co/api/dir/get")
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      
      if (data.direction == "eyeLookInLeft" && indexInsta != 0) {
        posts[indexInsta].style.border = "none";
        indexInsta -= 1
        posts[indexInsta].style.border = "5px solid red";
        posts[indexInsta].style.borderRadius = "30px";
        posts[indexInsta].scrollIntoView({ behavior: "smooth" });


      }
      if (data.direction == "eyeLookInRight") {
        posts[indexInsta].style.border = "none";
        indexInsta += 1
        posts[indexInsta].style.border = "10px solid red";
        posts[indexInsta].style.borderRadius = "30px";
        posts[indexInsta].scrollIntoView({ behavior: "smooth" });



      }
      
      fetch("https://final.syntheyesis.repl.co/api/dir/set?direction=none")
        .then()
        .catch(err => {
          console.log(err);
        })


    })
    .catch(error => {
      console.error('API error:', error);
    });
}


