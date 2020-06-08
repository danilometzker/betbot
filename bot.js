(function(virtualdoc) {

  function initBot(){    
    var teams = $("div.ipe-SoccerGridContainer").find("div.ipe-SoccerGridColumn div.ipe-SoccerGridCell");
    
    if(teams.length > 0){
      
      var goals = $("div.ipe-SoccerGridContainer").find("div.ipe-SoccerGridColumn_IGoal div.ipe-SoccerGridCell ");
      
      var team1 = teams.eq(0).text();
      var team2 = teams.eq(1).text();
      
      var team1Goals = goals.eq(0).text();
      var team2Goals = goals.eq(1).text();

      swal({
        title: "Jogo localizado",
        text: team1+"("+team1Goals+") vs ("+team2Goals+")"+team2,
        icon: "success",
      });
      
    }else{
      swal({
        title: "Erro",
        text: "O BetBot só pode ser inicializado em uma página de jogo de futebol.",
        icon: "error",
      });
      
    }
    
  }

  function loadSwal(){
    var script = document.createElement('script');
    script.src = 'https://unpkg.com/sweetalert/dist/sweetalert.min.js';
    script.onload = initBot;
    virtualdoc.body.appendChild(script);
     
    var style = document.createElement('style');
    style.innerHTML(".swal-modal {font-family:sans-serif; }");
    virtualdoc.body.appendChild(style);
  }

  if(typeof jQuery == 'undefined'){
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js';
    script.onload = loadSwal;
    virtualdoc.body.appendChild(script);
  }else{
    loadSwal();
  }
})(document)
