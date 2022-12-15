const detailsImage = document.querySelector(".lambo-class");
const detailsTitle = document.querySelector(".anotation");
const anchorElements = document.querySelectorAll(".thumbnails-anchor");
const mainElement = document.querySelector(".main-class");
const HIDDEN ="hidden";
function showDetail(){
mainElement.classList.remove(HIDDEN);
}
function hideDetails() {
 mainElement.classList.add(HIDDEN);
}
function setDetails(anchor){
    showDetail();
    detailsImage.src = anchor.getAttribute("data-details-image");
    detailsTitle.innerHTML = anchor.getAttribute("data-details-title");
}
for(let i = 0; i < anchorElements.length; i++)
{
    anchorElements[i].addEventListener("click",function(){
        setDetails(anchorElements[i]);
    })
}
hideButtonElement.addEventListener("click",hideDetails);
