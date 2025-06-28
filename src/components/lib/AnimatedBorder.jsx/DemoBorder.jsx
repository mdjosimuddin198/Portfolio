import React from "react";
import { Button } from "./AnimatedBorder";
// import { Button } from "../ui/moving-border";

export function DemoBorder() {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className=" py-0 bg-slate-900  text-[#ff014f]  border-slate-800 hover:scale-125"
      >
        <a
          href="https://drive.google.com/file/d/1pVfXS4VaOuIlqJJwJ6zJbqXbXGkEf0Pz/view"
          target="_blank"
        >
          GET RESUME
        </a>
      </Button>
    </div>
  );
}
