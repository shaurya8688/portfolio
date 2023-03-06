var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("mail-id").style.opacity = "1";
    document.querySelector(".vertical-line").style.opacity = "1";
} else {
    document.getElementById("navbar").style.top = "-100px";
    document.getElementById("mail-id").style.opacity = "0";
    document.querySelector(".vertical-line").style.opacity = "0";
  }
  prevScrollpos = currentScrollPos;
}