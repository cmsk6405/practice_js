const h1 = document.querySelector(".hello h1");

function handleTitleClick(){
    h1.style.color = "blue";
    console.log("h1 was clicked!");
}

function handleMouseEnter(){
    h1.innerText = " Mouse is here";
}

function handleMouseLeave(){
    h1.innerText = " Mouse is gone";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato"
}

function handleWindowCopy(){
    alert("copy!")
}

function handleWindowOffline(){
    alert("SOS no wifi!")
}

function handleWindowOnline(){
    alert("All good")
}


h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline)
window.addEventListener("online", handleWindowOnline)