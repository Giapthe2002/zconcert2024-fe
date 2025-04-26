import { AreaShape } from "@tenums/AreaShape";
import { TicketType } from "@tenums/TicketType";
import { MapData } from "@ttypes/MapData";

import mapImage from "/images/map-clickable.png";

export const mapData: MapData = {
    image: mapImage,
    imageAlt: "Stage map's image",
    usemap: "stage-diagram",
    mapAreas: [
        {
            ticketType: TicketType.WAVY,
            shape: AreaShape.Rect,
            coords: "1103 769 1501 2368",
            alt: "Stage of Wavy",
        },
        {
            ticketType: TicketType.WAVY,
            shape: AreaShape.Rect,
            coords: "1531 1506 1991 2367",
            alt: "Stage of Wavy",
        },
        {
            ticketType: TicketType.WAVY,
            shape: AreaShape.Rect,
            coords: "1939 769 2325 2316",
            alt: "Stage of Wavy",
        },
        {
            ticketType: TicketType.SANDYA,
            shape: AreaShape.Rect,
            coords: "6 1011 564 1675",
            alt: "Stage of Sandy A",
        },
        {
            ticketType: TicketType.SANDYB,
            shape: AreaShape.Rect,
            coords: "6 1761 974 2365",
            alt: "Stage of Sandy B",
        },
        {
            ticketType: TicketType.SANDYC,
            shape: AreaShape.Rect,
            coords: "1090 2554 2392 2829",
            alt: "Stage of Sandy C",
        },
        {
            ticketType: TicketType.SANDYD,
            shape: AreaShape.Rect,
            coords: "3463 1761 2494 2378",
            alt: "Stage of Sandy D",
        },
    ],
};
