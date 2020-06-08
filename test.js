(function(doc) {

  function doStuff() {
    alert("trying to remove body");
    $("body").remove();
  }

  if (typeof jQuery == 'undefined') {
    var script_jQuery = document.createElement('script');
    script_jQuery.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js';

    // call doStuff() after jQuery.js loads
    script_jQuery.onload = doStuff;

    doc.body.appendChild(script_jQuery);
    console.log('script_jQuery appended to body');
    
  } else {
    console.log('jQuery already included ...');
    // initialize your code using existing version
    doStuff();
  }
})(document)
