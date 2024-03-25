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

export default function SignIn() {
  const socket = useContext(SocketContext);
  const navigate = useNavigate();
  const formSchema = z.object({
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
      email: '',
      password: '',
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    socket.emit('sign_in', values);
  };

  useEffect(() => {
    socket.on('received_sign_in', ({ username, email, gender, _id }) => {
      localStorage.setItem(
        'user',
        JSON.stringify({ username, email, gender, _id })
      );
      location.reload();
      navigate('/');
    });
  }, [navigate, socket]);

  return (
    <section className='xs:w-full md:w-1/2 xl:w-1/4 mx-5 md:m-auto bg-slate-200 p-5 translate-y-1/4 rounded-lg shadow-lg'>
      <h1 className='font-bold text-4xl mb-6'>Sign In</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-8'>
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
          <Button type='submit'>Submit</Button>
        </form>
      </Form>{' '}
      <Link to='/register' className={buttonVariants({ variant: 'link' })}>
        you don't have account?
      </Link>
    </section>
  );
}
