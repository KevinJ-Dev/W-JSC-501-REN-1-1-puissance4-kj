$('#game').ready(function(){
    const connect4 = new Connect4('#game');

    connect4.playerMove = function(){
        $('#player').text(connect4.player);
      }

      $('#restart').click(function(){
        connect4.restart();
      })
});