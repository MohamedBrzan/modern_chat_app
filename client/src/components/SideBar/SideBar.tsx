import SideBarBody from './Helpers/SideBarBody';
import SideBarHead from './Helpers/SideBarHead';

export default function SideBar() {
  return (
    <article className='w-full hidden sm:block sm:basis-1/2 lg:basis-1/4 p-2 overflow-auto'>
      <SideBarHead />
      <SideBarBody />
    </article>
  );
}
