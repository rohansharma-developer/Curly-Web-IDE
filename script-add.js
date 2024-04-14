var b = document.getElementsByTagName("div")[0];  

b.addEventListener("mousemove", function(event) {
  parallaxed(event);

});

function parallaxed(e) {
      var amountMovedX = (e.clientX * 0.2 / 8);
      var amountMovedY = (e.clientY * 0.2 / 8);
      var x = document.getElementsByClassName("parallaxed");
      var i;
      for (i = 0; i < x.length; i++) {
        x[i].style.transform='translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
      }
}