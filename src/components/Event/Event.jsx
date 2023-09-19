import { EventCard } from "./Event.Card";

export const Event = () => {
  return (
    <main className="max-w-3xl m-auto my-12">
      <div className="grid grid-cols-3 gap-4">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </main>
  );
};
