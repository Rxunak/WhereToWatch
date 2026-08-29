import React from "react";
import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router";

function movie() {
  const navigate = useNavigate();
  return (
    <main className="bg-white min-h-screen p-10">
      <section
        className="flex gap-3 text-amber-700 cursor-pointer"
        onClick={() => navigate("/search")}
      >
        <MoveLeft />
        <h1>Back to results</h1>
      </section>
      <section></section>
    </main>
  );
}

export default movie;
