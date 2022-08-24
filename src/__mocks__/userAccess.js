import { v4 as uuid } from 'uuid';

export const userAccess = [
  {
    id: uuid(),
    address: {
    //   country: 'USA',
    //   state: 'West Virginia',
      city: 'Dubai',
      street: 'Villa 1'
    },
    avatarUrl: '/static/images/avatars/avatar_3.png',
    createdAt: 1555016400000,
    fullName: 'Abdul Mohammed',
    userName: 'abdum',
    password: '*******',
    email: 'abdulm@gmail.com',
    mobile: '0507004539',
    userRole: 'Federation Admin',
    userAccess: 'Federation 1, 2, 3'

  },
  {
    id: uuid(),
    address: {
    //   country: 'USA',
    //   state: 'West Virginia',
      city: 'Deira',
      street: 'Villa 2'
    },
    avatarUrl: '/static/images/avatars/avatar_3.png',
    createdAt: 1555016400000,
    fullName: 'Ali Mohammed',
    userName: 'alim',
    password: '*******',
    email: 'alim@gmail.com',
    mobile: '0504547655',
    userRole: 'Club Admin',
    userAccess: 'Club 1, 2, 3'

  },
//   {
//     id: uuid(),
//     address: {
//       country: 'USA',
//       state: 'Bristow',
//       city: 'Iowa',
//       street: '1865  Pleasant Hill Road'
//     },
//     avatarUrl: '/static/images/avatars/avatar_4.png',
//     createdAt: 1555016400000,
//     email: 'cao.yu@devias.io',
//     name: 'Cao Yu',
//     phone: '712-351-5711'
//   },
    
];
