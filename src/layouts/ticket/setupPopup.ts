import Popup from "@rsrc/utils/popup/Popup";

export const setupPopup = (elementClass: string, htmlContent: string) => {
    const benefitBtnElements: NodeListOf<HTMLDivElement> =
        document.querySelectorAll(`.${elementClass}`);

    const popup = new Popup.PopupBuilder(htmlContent)
        .closeOnClickOutside()
        .setRemoveOnClose()
        .build();

    benefitBtnElements.forEach((btn) => {
        btn.addEventListener("click", () => {
            popup.show();
        });
    });
};
