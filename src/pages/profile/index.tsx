import { useSession } from 'next-auth/react';
import React from 'react';

const ProfilePage = () => {
  const { data } = useSession();
  return (
    <div>
      ProfilePage
      <h1>{data?.user?.name}</h1>
      <h1>{data?.user?.email}</h1>
    </div>
  );
};

export default ProfilePage;
