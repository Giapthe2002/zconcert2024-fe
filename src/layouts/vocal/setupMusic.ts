export const setupMusic = (imageClass: string, songClass: string) => {
    const imagesElement: NodeListOf<HTMLImageElement> =
        document.querySelectorAll(`.${imageClass}`);
    const songsElement: NodeListOf<HTMLAudioElement> =
        document.querySelectorAll(`.${songClass}`);

    let playingIndex = -1;

    const playMusic = async (imageElement: HTMLImageElement, index: number) => {
        // Pause all music before playing new music
        pauseAllMusic();

        await songsElement[index].play();
        playingIndex = index;

        imageElement.classList.add(`${imageClass}--playing`);
    };

    const pauseAllMusic = () => {
        imagesElement.forEach((imageElement: HTMLImageElement, index: number) =>
            pauseMusic(imageElement, index),
        );
    };

    const pauseMusic = (imageElement: HTMLImageElement, index: number) => {
        songsElement[index].pause();
        songsElement[index].currentTime = 0;
        playingIndex = -1;

        imageElement.classList.remove(`${imageClass}--playing`);
    };

    imagesElement.forEach((imageElement: HTMLImageElement, index: number) => {
        imageElement.addEventListener("mouseover", async () => {
            await playMusic(imageElement, index);
        });

        imageElement.addEventListener("touchstart", async () => {
            await playMusic(imageElement, index);
        });

        imageElement.addEventListener("mouseout", () => {
            pauseMusic(imageElement, index);
        });
    });

    window.addEventListener("touchstart", (event: TouchEvent) => {
        const target = event.target as HTMLElement;

        if (target.classList.contains(imageClass)) return;

        if (playingIndex === -1) return;

        pauseMusic(imagesElement[playingIndex], playingIndex);
    });
};
