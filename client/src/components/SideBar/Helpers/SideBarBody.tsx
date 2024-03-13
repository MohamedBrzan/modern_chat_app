import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import moment from 'moment';
import avatarImg1 from '/images/user1.jpg';
import avatarImg2 from '/images/user2.jpg';
import avatarImg3 from '/images/user3.jpg';

const Users = () => {
  const usersList = [
    {
      name: 'John Doe',
      email: 'jdoe@example.com',
      avatar: avatarImg1,
      lastMessage: 'yeah!',
      createdAt: '2024-03-13T00:01:51.333+00:00',
    },
    {
      name: 'Ali Khan',
      email: 'khan@example.com',
      avatar: avatarImg2,
      lastMessage: `No, I don't think so`,
      createdAt: '2024-03-01T00:01:51.333+00:00',
    },
    {
      name: 'Wale Joe',
      email: 'wale@example.com',
      avatar: avatarImg1,
      lastMessage: 'I guess it did',
      createdAt: '2024-03-11T00:01:51.333+00:00',
    },
    {
      name: 'Wale Joe',
      email: 'wale@example.com',
      avatar: avatarImg2,
      lastMessage: 'I guess it did',
      createdAt: '2024-03-10T00:01:51.333+00:00',
    },
    {
      name: 'Wale Joe',
      email: 'wale@example.com',
      avatar: avatarImg3,
      lastMessage: 'I guess it did',
      createdAt: '2024-03-09T00:01:51.333+00:00',
    },
    {
      name: 'Wale Joe',
      email: 'wale@example.com',
      avatar: avatarImg1,
      lastMessage: 'I guess it did',
      createdAt: '2024-03-08T00:01:51.333+00:00',
    },
    {
      name: 'Wale Joe',
      email: 'wale@example.com',
      avatar: avatarImg2,
      lastMessage: 'I guess it did',
      createdAt: '2024-03-07T00:01:51.333+00:00',
    },
    {
      name: 'Wale Joe',
      email: 'wale@example.com',
      avatar: avatarImg3,
      lastMessage: 'I guess it did',
      createdAt: '2024-03-06T00:01:51.333+00:00',
    },
    {
      name: 'Wale Joe',
      email: 'wale@example.com',
      avatar: avatarImg1,
      lastMessage: 'I guess it did',
      createdAt: '2024-03-05T00:01:51.333+00:00',
    },
    {
      name: 'Wale Joe',
      email: 'wale@example.com',
      avatar: avatarImg2,
      lastMessage: 'I guess it did',
      createdAt: '2024-03-04T00:01:51.333+00:00',
    },
    {
      name: 'Wale Joe',
      email: 'wale@example.com',
      avatar: avatarImg1,
      lastMessage: 'I guess it did',
      createdAt: '2024-03-03T00:01:51.333+00:00',
    },
    {
      name: 'Wale Joe',
      email: 'wale@example.com',
      avatar: avatarImg2,
      lastMessage: 'I guess it did',
      createdAt: '2024-03-02T00:01:51.333+00:00',
    },
    {
      name: 'Wale Joe',
      email: 'wale@example.com',
      avatar: avatarImg3,
      lastMessage: 'I guess it did',
      createdAt: '2024-03-01T00:01:51.333+00:00',
    },
    {
      name: 'Wale Joe',
      email: 'wale@example.com',
      avatar: avatarImg2,
      lastMessage: 'I guess it did',
      createdAt: '2024-03-12T00:01:51.333+00:00',
    },
    {
      name: 'Wale Joe',
      email: 'wale@example.com',
      avatar: avatarImg1,
      lastMessage: 'I guess it did',
      createdAt: '2023-03-11T00:01:51.333+00:00',
    },
  ];
  return (
    <section>
      {usersList.map(({ name, avatar, lastMessage, createdAt }, i) => (
        <article key={i} className='group flex flex-col items-start'>
          <div className='user_info w-full text-base mb-1 cursor-pointer group-hover:bg-slate-200 p-2 flex flex-row gap-3 rounded-sm'>
            <Avatar>
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback>{name.slice(0, 3).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className='user_data flex flex-col w-full'>
              <div className=' user_info__head flex flex-row justify-between'>
                <h6>{name}</h6>
                <div className='time text-indigo-600 inline rounded-full p-1 text-sm'>
                  {moment(createdAt).fromNow()}
                </div>
              </div>
              <p className='last_message text-muted-foreground text-sm leading-none'>
                {lastMessage}
              </p>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default function SideBarBody() {
  return (
    <section className='h-full overflow-auto mb-8'>
      <Separator />
      <Users />
    </section>
  );
}
