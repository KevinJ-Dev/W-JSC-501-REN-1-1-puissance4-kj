class Connect4{
    selector;
    constructor(selector){
        this.X = 7;
        this.Y = 6;
        this.player = 'red';
        this.selector = selector;
        this.isGameOver = false;
        this.playerMove = function() {};
        this.drawGame();
        this.setupEventListeners();
    }

    //Game
    drawGame(){
        const $board = $(this.selector);
        $board.empty();
        this.isGameOver = false;
        this.player = 'red';
        for (let y = 0; y < this.Y; y++) {
          const $y = $('<div>').addClass('row');
          for (let x = 0; x < this.X; x++) {
            const $x = $('<div>').addClass('col empty').attr('data-col', x).attr('data-row', y);
            $y.append($x);
          }
          $board.append($y);
        }
      }
    
      setupEventListeners(){
        const $board = $(this.selector);
        const that = this;
        function findLastEmptyCell(x) {
          const cells = $(`.col[data-col='${x}']`);
          for (let i = cells.length - 1; i >= 0; i--){
            const $cell = $(cells[i]);
            if ($cell.hasClass('empty')){
              return $cell;
            }
          }
          return null;
        }
    
        $board.on('mouseenter', '.col.empty', function(){
          if (that.isGameOver) return;
          const x = $(this).data('col');
          const $lastEmptyCell = findLastEmptyCell(x);
          $lastEmptyCell.addClass(`next-${that.player}`);
        });
    
        $board.on('mouseleave', '.col', function(){
          $('.col').removeClass(`next-${that.player}`);
        });
    
        $board.on('click', '.col.empty', function(){
          if (that.isGameOver) return;
          const x = $(this).data('col');
          const $lastEmptyCell = findLastEmptyCell(x);
          $lastEmptyCell.removeClass(`empty next-${that.player}`);
          $lastEmptyCell.addClass(that.player);
          $lastEmptyCell.data('player', that.player);
    
          const winner = that.checkForWinner(
            $lastEmptyCell.data('row'), 
            $lastEmptyCell.data('col')
          )
          if (winner){
            that.isGameOver = true;
            alert(`Le joueur ${that.player} a gagné !`);
            $('.col.empty').removeClass('empty');
            return;
          }
    
          that.player = (that.player === 'red ') ? 'yellow ' : 'red ';
          that.playerMove();
          $(this).trigger('mouseenter');
        });
      }
    
      checkForWinner(y, x){
        const that = this;
    
        function $getCell(i, j){
          return $(`.col[data-row='${i}'][data-col='${j}']`);
        }
    
        function checkDirection(direction){
          let total = 0;
          let i = y + direction.i;
          let j = x + direction.j;
          let $next = $getCell(i, j);
          while (i >= 0 &&
            i < that.Y &&
            j >= 0 &&
            j < that.X && 
            $next.data('player') === that.player
          ){
            total++;
            i += direction.i;
            j += direction.j;
            $next = $getCell(i, j);
          }
          return total;
        }
    
        function checkWin(directionA, directionB){
          const total = 1 +
            checkDirection(directionA) +
            checkDirection(directionB);
          if (total >= 4){
            return that.player;
          }else{
            return null;
          }
        }
    
        function checkDiagonal1(){
          return checkWin({i: 1, j: -1}, {i: 1, j: 1});
        }
    
        function checkDiagonal2(){
          return checkWin({i: 1, j: 1}, {i: -1, j: -1});
        }
    
        function checkVerticals(){
          return checkWin({i: -1, j: 0}, {i: 1, j: 0});
        }
    
        function checkHorizontals(){
          return checkWin({i: 0, j: -1}, {i: 0, j: 1});
        }
    
        return checkVerticals() ||
          checkHorizontals() ||
          checkDiagonal1() ||
          checkDiagonal2();
      }
    
      restart (){
        this.drawGame();
        this.playerMove();
      }
    }
    // playCol(col){
    //     console.log(col);
    // }
