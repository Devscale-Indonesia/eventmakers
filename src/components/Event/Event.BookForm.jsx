import React from "react";

export const EventBookForm = () => {
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="w-[260px] space-y-2">
        <h1>Join Event</h1>
        <Input name="name" placeholder="full name" />
        <Input name="email" placeholder="email@something.com" />
        <Input name="phone" placeholder="+6222222222" />
        <Button color="primary">Join</Button>
      </div>
    </main>
  );
};
