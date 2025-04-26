const svgHamburgerOpen = `
    <svg width="35" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Menu">
                    <rect id="Rectangle" fill-rule="nonzero" x="0" y="0" width="24" height="24" ></rect>
                    <line x1="5" y1="7" x2="19" y2="7" id="Path" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" ></line>
                    <line x1="5" y1="17" x2="19" y2="17" id="Path" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" ></line>
                    <line x1="5" y1="12" x2="19" y2="12" id="Path" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" ></line>
                </g>
            </g>
        </g>
    </svg>
`;

const svgHamburgerClose = `
    <svg width="35" class="navbar__hamburger-btn--close" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" stroke="#FFFFFF">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <path fill="none" stroke="#FFFFFF" stroke-width="2" d="M7,7 L17,17 M7,17 L17,7"></path>
        </g>
    </svg>
`;

export const setupToggleNavbar = (element: HTMLAnchorElement): void => {
    const navbarRightPart = document.querySelector(
        ".navbar__right",
    ) as HTMLDivElement;

    const listNavigatorBtn = navbarRightPart.querySelectorAll(
        ".nav__btn",
    ) as NodeListOf<HTMLDivElement>;

    const isNavbarOpen = (): boolean => {
        return navbarRightPart.classList.contains("navbar__right--open");
    };

    const closeNavbar = () => {
        navbarRightPart.classList.remove("navbar__right--open");
        element.innerHTML = svgHamburgerOpen;
    };

    const openNavbar = () => {
        navbarRightPart.classList.add("navbar__right--open");
        element.innerHTML = svgHamburgerClose;
    };

    const toggleNavbar = () => {
        if (isNavbarOpen()) {
            closeNavbar();
        } else {
            openNavbar();
        }
    };

    element.addEventListener("click", toggleNavbar);
    closeNavbar();

    listNavigatorBtn.forEach((navBtn) => {
        navBtn.addEventListener("click", () => {
            if (isNavbarOpen()) {
                closeNavbar();
            }
        });
    });
};
