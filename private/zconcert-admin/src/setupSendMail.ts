import {
    disableSandyNotiBtn,
    setupSandyNotiBtn,
} from "./sandy/notification/setupButton";
import { clearForm, setupSandyForm } from "./sandy/ticket/setupForm";
import { disableWavyBtn, setupWavyButton } from "./wavy/ticket/setupButton";

export const clearSendMailState = () => {
    disableWavyBtn();
    disableSandyNotiBtn();
    clearForm();
};

export const setupSendMailBtn = () => {
    if (!window.customerData.paymentStatus) {
        alert("Khách hàng này chưa thanh toán, không thể gửi vé!");
        return;
    }

    setupWavyButton();
    setupSandyNotiBtn();
    setupSandyForm();
};
