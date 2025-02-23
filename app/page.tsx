"use client";

import { radixSort } from "@/implementations/sorting/radix/steele";

console.log(radixSort([23, 346, 5563, 12, 2321, 9032]));

export default function Home() {
    return (
        <div className="h-[100vh] flex items-center justify-center u">
            <h1 className="capitalize text-2xl">data structures</h1>
        </div>
    );
}
