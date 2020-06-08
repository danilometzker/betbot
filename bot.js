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
      
      $('<div/>',{
        id: 'betbot_container'
      }).css({
        "position": "fixed",
        "top": "0px",
        "right": "260px",
        "background": "#fff",
        "width": "300px",
        "padding": "10px",
        "border-bottom-left-radius": "4px",
        "border-bottom-right-radius": "4px",
        "color": "rgba(0,0,0,0.7)",
        "z-index": "999"
      }).html("<h2>BetBot</h2>").appendTo('body');
      
      $('<div/>',{
        id: 'betbot_time'
      }).appendTo('#betbot_container');
      
      $('<div/>',{
        id: 'betbot_corners'
      }).appendTo('#betbot_container');
      
      $('<div/>',{
        id: 'betbot_corners_allowed'
      }).appendTo('#betbot_container');
      
      $('<div/>',{
        id: 'betbot_time_to_bet'
      }).appendTo('#betbot_container');
      
      // select 
      $(".lv-ButtonBar_MatchLive").click();
      
      setInterval(function(){
        var gameTime = $("div.ipe-SoccerHeaderLayout_ExtraData").text();
        
        var corners = $("div.ipe-SoccerGridContainer").find("div.ipe-SoccerGridColumn_ICorner div.ipe-SoccerGridCell");
        var totalCorners = parseInt(corners.eq(0).text()) + parseInt(corners.eq(1).text());
        
        $("#betbot_time").html("<b>Tempo de jogo:</b> "+gameTime);
        $("#betbot_corners").html("<b>Total de escanteios:</b> "+totalCorners);
        
        var sim = "<span style='color:green'>Sim</span>";
        var nao = "<span style='color:red'>Não</span>";
        
        $(".ipe-GridHeaderTabLink").each(function(index){
          if($(this).text() == "Escanteios/Cartões"){
            $("#betbot_corners_allowed").html("Possui mercado de escanteio: "+sim);
          }else{
            $("#betbot_corners_allowed").html("Possui mercado de escanteio: "+nao);
          }
        });
        
        if(parseInt(gameTime.split(":")[0]) > 80){
          $("#betbot_time_to_bet").html("Momento certo de apostar: "+sim);
        }else{
          $("#betbot_time_to_bet").html("Momento certo de apostar: "+nao);
        }
        
        
      }, 1000);
      
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
