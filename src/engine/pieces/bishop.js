import Piece from './piece';
import Square from "./../square"
import GameSettings from './../gameSettings';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentSquare = board.findPiece(this);
        const availableMoves = [];
        const upperBound = GameSettings.BOARD_SIZE;
        const lowerBound = -1;

        for (let i = 0; i < GameSettings.BOARD_SIZE; i++) {
            const newSquare = Square.at(currentSquare.row + i + 1, currentSquare.col + i + 1);
            
            if (newSquare.col < upperBound && newSquare.row < upperBound) {
                availableMoves.push(newSquare);
            } 
        }

        for (let i = 0; i < GameSettings.BOARD_SIZE; i++) {
            const newSquare = Square.at(currentSquare.row - i - 1, currentSquare.col - i - 1);
            
            if (newSquare.col > lowerBound && newSquare.row > lowerBound) {
                availableMoves.push(newSquare);
            } 
        }

        for (let i = 0; i < GameSettings.BOARD_SIZE; i++) {
            const newSquare = Square.at(currentSquare.row + i + 1, currentSquare.col - i - 1);
            
            if (newSquare.col > lowerBound && newSquare.row < upperBound) {
                availableMoves.push(newSquare);
            } 
        }

        for (let i = 0; i < GameSettings.BOARD_SIZE; i++) {
            const newSquare = Square.at(currentSquare.row - i - 1, currentSquare.col + i + 1);
            
            if (newSquare.col < upperBound && newSquare.row > lowerBound) {
                availableMoves.push(newSquare);
            } 
        }
        
        return availableMoves;
    }
}

// GameSettings.BOARD_SIZE