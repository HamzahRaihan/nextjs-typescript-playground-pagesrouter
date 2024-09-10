import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const Form = () => {
  const [loading, setLoading] = useState(false);
  const { push } = useRouter();
  const formSchema = z.object({
    fullname: z.string().min(5, {
      message: 'Fullname must be at least 5 characters.',
    }),
    email: z.string().email('Email is required'),
    password: z.string().min(8, {
      message: 'Password must be at least 8 characters',
    }),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: '',
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    console.log('🚀 ~ onSubmit ~ response:', response);

    if (response.status === 200) {
      reset();
      setLoading(false);
      push('/auth/login');
    }
    if (response.status === 400) {
      setLoading(false);
      alert('email already exist');
      console.log('email already exist');
    }
  }
  return (
    <form className="flex flex-col gap-2 min-w-96 border rounded-md p-10" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-1">
        <label className="text-sm font-bold" htmlFor="fullname">
          Full name
        </label>
        <input {...register('fullname')} type="text" placeholder="Username" id="fullname" name="fullname" className="border rounded-md h-10 p-2 bg-gray-200" />
        <div className="text-xs text-red-500">
          <ErrorMessage errors={errors} name="fullname" />
        </div>
      </div>

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
        Already have an account?{' '}
        <button type="button" onClick={() => signIn()} className="text-blue-500">
          sign in
        </button>
      </p>
    </form>
  );
};

export default Form;
