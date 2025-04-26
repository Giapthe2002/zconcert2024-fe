import "./Popup.scss";

export default class Popup {
    private containerElement: HTMLDivElement;
    private wrapperElement: HTMLDivElement;
    private closeButtonElement: HTMLSpanElement;

    private readonly containerClass: string = "popup__container";
    private readonly wrapperClass: string = "popup__wrapper";
    private readonly closeButtonClass: string = "popup__close-button";
    private readonly popupShowingClass: string = "popup--show";

    private removeOnClose: boolean = false;

    public afterClose: () => void = () => {};

    private constructor(contentElement: HTMLElement | string) {
        if (!contentElement) throw new Error("Not found content element param");

        this.containerElement = this.createContainer();
        this.wrapperElement = this.createWrapper();
        this.closeButtonElement = this.createCloseButton();

        this.replaceToDom(contentElement);
    }

    public get container(): HTMLDivElement {
        return this.containerElement;
    }

    public get wrapper(): HTMLDivElement {
        return this.wrapperElement;
    }

    public get closeButton(): HTMLSpanElement {
        return this.closeButtonElement;
    }

    private replaceToDom = (contentElement: HTMLElement | string): void => {
        if (typeof contentElement === "string") {
            this.wrapper.innerHTML = contentElement;
        } else {
            this.wrapper.appendChild(contentElement);
        }

        this.container.appendChild(this.closeButton);
        this.container.appendChild(this.wrapper);
    };

    private createContainer = (): HTMLDivElement => {
        const container: HTMLDivElement = document.createElement("div");
        container.classList.add(this.containerClass);
        return container;
    };

    private createWrapper = (): HTMLDivElement => {
        const wrapper: HTMLDivElement = document.createElement("div");
        wrapper.classList.add(this.wrapperClass);
        return wrapper;
    };

    private createCloseButton = (): HTMLSpanElement => {
        const button: HTMLSpanElement = document.createElement("span");
        button.classList.add(this.closeButtonClass);
        button.innerHTML = "&times;";

        button.addEventListener("click", () => this.hidePopup());

        return button;
    };

    private showPopup = (): void => {
        if (!document.body.contains(this.container))
            document.body.appendChild(this.container);

        this.container.classList.add(this.popupShowingClass);
        this.disableWindowScrollEvent();
    };

    private hidePopup = (): void => {
        if (this.removeOnClose) document.body.removeChild(this.container);

        this.container.classList.remove(this.popupShowingClass);
        this.enableWindowScrollEvent();
        this.afterClose();
    };

    private disableWindowScrollEvent = (): void => {
        const { body } = document;
        body.style.overflow = "hidden";
    };

    private enableWindowScrollEvent = (): void => {
        const { body } = document;
        body.style.overflow = "auto";
    };

    public show = (): void => {
        if (this.isPopupShowing()) return;
        this.showPopup();
    };

    public hide = (): void => {
        if (!this.isPopupShowing()) return;
        this.hidePopup();
    };

    private isPopupShowing = (): boolean => {
        return this.container.classList.contains(this.popupShowingClass);
    };

    private hideCloseButton = (): void => {
        this.closeButtonElement.style.display = "none";
    };

    static PopupBuilder = class PopupBuilder {
        private popup: Popup;

        constructor(contentElement: HTMLElement | string) {
            this.popup = new Popup(contentElement);
        }

        public setRemoveOnClose = (): PopupBuilder => {
            this.popup.removeOnClose = true;

            return this;
        };

        public insertToDOMWhenInit = (): PopupBuilder => {
            document.body.appendChild(this.popup.container);
            return this;
        };

        public showOnWebLoad = (): PopupBuilder => {
            window.addEventListener("load", () => {
                this.popup.show();
            });

            return this;
        };

        public closeOnClickOutside = (): PopupBuilder => {
            const popupContainer = this.popup.container;

            window.addEventListener("click", ({ target }: Event) => {
                if (popupContainer === target) {
                    this.popup.hide();
                }
            });

            return this;
        };

        public hideCloseButton = (): PopupBuilder => {
            this.popup.hideCloseButton();

            return this;
        };

        public build = (): Popup => {
            return this.popup;
        };
    };
}
