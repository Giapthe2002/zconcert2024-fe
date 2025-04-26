import { VocalData } from "@rtypes/VocalData";

import chilliesImage from "/images/vocal/chillies.png";
import chilliesSong from "/sounds/chillies.mp3";

import vstraImage from "/images/vocal/vstra.png";
import vstraSong from "/sounds/vstra.mp3";

import ameeImage from "/images/vocal/amee.png";
import ameeSong from "/sounds/amee.mp3";

import weanImage from "/images/vocal/wean.png";
import weanSong from "/sounds/wean.mp3";

import brayImage from "/images/vocal/bray.png";
import braySong from "/sounds/bray.mp3";

import tlinhImage from "/images/vocal/tlinh.png";
import tlingSong from "/sounds/tlinh.mp3";

export const vocalData: VocalData = {
    title: "Nghệ sỹ",
    subtitle: "Z Concert 2024",
    items: [
        {
            image: chilliesImage,
            alt: "Chillies's image",
            audio: chilliesSong,
        },
        {
            image: vstraImage,
            alt: "VSTRA's image",
            audio: vstraSong,
        },
        {
            image: ameeImage,
            alt: "Amee's image",
            audio: ameeSong,
        },
        {
            image: weanImage,
            alt: "Wean's image",
            audio: weanSong,
        },
        {
            image: brayImage,
            alt: "B Ray's image",
            audio: braySong,
        },
        {
            image: tlinhImage,
            alt: "tlinh's image",
            audio: tlingSong,
        },
    ],
};
