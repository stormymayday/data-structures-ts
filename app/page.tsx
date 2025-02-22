"use client";

import quickSort from "@/implementations/sorting/quick/barrett";

console.log(quickSort([5, 1, 5, 5, 5]));

export default function Home() {
    return (
        <div className="h-[100vh] flex items-center justify-center u">
            <h1 className="capitalize text-2xl">data structures</h1>
        </div>
    );
}
