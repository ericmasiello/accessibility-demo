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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: uuid(),
    name: 'Evan',
    hometown: 'Somewhere, IA',
    photo: evan,
    photoDesc: 'Evan sitting at his desk, smiling, holding an planner',
    employment: '2.5 years',
    bio:
      'In egestas erat imperdiet sed euismod nisi porta lorem. Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ac turpis egestas maecenas pharetra convallis posuere morbi. Pellentesque habitant morbi tristique senectus. Nunc lobortis mattis aliquam faucibus purus. Bibendum enim facilisis gravida neque convallis a cras semper. Nibh mauris cursus mattis molestie a iaculis. Et leo duis ut diam. Orci eu lobortis elementum nibh. Dignissim diam quis enim lobortis scelerisque. Non blandit massa enim nec dui nunc mattis. Nisi lacus sed viverra tellus in hac habitasse platea dictumst. A erat nam at lectus urna duis convallis convallis. Scelerisque fermentum dui faucibus in ornare quam viverra orci. Sapien eget mi proin sed libero. Tempus egestas sed sed risus pretium quam vulputate dignissim. Sit amet consectetur adipiscing elit ut aliquam purus sit. Faucibus purus in massa tempor nec. Est ullamcorper eget nulla facilisi etiam dignissim.',
  },
  {
    id: uuid(),
    name: 'David',
    hometown: 'Somewhere, MD',
    photo: david,
    photoDesc: 'David sitting at his desk staring intently',
    employment: '2.5 years',
    bio:
      'Urna molestie at elementum eu. Nisl purus in mollis nunc sed id semper risus. Morbi non arcu risus quis varius quam. Luctus venenatis lectus magna fringilla urna porttitor rhoncus. Cursus vitae congue mauris rhoncus. Egestas diam in arcu cursus euismod quis viverra nibh.',
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
      'Ultrices sagittis orci a scelerisque purus semper eget duis. Dignissim cras tincidunt lobortis feugiat vivamus. Elementum integer enim neque volutpat ac tincidunt vitae semper. Ut sem nulla pharetra diam sit amet nisl suscipit. A iaculis at erat pellentesque. At erat pellentesque adipiscing commodo.',
  },
  {
    id: uuid(),
    name: 'Avril',
    hometown: 'Somewhere, MD',
    photo: avril,
    photoDesc: 'Avril writing on a whiteboard in an office',
    employment: '3 months',
    bio:
      'Consectetur lorem donec massa sapien. Donec et odio pellentesque diam. Enim eu turpis egestas pretium aenean pharetra magna ac. Vulputate mi sit amet mauris. A diam sollicitudin tempor id eu nisl nunc. Eget dolor morbi non arcu risus quis varius quam quisque. Id diam maecenas ultricies mi. Congue eu consequat ac felis donec et odio. Massa eget egestas purus viverra accumsan in nisl nisi. Etiam sit amet nisl purus in mollis.',
  },
];

export default team;
