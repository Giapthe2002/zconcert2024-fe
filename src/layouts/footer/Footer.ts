import { footerData } from "@rdata/footerData";
import { PersonContact } from "@rtypes/FooterData";

import "./Footer.scss";

const createPersonContactPart = (personContacts: PersonContact[]) => {
    return personContacts
        .map((contact) => {
            const { name, phone, role } = contact;
            return `
                <span>
                    <a href="tel:+84${phone}">0${phone}</a> - ${name} - ${role}
                </span>
            `;
        })
        .join("");
};

const contactParts = footerData.contacts
    .map((contact) => {
        const { title, mail, mailIcon, contactIcon, personContacts } = contact;
        return `
            <div class="footer__part">
                <h3 class="part__title">${title}</h3>
                <div class="part__items">
                    <div class="part__item">
                        <div class="item__icon">${mailIcon}</div>
                        <div class="item__text">
                            <a href="mailto:${mail}">${mail}</a>
                        </div>
                    </div>
                    <div class="part__item">
                        <div class="item__icon">${contactIcon}</div>
                        <div class="item__text">${createPersonContactPart(personContacts)}</div>
                    </div>
                </div>
            </div>
        `;
    })
    .join("");

const placePart = `
    <div class="footer__part">
        <h3 class="part__title">${footerData.place.title}</h3>
        <div class="part__items">
            <div class="part__item">
                <div class="item__icon">${footerData.place.timeLogo}</div>
                <div class="item__text">
                    <a href="/event.ics">${footerData.place.time}</a>
                </div>
            </div>
            <iframe
                src="${footerData.place.placeEmbedAddress}"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                width="100%"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    </div>
`;

document.querySelector("#footer")!.innerHTML = `
    <div class="footer__container">
        ${contactParts}
        ${placePart}
    </div>
`;
