interface IScreen {
    get screen(): HTMLElement;
}

export default class Screen implements IScreen {
    private _screen = document.querySelector(".Screen") as HTMLElement;

    get screen() {
        return this._screen;
    }
}
