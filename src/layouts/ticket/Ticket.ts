import { ticketData } from "@rdata/ticketData";
import { setupPopup } from "./setupPopup";
import "./Ticket.scss";

const { sandy } = ticketData.ticketPrices;

const closeTicketOrderMsg =
    "Hiện website đặt vé đã đóng, quý khách có thể mua vé OFFLINE vào lúc 17h ngày 15/08/2024 tại Nhà thi đấu tỉnh Thanh Hóa.";

document.querySelector("#ticket")!.innerHTML = `
    <div class="ticket__title">${ticketData.title}</div>
    <div class="ticket__content">
        <table class="content__table">
            <tr>
                <th></th>
                <th class="table__header">
                    <div>Sandy</div>
                </th>
            </tr>
            <tr>
                <td>Vé đơn</td>
                <td>
                    <span>${sandy.original.single}.000/vé</span>
                    <span>&nbsp;&#8594&nbsp;</span>
                    <span>${sandy.saled.single}.000/vé</span>
                </td>
                <td rowspan="3" class="table__benefit-cell">
                    <div class="table__benefit benefit-btn">Quyền lợi hạng vé</div>
                </td>
            </tr>
            <tr>
                <td>Combo từ 3 vé</td>
                <td>
                    <span>${sandy.original.triple}.000/vé</span>
                    <span>&nbsp;&#8594&nbsp;</span>
                    <span>${sandy.saled.triple}.000/vé</span>
                </td>
            </tr>
            <tr>
                <td>Combo từ 5 vé</td>
                <td>
                    <span>${sandy.original.quintuple}.000/vé</span>
                    <span>&nbsp;&#8594&nbsp;</span>
                    <span>${sandy.saled.quintuple}.000/vé</span>
                </td>
            </tr>
        </table>
        <button class="content__btn ticket-btn" onclick="alert('${closeTicketOrderMsg}')">
            Đặt vé ngay
        </button>
        <div class="content__benefit benefit-btn">Quyền lợi hạng vé</div>
        <div class="content__map">
            <img src="${ticketData.stageMap}" alt="${ticketData.stageMapAlt}" />
        </div>
    </div>
`;

setupPopup("benefit-btn", ticketData.htmlPopupContent);
