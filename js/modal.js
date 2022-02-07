var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var blr = document.getElementsByClassName("wrapper")[0];
var modal_blur = document.getElementsByClassName("modal_window")[0];
var close_btn = document.getElementsByClassName("button_close")[0];
btn.onclick = function() {
    modal.style.display = "block";
    blr.style.filter = "blur(13px)";
}
close_btn.onclick = function() {
        modal.style.display = "none";
        blr.style.filter = "blur(0px)";

    }
    // window.onclick = function(event) {
    //     if (event.target != modal) {
    //         modal.style.display = "none";
    //         blr.style.filter = "blur(0px)";
    //     }

// }