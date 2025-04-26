import Popup from "@rsrc/utils/popup/Popup";
import { qrPopup, updateQrImage } from "./createQrPopup";
import { termPopup } from "./createTermPopup";

import "./checkout.scss";

const checkoutContent: HTMLDivElement = document.createElement(
    "div",
) as HTMLDivElement;

checkoutContent.innerHTML = `
  <form id="checkout-form" action="">
    <div class="form__item">
      <label for="input__full-name">Họ và tên</label>
      <input
        type="text"
        id="input__full-name"
        name="input__full-name"
        placeholder="Nguyễn Văn A"
        title="Nhập kí tự chỉ gồm chữ cái alphabet"
        oninvalid='this.setCustomValidity("(*) Vui lòng điền đầy đủ họ tên.")'
        oninput='this.setCustomValidity("")'
        autocomplete="off"
        required
      />
    </div>

    <div class="form__item">
      <label for="input__phone-number">Số điện thoại</label>
      <input
        type="tel"
        id="input__phone-number"
        name="input__phone-number"
        placeholder="0947847xxx"
        title="Nhập đúng kí tự 10 chữ số"
        oninvalid='this.setCustomValidity("(*) Vui lòng nhập số điện thoại.")'
        oninput='this.setCustomValidity("")'
        autocomplete="off"
        required
      />
    </div>

    <div class="form__item">
      <label for="input__email">Email</label>
      <input
        type="email"
        id="input__email"
        name="input__email"
        placeholder="example@gmail.com"
        title="Nhập đúng cú pháp example@gmail.com"
        oninvalid='this.setCustomValidity("(*) Vui lòng nhập địa chỉ Email.")'
        oninput='this.setCustomValidity("")'
        autocomplete="off"
        required
      />
    </div>

    <div class="form__item">
      <label for="input__facebook">Link Facebook cá nhân</label>
      <input
        type="url"
        id="input__facebook"
        name="input__facebook"
        placeholder="Facebook Address"
        title="Nhập đúng định dạng link facebook cá nhân"
        oninvalid='this.setCustomValidity("(*) Vui lòng gán link FB cá nhân của bạn.")'
        oninput='this.setCustomValidity("")'
        autocomplete="off"
        required
      />
    </div>

    <div class="form__item">
      <label for="input__known">Bạn biết đến Z thông qua</label>
      <input
        type="text"
        id="input__known"
        name="input__known"
        placeholder="Facebook, Staff, CTV,…"
        autocomplete="off"
      />
    </div>

    <div class="form__item">
      <p class="buying-term">Điều khoản mua vé</p>
    </div>

    <div class="form__item">
      <button type="submit" class="form__submit-button">
        Tiếp
      </button>
    </div>
  </form>
`;

const checkoutPopup = new Popup.PopupBuilder(checkoutContent)
    .closeOnClickOutside()
    .insertToDOMWhenInit()
    .build();

checkoutPopup.wrapper.classList.add("checkout-popup__wrapper");

const formElement: HTMLFormElement = document.getElementById(
    "checkout-form",
) as HTMLFormElement;

const inputFullNameElement = document.getElementById(
    "input__full-name",
) as HTMLInputElement;

const inputPhoneNumberElement = document.getElementById(
    "input__phone-number",
) as HTMLInputElement;

const inputEmailElement = document.getElementById(
    "input__email",
) as HTMLInputElement;

const inputFacebookElement = document.getElementById(
    "input__facebook",
) as HTMLInputElement;

const inputKnownElement = document.getElementById(
    "input__known",
) as HTMLInputElement;

formElement.addEventListener("submit", (event: SubmitEvent) => {
    event.preventDefault();

    window.registerData.fullName = inputFullNameElement.value.toString();
    window.registerData.phoneNumber = inputPhoneNumberElement.value.toString();
    window.registerData.email = inputEmailElement.value.toString();
    window.registerData.facebook = inputFacebookElement.value.toString();
    window.registerData.known = inputKnownElement.value.toString();

    updateQrImage();

    checkoutPopup.hide();
    qrPopup.show();
});

inputFullNameElement.addEventListener("blur", (event: Event) => {
    const target = event.target as HTMLInputElement;
    window.registerData.fullName = target.value.toString();
    updateQrImage();
});

inputFullNameElement.addEventListener("focusout", (event: Event) => {
    const target = event.target as HTMLInputElement;
    window.registerData.fullName = target.value.toString();
    updateQrImage();
});

inputPhoneNumberElement.addEventListener("blur", (event: Event) => {
    const target = event.target as HTMLInputElement;
    window.registerData.phoneNumber = target.value.toString();
    updateQrImage();
});

inputPhoneNumberElement.addEventListener("focusout", (event: Event) => {
    const target = event.target as HTMLInputElement;
    window.registerData.phoneNumber = target.value.toString();
    updateQrImage();
});

document.querySelector("p.buying-term")?.addEventListener("click", () => {
    checkoutPopup.hide();
    termPopup.show();
    termPopup.afterClose = () => {
        checkoutPopup.show();
    };
});

export { checkoutPopup };
