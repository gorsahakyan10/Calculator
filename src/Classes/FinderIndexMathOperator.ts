import Finder from "./Finder";

export default class FinderIndexMathOperator extends Finder {
  private _indexOfMathOperator: number = -1;

  find(match: string){
    let isNegativeNumber = false;
    if(match[0] === "-"){
      match = match.replace("-", "");
      isNegativeNumber = true;
   }
   this._indexOfMathOperator = match.search(/[\+\-\x\/]/);
   if (isNegativeNumber){
      match = "-" + match;
      this._indexOfMathOperator++;
   }
    return this;
  }

  get indexOfMathOperator(){
     return this._indexOfMathOperator
  }
}
