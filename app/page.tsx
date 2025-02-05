"use client";

import MaxHeap from "@/implementations/trees/heaps/barrett";
const myHeap = new MaxHeap();
myHeap.insert(99);
myHeap.insert(75);
myHeap.insert(80);
myHeap.insert(55);
myHeap.insert(60);
myHeap.insert(50);
myHeap.insert(65);

console.log(myHeap.getHeap());

myHeap.remove();
console.log(myHeap.getHeap());

myHeap.remove();
console.log(myHeap.getHeap());

export default function Home() {
    return (
        <div className="h-[100vh] flex items-center justify-center u">
            <h1 className="capitalize text-2xl">data structures</h1>
        </div>
    );
}
