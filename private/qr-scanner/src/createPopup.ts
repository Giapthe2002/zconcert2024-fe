import Popup from "@rsrc/utils/popup/Popup";
import jsonview from "@pgrabovets/json-view";

type AfterCloseFunction = () => void;

const resultContent: HTMLDivElement = document.createElement(
    "div",
) as HTMLDivElement;

resultContent.innerHTML = `
  <div class="result-tree"></div>
`;

const resultTreeElement = resultContent.querySelector(
    ".result-tree",
) as HTMLDivElement;

const resultPopup = new Popup.PopupBuilder(resultContent)
    .closeOnClickOutside()
    .insertToDOMWhenInit()
    .build();

export const showPopup = (data: Object | null) => {
    resultTreeElement.innerHTML = "";

    const tree = jsonview.renderJSON(data, resultTreeElement);
    jsonview.expand(tree);

    resultPopup.show();
};

export const setPopupAfterClose = (afterCloseFunction: AfterCloseFunction) => {
    resultPopup.afterClose = afterCloseFunction;
};
