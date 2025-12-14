"use client";
import Image from "next/image"; 
import JollyOrpheusClick from "./src/components/JollyOrpheusClick";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex min-h-screen flex-col items-center justify-between py-32 px-16 font-sans">
        <div className="flex flex-col items-center gap-6 text-center font-sans">
          <h1 className={"text-6xl self-center my-10"}>Haxmas Day 1: Jolly counter</h1>
          <p className={"text-3xl font-bold"}>jolly count: {count}</p>
          <JollyOrpheusClick onClick={() => {setCount(count + 1)}} />
        </div>
      </main>
    </div>
  );
}