export const setupDynamicHeader = () => {
    const headerBackgroundElement = document.querySelector(
        ".header__background",
    );

    window.addEventListener("scroll", () => {
        if (window.innerWidth > 769) return;

        if (window.scrollY !== 0) {
            headerBackgroundElement!.classList.add(
                "header__background--effect",
            );
        } else {
            headerBackgroundElement!.classList.remove(
                "header__background--effect",
            );
        }
    });
};
