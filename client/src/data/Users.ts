import avatarImg1 from '/images/male.jpg';
import avatarImg2 from '/images/female.jpg';
import avatarImg3 from '/images/male.jpg';

export type UserType = {
  name: string;
  email: string;
  avatar: string;
  lastMessage: string;
  id: string;
  messages: { sender: string; receiver: string; message: string }[];
  createdAt: string;
};

const UsersList: UserType[] = [
  {
    name: 'John Doe',
    email: 'jdoe@example.com',
    avatar: avatarImg1,
    lastMessage: 'yeah!',
    id: 'thisJohnDoe',
    messages: [
      {
        sender: 'thisMike',
        receiver: 'thisJohnDoe',
        message: 'Hello John, This is Mike',
      },
      {
        receiver: 'thisDoe',
        sender: 'thisJohnDoe',
        message: 'hi Mike!!, This is John Doe',
      },
    ],
    createdAt: '2024-03-13T00:01:51.333+00:00',
  },
  {
    name: 'Ali Khan',
    email: 'khan@example.com',
    avatar: avatarImg2,
    lastMessage: `No, I don't think so`,
    id: 'thisAliKhan',
    messages: [
      {
        sender: 'thisMike',
        receiver: 'thisAliKhan',
        message: 'Hello John, This is Mike',
      },
      {
        receiver: 'thisDoe',
        sender: 'thisJohnDoe',
        message: 'hi Mike!!, This is John Doe',
      },
    ],
    createdAt: '2024-03-01T00:01:51.333+00:00',
  },
  {
    name: 'Wale Joe',
    email: 'wale@example.com',
    avatar: avatarImg1,
    lastMessage: 'I guess it did',
    id: 'thisWale',
    messages: [
      {
        sender: 'thisMike',
        receiver: 'thisWale',
        message: 'Hello John, This is Mike',
      },
      {
        receiver: 'thisDoe',
        sender: 'thisWale',
        message: 'hi Mike!!, This is John Doe',
      },
    ],
    createdAt: '2024-03-11T00:01:51.333+00:00',
  },
  {
    name: 'Miss Tommy',
    email: 'tommy@example.com',
    avatar: avatarImg2,
    lastMessage: 'I guess it did',
    id: 'thisMissTommy',
    messages: [
      {
        sender: 'thisMike',
        receiver: 'thisMissTommy',
        message: 'Hello John, This is Mike',
      },
      {
        receiver: 'thisDoe',
        sender: 'thisMissTommy',
        message: 'hi Mike!!, This is John Doe',
      },
    ],
    createdAt: '2024-03-10T00:01:51.333+00:00',
  },
  {
    name: 'Mazen Bek',
    email: 'wale@example.com',
    avatar: avatarImg3,
    lastMessage: 'I guess it did',
    id: 'thisMazenBek',
    messages: [
      {
        sender: 'thisMike',
        receiver: 'thisMazenBek',
        message: 'Hello John, This is Mike',
      },
      {
        receiver: 'thisMazenBek',
        sender: 'thisJohnDoe',
        message: 'hi Mike!!, This is John Doe',
      },
    ],
    createdAt: '2024-03-09T00:01:51.333+00:00',
  },
  {
    name: 'Adele',
    email: 'adele@example.com',
    avatar: avatarImg1,
    lastMessage: 'I guess it did',
    id: 'thisAdele',
    messages: [
      {
        sender: 'thisMike',
        receiver: 'thisAdele',
        message: 'Hello John, This is Mike',
      },
      {
        receiver: 'thisDoe',
        sender: 'thisAdele',
        message: 'hi Mike!!, This is John Doe',
      },
    ],
    createdAt: '2024-03-08T00:01:51.333+00:00',
  },
  {
    name: 'Sofia',
    email: 'sofia@example.com',
    avatar: avatarImg2,
    lastMessage: 'I guess it did',
    id: 'thisSofia',
    messages: [
      {
        sender: 'thisMike',
        receiver: 'thisSofia',
        message: 'Hello John, This is Mike',
      },
      {
        receiver: 'thisDoe',
        sender: 'thisSofia',
        message: 'hi Mike!!, This is John Doe',
      },
    ],
    createdAt: '2024-03-07T00:01:51.333+00:00',
  },
  {
    name: 'Moaz temo',
    email: 'moaz@example.com',
    avatar: avatarImg3,
    lastMessage: 'I guess it did',
    id: 'thisMoazTemo',
    messages: [
      {
        sender: 'thisMike',
        receiver: 'thisMoazTemo',
        message: 'Hello John, This is Mike',
      },
      {
        receiver: 'thisDoe',
        sender: 'thisMoazTemo',
        message: 'hi Mike!!, This is John Doe',
      },
    ],
    createdAt: '2024-03-06T00:01:51.333+00:00',
  },
  {
    name: 'Hamada',
    email: 'hamada@example.com',
    avatar: avatarImg1,
    lastMessage: 'I guess it did',
    id: 'thisHamada',
    messages: [
      {
        sender: 'thisMike',
        receiver: 'thisHamada',
        message: 'Hello John, This is Mike',
      },
      {
        receiver: 'thisDoe',
        sender: 'thisHamada',
        message: 'hi Mike!!, This is John Doe',
      },
    ],
    createdAt: '2024-03-05T00:01:51.333+00:00',
  },
  {
    name: 'ZeZe',
    email: 'zeze@example.com',
    avatar: avatarImg2,
    lastMessage: 'I guess it did',
    id: 'thisZeZe',
    messages: [
      {
        sender: 'thisMike',
        receiver: 'thisZeZe',
        message: 'Hello John, This is Mike',
      },
      {
        receiver: 'thisDoe',
        sender: 'thisZeZe',
        message: 'hi Mike!!, This is John Doe',
      },
    ],
    createdAt: '2024-03-04T00:01:51.333+00:00',
  },
  {
    name: 'Marwa Doe',
    email: 'marwa@example.com',
    avatar: avatarImg1,
    lastMessage: 'I guess it did',
    id: 'thisMarwaDoe',
    messages: [
      {
        sender: 'thisMike',
        receiver: 'thisMarwaDoe',
        message: 'Hello John, This is Mike',
      },
      {
        receiver: 'thisDoe',
        sender: 'thisMarwaDoe',
        message: 'hi Mike!!, This is John Doe',
      },
    ],
    createdAt: '2024-03-03T00:01:51.333+00:00',
  },
  {
    name: 'Zein',
    email: 'zein@example.com',
    avatar: avatarImg2,
    lastMessage: 'I guess it did',
    id: 'thisZein',
    messages: [
      {
        sender: 'thisMike',
        receiver: 'thisZein',
        message: 'Hello John, This is Mike',
      },
      {
        receiver: 'thisDoe',
        sender: 'thisZein',
        message: 'hi Mike!!, This is John Doe',
      },
    ],
    createdAt: '2024-03-02T00:01:51.333+00:00',
  },
  {
    name: 'Wale Joe',
    email: 'wale@example.com',
    avatar: avatarImg3,
    lastMessage: 'I guess it did',
    id: 'thisJohnDoe',
    messages: [
      {
        sender: 'thisMike',
        receiver: 'thisJohnDoe',
        message: 'Hello John, This is Mike',
      },
      {
        receiver: 'thisDoe',
        sender: 'thisJohnDoe',
        message: 'hi Mike!!, This is John Doe',
      },
    ],
    createdAt: '2024-03-01T00:01:51.333+00:00',
  },
  {
    name: 'Wale Joe',
    email: 'wale@example.com',
    avatar: avatarImg2,
    lastMessage: 'I guess it did',
    id: 'thisJohnDoe',
    messages: [
      {
        sender: 'thisMike',
        receiver: 'thisJohnDoe',
        message: 'Hello John, This is Mike',
      },
      {
        receiver: 'thisDoe',
        sender: 'thisJohnDoe',
        message: 'hi Mike!!, This is John Doe',
      },
    ],
    createdAt: '2024-03-12T00:01:51.333+00:00',
  },
  {
    name: 'Wale Joe',
    email: 'wale@example.com',
    avatar: avatarImg1,
    lastMessage: 'I guess it did',
    id: 'thisJohnDoe',
    messages: [
      {
        sender: 'thisMike',
        receiver: 'thisJohnDoe',
        message: 'Hello John, This is Mike',
      },
      {
        receiver: 'thisDoe',
        sender: 'thisJohnDoe',
        message: 'hi Mike!!, This is John Doe',
      },
    ],
    createdAt: '2023-03-11T00:01:51.333+00:00',
  },
];

export default UsersList;
