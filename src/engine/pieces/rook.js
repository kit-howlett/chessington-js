import Piece from './piece';
import Square from "./../square"
import GameSettings from './../gameSettings';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentSquare = board.findPiece(this);
        const availableMoves = [];

        for (let i = 0; i < GameSettings.BOARD_SIZE; i++) {
            const availableMove = Square.at(currentSquare.row, i);
            
            if (!availableMove.equals(currentSquare)) {
                availableMoves.push(availableMove);
            }
        }
        
        for (let i = 0; i < GameSettings.BOARD_SIZE; i++) {
            const availableMove = Square.at(i, currentSquare.col);
            
            if (!availableMove.equals(currentSquare)) {
                availableMoves.push(availableMove);
            }
        }

        return availableMoves;
    }
}
