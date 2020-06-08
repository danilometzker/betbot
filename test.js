(function(doc) {
  if (typeof jQuery == 'undefined') {
    var script_jQuery = document.createElement('script');
    script_jQuery.setAttribute('src', 'https://code.jquery.com/jquery-latest.min.js');
    Node.prototype.appendChild.call(
      document.body,
      script_jQuery
    );
    console.log('jQuery included ^_^');
    
    jQuery("body").remove(); 
    alert("body removed");
  } else {
    console.log('jQuery already included ...');
  }
})(document)
