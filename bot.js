(function(virtualdoc) {

  function initBot(){
    var teams = $("div.ipe-SoccerGridContainer").find("div.ipe-SoccerGridColumn div.ipe-SoccerGridCell");
    
    if(teams.length > 0){
      
      var team1 = teams.eq(0).text();
      var team2 = teams.eq(1).text();
    
      alert(team1+" vs "+team2);
      
    }else{
      alert("Entre em jogo de futebol para iniciar o bot.");
    }
    
  }

  if(typeof jQuery == 'undefined'){
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js';
    script.onload = initBot;
    virtualdoc.body.appendChild(script);
  }else{
    initBot();
  }
})(document)
