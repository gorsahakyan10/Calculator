import Screen from "./Screen";

export default class ScreenEraser{
    private _deleteBtn: HTMLElement = document.getElementById("DeleteBtn") as HTMLElement;
    private _clearBtn: HTMLElement = document.getElementById("ClearBtn") as HTMLElement;

    constructor(){
       this._deleteBtn.onclick = this._deleteSymbol;
       this._clearBtn.onclick = this._clear;
    }
    
    private _deleteSymbol(): void {
        const {screen} = new Screen();
        screen.textContent = screen.innerHTML.substring(
            0,
            screen.innerHTML.length - 1
        );
    }
    
    private _clear(): void {
        const {screen} = new Screen();
        screen.textContent = "";       
    }
}