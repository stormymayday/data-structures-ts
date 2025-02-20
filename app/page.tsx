"use client";

import merge from "@/implementations/sorting/merge/steele";

console.log(merge([1, 2, 3, 5], [0, 2, 6]));

export default function Home() {
    return (
        <div className="h-[100vh] flex items-center justify-center u">
            <h1 className="capitalize text-2xl">data structures</h1>
        </div>
    );
}
