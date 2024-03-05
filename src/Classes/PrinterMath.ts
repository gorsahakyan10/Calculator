import Printer from "./Printer";
import Screen from "./Screen";

export default class PrinterMath extends Printer {
    constructor() {
        super();
        const btnList = document.querySelector("ul") as HTMLElement;
        btnList.onclick = (e) => {
           this.print("", e)
        };
    }
    print(text: string, e: MouseEvent): void {
        if (!(e.target instanceof HTMLButtonElement)) {
            return;
        } else {
            if (
                e.target.innerHTML === "⌫" ||
                e.target.innerHTML === "CE" ||
                e.target.innerHTML === "="
            ) {
                return;
            }
            new Screen().screen.innerHTML += e.target.innerHTML;
        }
    }
}
