var imgList =Array.from(document.querySelectorAll(".item img"))
var boxContainer =document.querySelector("#boxContainer")
var innerBox=document.querySelector("#innerBox")
var closeEl = document.getElementById("closeEl")
var arrowLeft = document.getElementById("arrowLeft")
var arrowRight = document.getElementById("arrowRight")
var currentIndex;
for (let i = 0; i < imgList.length; i++) {
    imgList[i].addEventListener("click",function(event){
        boxContainer.style.display="flex";
        currentIndex=imgList.indexOf(event.target)
var imgPath= event.target.getAttribute("src")
innerBox.style.backgroundImage="url("+ imgPath+")"
    })
    
}
closeEl.addEventListener("click",closeBox)
function closeBox(){
    boxContainer.style.display="none";
}
arrowRight.addEventListener("click",nextImg)
arrowLeft.addEventListener("click",prevImg)
function nextImg(){
    currentIndex++;
    if(currentIndex===imgList.length){
        currentIndex=0;
    }
    var imgPath= imgList[currentIndex].getAttribute("src")
innerBox.style.backgroundImage="url("+ imgPath+")"
}
function prevImg(){
    currentIndex--;
    if(currentIndex<0){
        currentIndex=imgList.length-1;
    }
    var imgPath= imgList[currentIndex].getAttribute("src")
innerBox.style.backgroundImage="url("+ imgPath+")"
}

document.addEventListener("keyup",function(event){
    console.log(event.key);
    if(event.key=="ArrowRight"){
        nextImg()
    }else if (event.key=="ArrowLeft"){
        prevImg()
    }
    else if (event.key=="Escape"){
        closeBox()
    }
})
boxContainer.addEventListener("click",function(e){
    if(e.target.getAttribute("id")=="boxContainer"){
closeBox()
    }
})