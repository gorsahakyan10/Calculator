import Finder from "./Finder";
import FinderIndexMathOperator from "./FinderIndexMathOperator";

export default class FinderOperands extends Finder {
    private _firstOperand: number = -1;
    private _lastOperand: number = -1;

    find(match: string){
    let { indexOfMathOperator } = new FinderIndexMathOperator().find(match);
    this._firstOperand = +match.substring(0, indexOfMathOperator);
    this._lastOperand = +match.substring(indexOfMathOperator + 1);
        return this;
    }

    get firstOperand() {
        return this._firstOperand;
    }
    get lastOperand() {
        return this._lastOperand;
    }
}
