import { generalData } from "@tdata/generalData";
import { TicketType } from "@tenums/TicketType";

import "./Cart.scss";
import { createCartRow } from "./createCartRow";
import { setupCheckoutPopup } from "./setupCheckout";
import "./CartManager";

const soldOutTickets = generalData.soldOutType;

window.registerData = {
    fullName: "",
    phoneNumber: "",
    email: "",
    facebook: "",
    known: "",
    ticketData: {
        tickets: {
            wavy: 0,
            sandy: {
                sandyA: 0,
                sandyB: 0,
                sandyC: 0,
                sandyD: 0,
            },
        },
        totalPrice: 0,
    },
};

const cartListPart = Object.values(TicketType)
    .map((type) => createCartRow(type, soldOutTickets.includes(type)))
    .join("");

document.querySelector("#cart")!.innerHTML = `
    <div class="cart__container">
        <div class="cart__wrapper">
            <div class="cart__title">Giỏ hàng</div>
            <div class="cart__list">
                ${cartListPart}
            </div>
            <div class="cart__total-price">
                <div class="price__title">Thành tiền</div>
                <div class="price__number">0</div>
            </div>
            <div class="cart__checkout-btn">
                <button id="js-checkout-btn" disabled>Thanh toán</button>
            </div>
        </div>
    </div>
`;

setupCheckoutPopup(
    document.getElementById("js-checkout-btn") as HTMLButtonElement,
);
