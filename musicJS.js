
document.addEventListener("DOMContentLoaded",
function() {
    alert("Hello World!");
    console.log("What upppp");

    let popArtists = document.getElementById("popPhotos");
    popArtists.addEventListener("click", changeImage);

    function changeImage() {
        if (popArtists.src == "file:///Users/girlswhocode2018/development/MusicBlog/Ariana.png") {
            popArtists.src = "Selgo.jpg"
        }
        else {
            popArtists.src = "Ariana.png";
        }

    }


    let rapArtists = document.getElementById("rapPhotos");

    rapArtists.addEventListener("click", changeImage2);

    console.log(rapPhotos.src);
    function changeImage2() {
        if (rapArtists.src == "file:///Users/girlswhocode2018/development/MusicBlog/Kanye.jpg") {
            rapArtists.src = "ChildishGambino.jpeg";
            console.log(rapPhotos.src);
        }
        else {
            rapArtists.src = "Kanye.jpg";
            console.log(rapPhotos.src);
        }

    }

all of the JS code goes here


})  //end of DOM CONTENT LOADED
