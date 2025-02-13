"use client";

import binarySearch from "@/implementations/search/binary/mine";

console.log(binarySearch([1, 2, 3, 4, 5], 1));

export default function Home() {
    return (
        <div className="h-[100vh] flex items-center justify-center u">
            <h1 className="capitalize text-2xl">data structures</h1>
        </div>
    );
}
