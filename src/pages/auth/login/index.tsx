import FormLogin from '@/components/elements/FormLogin';

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-screen flex-col gap-2">
      <h1 className="font-bold text-xl">Login</h1>
      <FormLogin />
    </div>
  );
};

export default LoginPage;
