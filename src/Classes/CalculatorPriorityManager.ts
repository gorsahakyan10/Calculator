import MathPriorityManager from "./MathPriorityManager";
import Screen from "./Screen";

interface ICalculatorPriorityManager {
    calculateMathInsideBrackets(): void;
    calculateMathOutsideBrackets(): void;
}

export default class CalculatorPriorityManager
    implements ICalculatorPriorityManager
{
    constructor() {
        this.calculateMathInsideBrackets =
            this.calculateMathInsideBrackets.bind(this);
        this.calculateMathOutsideBrackets =
            this.calculateMathOutsideBrackets.bind(this);
    }

    public calculateMathInsideBrackets() {
        const { screen } = new Screen();
        if (
            !(screen.innerHTML.includes("(") && screen.innerHTML.includes(")"))
        ) {
            return;
        }
        let matches = screen.innerHTML.match(
            new RegExp(/\((-?\d*\.?\d+[\x\/\-\+]?)+\)/g)
        );
        if (!matches) {
            return;
        }

        new MathPriorityManager().calculateByPriority(matches);

        this.calculateMathInsideBrackets();
    }

    public calculateMathOutsideBrackets() {
        debugger
        const { screen } = new Screen();
        if (+screen.innerHTML) {
            return;
        }

        let matches = screen.innerHTML.match(
            new RegExp(/(-?\d*\.?\d+[\x\/\-\+]?)+/)
        );
        if (!matches) {
            return;
        }

        new MathPriorityManager().calculateByPriority(matches);
        this.calculateMathOutsideBrackets();
    }
}
