"use client";

import { Button, Input } from "@nextui-org/react";
import { useState } from "react";

export const Register = () => {
  const initialRegisterData = {
    name: "",
    email: "",
    password: "",
  };

  const [registerData, setRegisterData] = useState(initialRegisterData);

  const handleEventChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleRegister = async () => {
    const { name, email, password } = registerData;
    const res = await fetch("https://eventmakers-api.vercel.app/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="w-[260px] space-y-2">
        <h1>Register</h1>
        <Input name="name" placeholder="full name" onChange={handleEventChange} />
        <Input name="email" placeholder="email@something.com" onChange={handleEventChange} />
        <Input name="password" type="password" placeholder="password" onChange={handleEventChange} />
        <Button color="primary" onClick={handleRegister}>
          Register
        </Button>
      </div>
    </main>
  );
};
