import { introData } from "@rdata/introData";
import "./Intro.scss";

const closeTicketOrderMsg =
    "Hiện website đặt vé đã đóng, quý khách có thể mua vé OFFLINE vào lúc 17h ngày 15/08/2024 tại Nhà thi đấu tỉnh Thanh Hóa.";

document.querySelector("#intro")!.innerHTML = `
    <div class="intro__container">
        <div class="intro__content">
            <div class="intro__content--text">
                <h1 class="intro__title">${introData.title}</h1>
                <p class="intro__paragraph">${introData.content}</p>
            </div>
            <button class="intro__btn ticket-btn" onclick="alert('${closeTicketOrderMsg}')">
                Đặt vé ngay
            </button>
        </div>
    </div>
`;
