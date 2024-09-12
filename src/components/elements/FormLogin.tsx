import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const FormLogin = () => {
  const [loading, setLoading] = useState(false);
  const { push, query } = useRouter();

  const callbackUrl: any = query.callbackUrl || '/';

  const formSchema = z.object({
    email: z.string().email('Email is required'),
    password: z.string().min(8, {
      message: 'Password must be at least 8 characters',
    }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      await signIn('credentials', {
        redirect: false,
        email: values.email,
        password: values.password,
        callbackUrl,
      }).then((res) => {
        if (res?.ok) {
          setLoading(false);
          push('/');
        }
      });
    } catch (error: any) {
      console.log(error.message);
      setLoading(false);
    }
  }
  return (
    <form className="flex flex-col gap-2 min-w-96 border rounded-md p-10" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-1">
        <label className="text-sm font-bold" htmlFor="email">
          Email
        </label>
        <input {...register('email')} type="email" placeholder="Email" id="email" name="email" className="border rounded-md h-10 p-2 bg-gray-200" />
        <div className="text-xs text-red-500">
          <ErrorMessage errors={errors} name="email" />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-sm font-bold">
          Password
        </label>
        <input {...register('password')} type="password" placeholder="Password" id="password" name="password" className="border rounded-md h-10 p-2 bg-gray-200" autoComplete="current-password" />
        <div className="text-xs text-red-500">
          <ErrorMessage errors={errors} name="password" />
        </div>
      </div>

      <button className="button !w-full !h-10 text-white disabled:cursor-progress" type="submit" disabled={loading}>
        {loading ? 'loading...' : 'submit'}
      </button>
      <p>
        Wanna create a new account?{' '}
        <Link href="/auth/register" className="text-blue-500">
          register
        </Link>
      </p>
    </form>
  );
};

export default FormLogin;
