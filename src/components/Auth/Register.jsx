"use client";

import { Button, Input } from "@nextui-org/react";

export const Register = () => {
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="w-[260px] space-y-2">
        <h1>Register</h1>
        <Input name="name" placeholder="full name" />
        <Input name="email" placeholder="email@something.com" />
        <Input name="password" type="password" placeholder="password" />
        <Button color="primary">Register</Button>
      </div>
    </main>
  );
};
