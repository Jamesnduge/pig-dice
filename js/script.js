

  // User interface //

  $(document).ready(function() {

    $("button#start").click(function(event){
      
      $(".console").show();
      $(".menu").hide();

      var player1Name = $(".player1Name").val();
      $("#player1Name").text(player1Name);

      var player2Name = $(".player2Name").val();
      $("#player2Name").text(player2Name);

      player1.playerName=player1Name;
      player2.playerName=player2Name;

    });
