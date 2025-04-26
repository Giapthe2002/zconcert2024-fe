import { TicketData, TicketOrder, TicketPrices } from "@rtypes/TicketData";

import mapImage from "/images/map-preview.png";
import benefitImage from "/images/ticket-benefit.png";

const ORDER_TYPE: TicketOrder = TicketOrder.REGULAR;

const ticketPrices: TicketPrices = {
    // "pre-order": {
    //     wavy: {
    //         single: 359,
    //         triple: 349,
    //         quintuple: 329,
    //     },
    //     sandy: {
    //         single: 429,
    //         triple: 419,
    //         quintuple: 399,
    //     },
    // },
    regular: {
        wavy: {
            original: {
                single: 389,
                triple: 379,
                quintuple: 349,
            },
            saled: {
                single: 389,
                triple: 379,
                quintuple: 349,
            },
        },
        sandy: {
            original: {
                single: 469,
                triple: 459,
                quintuple: 429,
            },
            saled: {
                single: 409,
                triple: 399,
                quintuple: 379,
            },
        },
    },
};

const benefitPopupHtml = `
  <img src="${benefitImage}" alt="Benefit of ticket image" />
`;

export const ticketData: TicketData = {
    enabled: true,
    title: ORDER_TYPE,
    ticketPrices: ticketPrices[ORDER_TYPE],
    stageMap: mapImage,
    stageMapAlt: "Stage map's image",
    htmlPopupContent: benefitPopupHtml,
};
