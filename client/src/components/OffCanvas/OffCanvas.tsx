import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import SideBarHead from '../SideBar/Helpers/SideBarHead';
import SideBarBody from '../SideBar/Helpers/SideBarBody';

export default function OffCanvas() {
  return (
    <section className='sm:hidden'>
      <Sheet key={'left'}>
        <SheetTrigger asChild>
          <Button className='inline w-fit bg-transparent' variant='outline'>
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side={'left'}>
          <SheetHeader>
            <SheetTitle>
              <SideBarHead />
            </SheetTitle>
          </SheetHeader>
          <SideBarBody />
        </SheetContent>
      </Sheet>
    </section>
  );
}
