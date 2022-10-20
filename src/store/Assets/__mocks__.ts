import { v4 as uuid } from 'uuid';
import { LoremIpsum } from 'lorem-ipsum';

import { IAssetItem } from './Assets.types';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

export const MOCK_ASSETS: IAssetItem[] = [
  {
    id: uuid(),
    title: 'Little Bookcase',
    description: lorem.generateSentences(2),
    price: 10,
    url: 'https://static.poly.pizza/7f4247dc-3979-412e-aa71-57b0916b0881.webp'
  },
  {
    id: uuid(),
    title: 'Furniture Kit',
    description: lorem.generateSentences(2),
    price: 10,
    url: 'https://static.poly.pizza/listimg/NoG1sEUD1z-thumbnail.png'
  },
  {
    id: uuid(),
    title: 'Farm Buildings Bundle',
    description: lorem.generateSentences(2),
    price: 10,
    url: 'https://static.poly.pizza/listimg/ppbnhEfNEt-thumbnail.png'
  },
  {
    id: uuid(),
    title: 'Animated Animal Pack',
    description: lorem.generateSentences(2),
    price: 10,
    url: 'https://static.poly.pizza/listimg/ILAPXeUYiS-thumbnail.png'
  },
  {
    id: uuid(),
    title: 'Modular Train Pack',
    description: lorem.generateSentences(2),
    price: 100,
    url: 'https://static.poly.pizza/listimg/jYEybkFVr1-thumbnail.png'
  },
  {
    id: uuid(),
    title: 'Medieval Village Pack Medieval',
    description: lorem.generateSentences(2),
    price: 1000,
    url: 'https://static.poly.pizza/listimg/NsHhjhlrfY-thumbnail.png'
  },
  {
    id: uuid(),
    title: 'Little Bookcase',
    description: lorem.generateSentences(2),
    price: 10,
    url: 'https://static.poly.pizza/7f4247dc-3979-412e-aa71-57b0916b0881.webp'
  },
  {
    id: uuid(),
    title: 'Furniture Kit',
    description: lorem.generateSentences(2),
    price: 10,
    url: 'https://static.poly.pizza/listimg/NoG1sEUD1z-thumbnail.png'
  },
  {
    id: uuid(),
    title: 'Farm Buildings Bundle',
    description: lorem.generateSentences(2),
    price: 10,
    url: 'https://static.poly.pizza/listimg/ppbnhEfNEt-thumbnail.png'
  },
  {
    id: uuid(),
    title: 'Animated Animal Pack',
    description: lorem.generateSentences(2),
    price: 10,
    url: 'https://static.poly.pizza/listimg/ILAPXeUYiS-thumbnail.png'
  },
  {
    id: uuid(),
    title: 'Modular Train Pack',
    description: lorem.generateSentences(2),
    price: 10,
    url: 'https://static.poly.pizza/listimg/jYEybkFVr1-thumbnail.png'
  },
  {
    id: uuid(),
    title: 'Medieval Village Pack',
    description: lorem.generateSentences(2),
    price: 10,
    url: 'https://static.poly.pizza/listimg/NsHhjhlrfY-thumbnail.png'
  }
];
