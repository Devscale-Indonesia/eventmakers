"use client";

import { Button, Input } from "@nextui-org/react";
import { useState } from "react";

export const Login = () => {
  const initialLoginData = {
    email: "",
    password: "",
  };

  const [loginData, setLoginData] = useState(initialLoginData);

  const handleEventChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = async () => {
    const { email, password } = loginData;
    const res = await fetch("https://eventmakers-api.vercel.app/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <main className="h-screen flex justify-center items-center">
      <div className="w-[260px] space-y-2">
        <h1>Login</h1>
        <Input name="email" placeholder="email@something.com" onChange={handleEventChange} />
        <Input name="password" type="password" placeholder="password" onChange={handleEventChange} />
        <Button color="primary" onClick={handleLogin}>
          Login
        </Button>
      </div>
    </main>
  );
};
