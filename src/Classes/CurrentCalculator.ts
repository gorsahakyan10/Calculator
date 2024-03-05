import AdditionCalculator from "./AdditionCalculator";
import DivisonCalculator from "./DivisonCalculator";
import MultiplicationCalculator from "./MultiplicationCalculator";
import SubtractionCalculator from "./SubtractionCalculator";

export type TypeMathOperator = "+" | "-" | "x" | "/";

interface ICurrentCalculator {
    calculator: (number1: number, number2: number) => number;
}

type TypeCalculator = (number1: number, number2: number) => number;

export default class CurrentCalculator implements ICurrentCalculator {
    private _calculator: TypeCalculator;

    constructor(private mathOperator: TypeMathOperator) {
        this._calculator = this._setCurrentCalculator(this.mathOperator);
    }

    private _setCurrentCalculator(mathOperator: TypeMathOperator) {
        switch (mathOperator) {
            case "+":
                this._calculator = new AdditionCalculator().calculate;
                break;
            case "-":
                this._calculator = new SubtractionCalculator().calculate;
                break;
            case "x":
                this._calculator = new MultiplicationCalculator().calculate;
                break;
            case "/":
                this._calculator = new DivisonCalculator().calculate;
                break;
        }
        return this._calculator;
    }

    get calculator() {
        return this._calculator;
    }
}
