const toggle = document.querySelector(".toggle");
const navigationList = document.querySelector(".navigation ul");

toggle.onClick = function(){
    alert("hellooo");
    // toggle.classList.add("showToggle");
}
window.addEventListener("resize", () => {
    if( document.body.clientWidth<768){
        toggle.classList.add("showToggle");
        
    }else{
        toggle.classList.remove("showToggle");
        
    }
    // navigationList.classList.add(".showToggle");
})