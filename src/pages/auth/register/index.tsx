import FormRegister from '@/components/elements/FormRegister';

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center h-screen flex-col gap-2">
      <h1 className="font-bold text-xl">Register</h1>
      <FormRegister />
    </div>
  );
};

export default RegisterPage;
