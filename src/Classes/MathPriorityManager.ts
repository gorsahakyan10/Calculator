import UniversalCalculator from "./UniversalCalculator";

interface IMathPriorityManager {
    calculateByPriority(matches: string[]):void;
}

export default class MathPriorityManager implements IMathPriorityManager {
    private _calculate = new UniversalCalculator().calculate;

    calculateByPriority(matches: string[]){
       matches.forEach((match) => {
          debugger
          this._calculateMultiplicationAndDivision(match);
          this._calculateAdditionAndSubstraction(match);
       })
    }

    private _calculateMultiplicationAndDivision(match: string) {
        while (true) {
            debugger
            let matches = match.match(new RegExp(/-?\d*\.?\d+[\x\/]-?\d*\.?\d+/));
            console.log(matches, "sdsdf"); 
            if (!matches) {
                return ""
            }
            match = match.replace(
                matches[0],
                this._calculate(matches[0]) as string
            );
        }
    }

    private _calculateAdditionAndSubstraction(match: string) {
        while (true) {
            debugger;
            let matches = match.match(
                new RegExp(/-?\d*\.?\d+[\-\+]-?\d*\.?\d+/)
            );
            if (!matches) {
                return "";
            }
            match = match.replace(matches[0], this._calculate(matches[0]) as string);
        }
    }
}
