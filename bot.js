if(typeof jQuery == "function"){
  var e = document.createElement('script');
  e.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js";
  e.type = 'text/javascript';
  e.onload = function() {
    var $ = window.jQuery;
    
    $("body").css("opacity", 0.4);
  };
  document.getElementsByTagName('body')[0].appendChild(e);
}


