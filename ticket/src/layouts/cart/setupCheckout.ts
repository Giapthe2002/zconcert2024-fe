import { checkoutPopup } from "./popup/createCheckoutPopup";

export const setupCheckoutPopup = (buttonElement: HTMLButtonElement) => {
    buttonElement.addEventListener("click", () => {
        checkoutPopup.show();
    });
};
