"use client";

import MaxHeap from "@/implementations/trees/heaps/barrett";
const myHeap = new MaxHeap();
myHeap.insert(99);
myHeap.insert(72);
myHeap.insert(61);
myHeap.insert(58);

console.log(myHeap.getHeap());
myHeap.insert(100);
console.log(myHeap.getHeap());
myHeap.insert(75);
console.log(myHeap.getHeap());

export default function Home() {
    return (
        <div className="h-[100vh] flex items-center justify-center u">
            <h1 className="capitalize text-2xl">data structures</h1>
        </div>
    );
}
