"use client"

import { Button, Input } from "@nextui-org/react";
import { useRegister } from "../hooks/useRegister";

export const Register = () => {
  const { registerData, handleEventChange, registerUser , resetRegisterData} = useRegister();

  const handleRegister = async () => {
    const data = await registerUser();
    if (data) {
      console.log(data);
      resetRegisterData()
    }
  };

  return (
    <main className="h-screen flex justify-center items-center">
      <div className="w-[260px] space-y-2">
        <h1>Register</h1>
        <Input value={registerData.name} name="name" placeholder="full name" onChange={handleEventChange} />
        <Input value={registerData.email} name="email" placeholder="email@something.com" onChange={handleEventChange} />
        <Input value={registerData.password} name="password" type="password" placeholder="password" onChange={handleEventChange} />
        <Button color="primary" onClick={handleRegister}>
          Register
        </Button>
      </div>
    </main>
  );
};
