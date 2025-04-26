import { storyData } from "@rdata/storyData";
import { setupPopup } from "./setupPopup";

import "./Story.scss";

const storyItemPart = storyData.items
    .map(
        (storyItem) => `
            <div class="content__item">
                <h5 class="item__title">${storyItem.title}</h5>
                <div class="item__content" id="js-storyItem${storyItem.id}">
                    <img src="${storyItem.image}" alt="${storyItem.alt}" />
                </div>
            </div>
        `,
    )
    .join("");

document.querySelector("#story")!.innerHTML = `
  <div class="story__title">${storyData.title}</div>
  <div class="story__content">
    <div class="content__container">${storyItemPart}</div>
  </div>
`;

setupPopup(storyData.items);
