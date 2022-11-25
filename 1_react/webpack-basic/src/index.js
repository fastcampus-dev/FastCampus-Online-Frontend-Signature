import getRandomAddress from "./randomAddress";
import { nanoid } from 'nanoid';
import './styles/main.scss';
import mainImage from './assets/image.jpeg';

console.log(nanoid());
console.log(nanoid());

const img = document.getElementById('mainImage');
img.src = mainImage

console.log(getRandomAddress());


