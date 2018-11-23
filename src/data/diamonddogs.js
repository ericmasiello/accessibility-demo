import uuid from 'uuid/v4';
import avril from './photos/blond-hair-board-desk-1181534.jpg';
import eric from './photos/adult-beard-boss-1138903.jpg';
import evan from './photos/adult-beard-blur-927022.jpg';
import david from './photos/adult-beard-concentrated-6972.jpg';
import greg from './photos/adult-chill-computer-450271.jpg';

const team = [
  {
    id: uuid(),
    name: 'Eric',
    hometown: 'Somers, CT',
    photo: eric,
    photoDesc: 'Eric dressed in a gray suit',
    employment: '2.5 years',
    bio:
      'Eric joined the Diamond Dogs when they were known as the Embellishmen. He helped developed the "embellishment layer" for Tower\'s template designers.',
  },
  {
    id: uuid(),
    name: 'Evan',
    hometown: 'Somewhere, IA',
    photo: evan,
    photoDesc: 'Evan sitting at his desk, smiling, holding an planner',
    employment: '2.5 years',
    bio:
      'Evan and Noah were the original Embellishmen. Previously Evan worked on PAID.',
  },
  {
    id: uuid(),
    name: 'David',
    hometown: 'Somewhere, MD',
    photo: david,
    photoDesc: 'David sitting at his desk staring intently',
    employment: '2.5 years',
    bio:
      'David was a intern at Vistaprint before joining as a full time employee. He worked on Walking Devs beforing joining the Diamond Dogs 6 months ago.',
  },
  {
    id: uuid(),
    name: 'Greg',
    hometown: 'Somewhere, MD',
    photo: greg,
    photoDesc:
      'Greg leaning back in his desk chair with a sticker on his forehead that reads "Be Happy"',
    employment: '4 years',
    bio:
      'Greg was a member of The Architects, one of the original Tower teams. He moved on, helping The Norms support DIFY before recently rejoining Tower development as a Diamond Dog.',
  },
  {
    id: uuid(),
    name: 'Avril',
    hometown: 'USA',
    photo: avril,
    photoDesc: 'Avril writing on a whiteboard in an office',
    employment: '4 months',
    bio:
      'Avril only recently joined Vistaprint. She briefly worked on Legends of the Hidden Templates and joined Diamond Dogs a few weeks ago.',
  },
];

export default team;
