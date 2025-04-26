import { headerData } from "@rdata/navData";
import { setupToggleNavbar } from "./toggleNavbar";
import { setupDynamicHeader } from "./dynamicHeader";

import "./Header.scss";

const navigatorPart = headerData.navigator
    .map(
        (navItem) =>
            `<div class="nav__btn"><a href="#${navItem.to}">${navItem.text}</a></div>`,
    )
    .join("");

document.querySelector("#header")!.innerHTML = `
    <div class="header__background"></div>
    <nav id="navbar">
        <div class="navbar__left">
            <h2 class="navbar__text-logo">${headerData.title}</h2>
        </div>
        <div class="navbar__right">
            ${navigatorPart}
        </div>
        <a class="navbar__hamburger-btn" href="javascript:void(0);"></a>
    </nav>
`;

setupToggleNavbar(
    document.querySelector(".navbar__hamburger-btn")! as HTMLAnchorElement,
);

setupDynamicHeader();
