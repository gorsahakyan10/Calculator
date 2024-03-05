import BracketCounter from "./BracketCounter";
import Screen from "./Screen";

export default class BracketCloser{
    constructor(){
       this._closeBrackets();
    }
    private _closeBrackets() {
        const { screen } = new Screen();
        const { differenceCountBrackets } = new BracketCounter();
        screen.innerHTML += ")".repeat(differenceCountBrackets);
    }
}
