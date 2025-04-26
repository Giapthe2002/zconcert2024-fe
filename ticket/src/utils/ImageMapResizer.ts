enum DimensionEnum {
    WIDTH = "width",
    HEIGHT = "height",
}

export class ImageMapResizer {
    private readonly DEFAULT_DEBOUNCE_INTERVAL = 250;

    private mapElement: HTMLMapElement;
    private areasElement: HTMLAreaElement[];
    private cachedAreaCoordsArray: string[];
    private image: HTMLImageElement;
    private timer: NodeJS.Timeout | undefined;

    private constructor(mapElement: HTMLMapElement) {
        this.mapElement = mapElement;
        this.areasElement = Array.from(mapElement.getElementsByTagName("area"));
        this.cachedAreaCoordsArray = this.areasElement.map(this.getCoords);
        this.image =
            this.getImage(`#${this.mapElement.name}`) ||
            this.getImage(this.mapElement.name);
    }

    private getCoords = (areaElement: HTMLAreaElement): string => {
        return areaElement.coords.replace(/ *, */g, ",").replace(/ +/g, ",");
    };

    private getImage = (mapName: string): HTMLImageElement => {
        return document.querySelector(
            `img[usemap="${mapName}"]`,
        ) as HTMLImageElement;
    };

    private setupEventListeners = (): void => {
        this.image.addEventListener("load", this.resizeMap, false);
        window.addEventListener("focus", this.resizeMap, false);
        window.addEventListener("resize", () => this.debounce(), false);
        window.addEventListener("readystatechange", this.resizeMap, false);
        document.addEventListener("fullscreenchange", this.resizeMap, false);
    };

    private resizeMap = (): void => {
        let scalingFactor = {
            width: this.image.width / this.image.naturalWidth,
            height: this.image.height / this.image.naturalHeight,
        };

        let padding = {
            width: parseInt(
                window
                    .getComputedStyle(this.image, null)
                    .getPropertyValue("padding-left"),
            ),
            height: parseInt(
                window
                    .getComputedStyle(this.image, null)
                    .getPropertyValue("padding-top"),
            ),
        };

        const resizeAreaTag = (
            cachedAreaCoords: string,
            index: number,
        ): void => {
            let isWidth = 0;

            const scale = (coord: string): number => {
                let dimension: DimensionEnum =
                    1 === (isWidth = 1 - isWidth)
                        ? DimensionEnum.WIDTH
                        : DimensionEnum.HEIGHT;
                return (
                    padding[dimension] +
                    Math.floor(Number(coord) * scalingFactor[dimension])
                );
            };

            this.areasElement[index].coords = cachedAreaCoords
                .split(",")
                .map(scale)
                .join(",");
        };

        this.cachedAreaCoordsArray.forEach(resizeAreaTag);
    };

    private debounce = (
        debounceInterval: number = this.DEFAULT_DEBOUNCE_INTERVAL,
    ) => {
        clearTimeout(this.timer);
        this.timer = setTimeout(this.debounce, debounceInterval);
    };

    public setup = () => {
        this.setupEventListeners();

        if (
            this.image.width !== this.image.naturalWidth ||
            this.image.height !== this.image.naturalHeight
        ) {
            this.resizeMap();
        }
    };

    public static setup = (mapElement: HTMLMapElement) => {
        const imr: ImageMapResizer = new ImageMapResizer(mapElement);
        imr.setup();
    };
}
