import Calculator from "./Calculator";

export default class DivisonCalculator extends Calculator {
    public calculate(number1: number, number2: number): number {
        return number1 / number2;
    }
}
