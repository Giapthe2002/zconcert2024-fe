import { FooterData } from "@rtypes/FooterData";

const mailIcon = `<i class="fa-solid fa-envelope"></i>`;
const contactIcon = `<i class="fa-solid fa-phone"></i>`;
const timeLogo = `<i class="fa-solid fa-clock"></i>`;

export const footerData: FooterData = {
    contacts: [
        {
            title: "Z Concert 2024",
            mailIcon,
            contactIcon,
            mail: "zconcertproject2024@gmail.com",
            personContacts: [
                {
                    name: "Ms Mai Phuong",
                    phone: "852362511",
                    role: "Trưởng BTC",
                },
                {
                    name: "Mr Giang Nam",
                    phone: "948232958",
                    role: "Phó BTC",
                },
            ],
        },
        {
            title: "Liên hệ tài trợ",
            mailIcon,
            contactIcon,
            mail: "zconcertproject2024@gmail.com",
            personContacts: [
                {
                    name: "Ms Huyen Anh",
                    phone: "945790889",
                    role: "Trưởng BĐN",
                },
            ],
        },
    ],
    place: {
        title: "Địa điểm tổ chức",
        timeLogo,
        time: "17h ngày 15/08/2024",
        placeEmbedAddress:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1876.8509513888046!2d105.77954982596115!3d19.81021938311233!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3136f7ff9a2f4dab%3A0x2434a0b3564edb81!2zVHJ1bmcgdMOibSBIdeG6pW4gbHV54buHbiB2w6AgVGhpIMSR4bqldSBURFRUIHThu4luaCBUaGFuaCBIw7Nh!5e0!3m2!1svi!2s!4v1721485445839!5m2!1svi!2s",
    },
};
