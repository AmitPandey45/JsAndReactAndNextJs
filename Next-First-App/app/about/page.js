"use client";
import { useSearchParams } from "next/navigation";

export default function About() {
  const searchParams = useSearchParams();
  const player = searchParams.get("player");
  const plr = JSON.parse(player);
  console.log(plr.name);
  console.log(searchParams);
  return (
    <>
      <h1>name: {plr.name}</h1>
      <h1>category: {plr.category}</h1>
    </>
  );
}
