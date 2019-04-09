function toogle() {
    var x = document.getElementById("toogleDIV");
    
    if (x.style.display === "none") {
        x.style.display = "block";
        
    } else {
        x.style.display = "none";
    }
    setTimeout(function () {
        $('#toogleDIV').fadeOut('fast');
    }, 5000); // <-- time in milliseconds
}



// this function is not in use
function toggle_visibility(id) {
    var e = document.getElementById(id);
    e.style.display = ((e.style.display != 'none') ? 'none' : 'block');
}