import { Button, buttonVariants } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext, useEffect } from 'react';
import { SocketContext } from '@/context/SocketIoContext';
import { Link, useNavigate } from 'react-router-dom';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

export default function Register() {
  const socket = useContext(SocketContext);
  const navigate = useNavigate();
  const formSchema = z.object({
    username: z
      .string({
        required_error: 'Username is required',
        invalid_type_error: 'Username must be a string',
      })
      .min(3, { message: 'your name must be at least 3 characters' }),
    email: z
      .string({
        required_error: 'Email is required',
        invalid_type_error: 'Email must be a string',
      })
      .email(),
    password: z
      .string({
        required_error: 'Password is required',
        invalid_type_error: 'Password must be a string',
      })
      .min(8, { message: 'your password must be at least 8 characters' }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    socket.emit('register', { ...values });
  };

  useEffect(() => {
    socket.on('user', ({ username, email, gender, _id }) => {
      localStorage.setItem(
        'user',
        JSON.stringify({ username, email, gender, _id })
      );
      location.reload();
      navigate('/');
    });
  }, [navigate, socket]);

  return (
    <section className='xs:w-full sm:w-1/2 mx-5 md:m-auto md:w-1/2 xl:w-1/4 bg-slate-200 p-5 translate-y-1/4 rounded-lg shadow-lg'>
      <h1 className='font-bold text-4xl mb-6'>Register</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder='username'
                    {...field}
                    type='text'
                    required
                  />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input placeholder='email' {...field} type='email' required />
                </FormControl>
                <FormDescription>This is your email.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder='password'
                    {...field}
                    type='password'
                    required
                  />
                </FormControl>
                <FormDescription>This is your secret password.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <RadioGroup defaultValue='male' required>
            <FormLabel className='mb-5'> Gender</FormLabel>
            <div className='flex items-center space-x-2'>
              <RadioGroupItem value='male' id='r1' />
              <Label htmlFor='r1'>Male</Label>
            </div>
            <div className='flex items-center space-x-2'>
              <RadioGroupItem value='female' id='r2' />
              <Label htmlFor='r2'>Female</Label>
            </div>
          </RadioGroup>
          <Button type='submit'>Submit</Button>
        </form>
      </Form>
      <Link to='/sign-in' className={buttonVariants({ variant: 'link' })}>
        Already have account?
      </Link>
    </section>
  );
}
