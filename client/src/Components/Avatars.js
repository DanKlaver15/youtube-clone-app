import brentAvatar from "../images/Brent_Solomon.png";
import bronsonAvatar from "../images/Bronson.jpeg";
import charlesAvatar from "../images/Charles.png";
import davidAvatar from "../images/David.jpeg";
import jjAvatar from "../images/JJ.png";
import michaelAvatar from "../images/Michael.png";
import nevinAvatar from "../images/Nevin.jpeg";
import pascalAvatar from "../images/Pascal.jpeg";

export const Avatars = [
  brentAvatar,
  bronsonAvatar,
  charlesAvatar,
  davidAvatar,
  jjAvatar,
  michaelAvatar,
  nevinAvatar,
  pascalAvatar,
];

export function RandomNumber() {
  return Math.floor(Math.random() * Avatars.length);
}
