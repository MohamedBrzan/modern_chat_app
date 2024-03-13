import { Input } from '../ui/input';
import { Separator } from '../ui/separator';
import SideBarBody from './Helpers/SideBarBody';
import SideBarHead from './Helpers/SideBarHead';

export default function SideBar() {
  return (
    <article className='w-full sm:basis-1/2 lg:basis-1/4 p-2 overflow-auto'>
      {/* <div className='sticky top-0 bg-slate-100 z-10 py-2'> */}
      <SideBarHead />
      <Separator />
      <Input
        className='rounded-full w-full md:w-11/12 mx-auto my-2'
        placeholder='Search message...'
      />
      {/* </div> */}
      <SideBarBody />
    </article>
  );
}
