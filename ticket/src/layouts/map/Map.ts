import { generalData } from "@tdata/generalData";
import { mapData } from "@tdata/mapData";
import { ImageMapResizer } from "@tutils/ImageMapResizer";

import "./Map.scss";

const soldOutTickets = generalData.soldOutType;

const mapClickableMap = mapData.mapAreas
    .map((area) => {
        const { ticketType, shape, coords, alt } = area;

        if (soldOutTickets.includes(ticketType)) return "";

        return `<area shape="${shape}" coords="${coords}" alt="${alt}" onclick="changeTicketQuantity('${ticketType}', true)" />`;
    })
    .join("");

document.querySelector("#map")!.innerHTML = `
    <div class="map__container">
        <img src="${mapData.image}" alt="${mapData.imageAlt}" usemap="#${mapData.usemap}" />
        <map id="stage-map" name="${mapData.usemap}">
            ${mapClickableMap}
        </map>
    </div>
`;

ImageMapResizer.setup(document.getElementById("stage-map") as HTMLMapElement);
