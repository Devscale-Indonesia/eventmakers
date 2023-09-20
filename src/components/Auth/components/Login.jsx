"use client";

import { Input, Button } from "@nextui-org/react";
import { useLogin } from "../hooks/useLogin";

export const Login = () => {
  const { isLoading, loginData, handleEventChange, handleLogin } = useLogin();

  return (
    <main className="h-screen flex justify-center items-center">
      <div className="w-[260px] space-y-2">
        <h1>Login</h1>
        <Input
          value={loginData.email}
          name="email"
          placeholder="email@something.com"
          onChange={handleEventChange}
        />
        <Input
          value={loginData.password}
          name="password"
          type="password"
          placeholder="password"
          onChange={handleEventChange}
        />
        <Button isLoading={isLoading} color="primary" onClick={handleLogin}>
          Login
        </Button>
      </div>
    </main>
  );
};
