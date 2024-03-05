import { TypeMathOperator } from "./CurrentCalculator";
import Finder from "./Finder";
import FinderIndexMathOperator from "./FinderIndexMathOperator";

export default class FinderMathOperator extends Finder {
    private _mathOperator: TypeMathOperator = "+";

    find(match: string) {
       const { indexOfMathOperator } = new FinderIndexMathOperator().find(match); 
       this._mathOperator = match[
          indexOfMathOperator
       ] as TypeMathOperator;
       return this;
    }

    get mathOperator(){
       return this._mathOperator;
    }
}
