"use client";

import selectionSort from "@/implementations/sorting/selection/steele";

console.log(selectionSort([3, 2, 1, 5]));

export default function Home() {
    return (
        <div className="h-[100vh] flex items-center justify-center u">
            <h1 className="capitalize text-2xl">data structures</h1>
        </div>
    );
}
