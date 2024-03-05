import CurrentCalculator from "./CurrentCalculator";
import FinderMathOperator from "./FinderMathOperator";
import FinderOperands from "./FinderOperands";
import Screen from "./Screen";

interface IUniversalCalculator {
    calculate(match: string): string;
}

export default class UniversalCalculator implements IUniversalCalculator {
    public calculate(match: string): string {
        const { screen } = new Screen();
        if (!match) {
            return "";
        }
        let { mathOperator } = new FinderMathOperator().find(match);
        const { firstOperand, lastOperand } = new FinderOperands().find(match);
        let result: string = "";
        result =
            "" +
            new CurrentCalculator(mathOperator).calculator(
                firstOperand,
                lastOperand
            );
        screen.innerHTML = screen.innerHTML.replace(match, result);
        screen.innerHTML = screen.innerHTML.replaceAll(/\(-?\d*\.?\d+\)/g, result);
        return result;
    }
}
