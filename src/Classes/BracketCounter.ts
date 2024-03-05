import Screen from "./Screen";

export default class BracketCounter {
    public readonly differenceCountBrackets: number;
    constructor() {
        const { countOpeningBrackets, countClosingBrackets } =
            this._bracketsCount();
            this.differenceCountBrackets =
            countOpeningBrackets - countClosingBrackets;
    }
    private _bracketsCount() {
        const { screen } = new Screen();
        let countOpeningBrackets = 0;
        let countClosingBrackets = 0;
        for (let i = 0; i < screen.innerHTML.length; i++) {
            if (screen.innerHTML[i] === "(") {
                countOpeningBrackets++;
            } else if (screen.innerHTML[i] === ")") {
                countClosingBrackets++;
            }
        }
        return { countOpeningBrackets, countClosingBrackets };
    }
}
