"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export function NoTripPlanned({
  dispatch,
}: {
  dispatch: (formData: FormData) => void;
}) {
  return (
    <div className="grid grid-cols-4 gap-4 pt-8">
      <ExampleTrip
        alt="Plan a trip to Paris"
        content="Paris Trip, 3 days, honeymoon, romantic"
        onClick={dispatch}
      />
      <ExampleTrip
        alt="Plan a trip to Tokyo"
        content="Tokyo Trip, 5 days, family, fun"
        onClick={dispatch}
      />
      <ExampleTrip
        alt="Plan a trip to Brussels"
        content="Brussels Trip, 2 days, business, work"
        onClick={dispatch}
      />
      <ExampleTrip
        alt="Plan a trip to Charleroi"
        content="Charleroi Trip, 1 day, weekend, getaway, relaxation, treurtrip"
        onClick={dispatch}
      />
      <ExampleTrip
        alt="Plan a trip to Almere and Lelystad"
        content="Flevoland Trip, 4 days, nature, outdoors, city planning, urbanism, architecture"
        onClick={dispatch}
      />
    </div>
  );
}

function ExampleTrip({
  alt,
  content,
  onClick,
}: {
  alt: string;
  content: string;
  onClick: (formData: FormData) => void;
}) {
  const { pending } = useFormStatus();

  const handleClick = () => {
    const formData = new FormData();
    formData.set("prompt", content);
    onClick(formData);
  };
  return (
    <Button
      type="button"
      variant="outline"
      size="lg"
      onClick={handleClick}
      className="whitespace-normal h-auto py-4"
      disabled={pending}
    >
      <span className="sr-only">{alt}</span>
      {content}
    </Button>
  );
}
