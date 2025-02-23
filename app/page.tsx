"use client";

import getDigit from "@/implementations/sorting/radix/steele";

console.log(getDigit(12345, 5));

export default function Home() {
    return (
        <div className="h-[100vh] flex items-center justify-center u">
            <h1 className="capitalize text-2xl">data structures</h1>
        </div>
    );
}
