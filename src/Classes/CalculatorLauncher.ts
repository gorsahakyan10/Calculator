import BracketCloser from "./BracketCloser";
import CalculatorPriorityManager from "./CalculatorPriorityManager";
import PrinterMath from "./PrinterMath";
import ScreenEraser from "./ScreenEraser";

export default class CalculatorLauncher {
    constructor() {
        new PrinterMath();
        new ScreenEraser();
        (document.getElementById("Equal") as HTMLElement).onclick =
            function () {
                new BracketCloser();
                const {
                    calculateMathInsideBrackets,
                    calculateMathOutsideBrackets,
                } = new CalculatorPriorityManager();

                calculateMathInsideBrackets();
                calculateMathOutsideBrackets();
            };
    }
}
