$(document).on('ready', function() {

});

var rowHeight = 16;
var columnHeight = 16;

function maskPuzzle(puzzleToMask, puzzleBlanks) {
  //make a basket to pick values out of
  var pickArray = [];
  for (var i = 0; i < rowHeight * columnHeight; i++) {
    pickArray.push(i);
  }

  for (var j = 0; j < puzzleBlanks; j++) {
    //generate a random number that hasn't been picked already
    var toRemoveIndex = Math.floor(Math.random() * pickArray.length);
    var cellNumber = pickArray.splice(toRemoveIndex, 1);
    var puzzleIndexRow = Math.floor(cellNumber / 16);
    var puzzleIndexColumn = cellNumber % 16;
    puzzleToMask[puzzleIndexRow][puzzleIndexColumn] = '*' + puzzleToMask[puzzleIndexRow][puzzleIndexColumn] ;
  }
  return puzzleToMask;
}
