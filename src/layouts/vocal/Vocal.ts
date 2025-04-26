import { vocalData } from "@rdata/vocalData";
import { setupMusic } from "./setupMusic";

import "./Vocal.scss";

const vocalImageClass = "vocal__image";
const vocalSongClass = "vocal__song";

const vocalItemPart = vocalData.items
    .map((vocalItem) => {
        let itemContent = "";
        if (vocalItem.image) {
            itemContent = `
                <img class="${vocalImageClass}" src="${vocalItem.image}" alt="${vocalItem.alt}" />
                <audio class="${vocalSongClass}" src="${vocalItem.audio}"></audio>
            `;
        }

        return `
            <div class="content__item">${itemContent}</div>
        `;
    })
    .join("");

document.querySelector("#vocal")!.innerHTML = `
    <div class="vocal__title-container">
        <h2 class="vocal__title">${vocalData.title}</h2>
        <h4 class="vocal__subtitle">${vocalData.subtitle}</h4>
    </div>
    <div class="vocal__content">
        <div class="content__container">${vocalItemPart}</div>
    </div>
`;

setupMusic(vocalImageClass, vocalSongClass);
