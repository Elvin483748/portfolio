
const openBtn = document.getElementById("search");
const modal = document.querySelector(".modal-input");
openBtn.addEventListener('click',()=>{
modal.style.display='block'
document.body.style.overflow="hidden"
})

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow=''
  }
}
