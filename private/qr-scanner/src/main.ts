import "normalize.css";
import "./style.scss";
import QrScanner from "qr-scanner";
import { Response } from "@rsrc/types/Response";
import { fetchData } from "@rsrc/libs/fetchData";
import { FetchMethod } from "@tsrc/enums/FetchMethod";
import { setPopupAfterClose, showPopup } from "./createPopup";

QrScanner.hasCamera().then((hasCamera) => {
    if (!hasCamera) {
        const hasCamLogElement = document.getElementById(
            "js-deviceHasCam",
        ) as HTMLSpanElement;

        hasCamLogElement.textContent = "Thiết bị này không hỗ trợ camera!";
    }
});

const videoElement: HTMLVideoElement = document.getElementById(
    "js-videoScanner",
) as HTMLVideoElement;

const logElement: HTMLDivElement = document.getElementById(
    "js-scanLog",
) as HTMLDivElement;

setPopupAfterClose(async () => {
    await scanner.start();
});

const setResult = async (result: QrScanner.ScanResult) => {
    scanner.stop();
    const { data: scanData } = result;

    try {
        const responseData: Response = await fetchData({
            url: `qr/decrypt?text=${scanData}`,
            method: FetchMethod.GET,
        });

        const { status, message, data } = responseData;

        setMessage(message);

        if (200 === status) {
            showPopup(data);
        }
    } catch (error) {
        setMessage("Error at server, please contact developer");
        console.error(`Decrypt error: ${error}`);
    }
};

const setMessage = (message: string) => {
    logElement.textContent = message;
};

const scanner = new QrScanner(videoElement, (result) => setResult(result), {
    highlightScanRegion: true,
    highlightCodeOutline: true,
});

scanner.start().then(() => {
    console.log("Scanner is ready");
});
