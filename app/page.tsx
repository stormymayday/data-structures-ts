"use client";

import ArrayList from "@/implementations/data-structures/array-list/mine";

const myList = new ArrayList();
// console.log(myList);
myList.push("first item");
myList.push("second item");

console.log(myList);
console.log(myList.shift());
console.log(myList);
console.log(myList.shift());
console.log(myList);

export default function Home() {
    return (
        <div className="h-[100vh] flex items-center justify-center u">
            <h1 className="capitalize text-2xl">data structures</h1>
        </div>
    );
}
