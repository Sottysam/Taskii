const openEl = document.querySelector(".firsticon")
const closeEl = document.querySelector(".secondicon")
const sidebar = document.querySelector(".sidebar")

openEl.addEventListener("click", function(){
    sidebar.style.left = "0"
})

closeEl.addEventListener("click", function(){
    sidebar.style.left = "-300px"
})