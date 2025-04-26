import { StoryItem } from "@rtypes/StoryData";

import Popup from "@rsrc/utils/popup/Popup";

export const setupPopup = (items: StoryItem[]) => {
    items.forEach((storyItem) => {
        const imageWrapperElement = document.getElementById(
            `js-storyItem${storyItem.id}`,
        );

        const popup = new Popup.PopupBuilder(storyItem.htmlPopupContent)
            .closeOnClickOutside()
            .setRemoveOnClose()
            .build();

        popup.wrapper.classList.add("story__popup-wrapper");

        imageWrapperElement?.addEventListener("click", () => {
            popup.show();
        });
    });
};
