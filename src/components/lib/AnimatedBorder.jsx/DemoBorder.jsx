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
          href="https://docs.google.com/document/d/1TjPu4unx53HBmODwUeWskFzsyCUAk1iDBx7J7NBCoCQ/edit?usp=sharing"
          target="_blank"
        >
          GET RESUME
        </a>
      </Button>
    </div>
  );
}
