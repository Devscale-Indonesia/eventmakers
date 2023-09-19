"use client";

import { Button, Input } from "@nextui-org/react";

export const Login = () => {
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="w-[260px] space-y-2">
        <h1>Login</h1>
        <Input name="email" placeholder="email@something.com" />
        <Input name="password" type="password" placeholder="password" />
        <Button color="primary">Login</Button>
      </div>
    </main>
  );
};
