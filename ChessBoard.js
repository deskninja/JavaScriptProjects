//create a chessboard of a variable size using " " and "#" characters
const size = 12;
let board = "";
for(let row = 0; row < size; row++){
    if(row % 2 == 0){
        for(var column = 0; column < size; column++){
            if(column % 2 == 0){
                board += "#";
            }
            else{
                board += " ";
            }
        }
    }
    else {
        for (var column = 0; column < size; column++) {
            if (column % 2 == 0) {
                board += " ";
            } else {
                board += "#";
            }
        }
    }
    board += "\n";
}
console.log(board);