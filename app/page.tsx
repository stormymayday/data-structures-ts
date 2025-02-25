"use client";

import SinglyLinkedList from "@/implementations/data-structures/linked-lists/sll/steele";

const mySLL = new SinglyLinkedList();
console.log(mySLL);
console.log(mySLL.push(1));
console.log(mySLL.push(2));
console.log(mySLL.push(3));

console.log(mySLL.shift());
console.log(mySLL.shift());
console.log(mySLL.shift());
console.log(mySLL.shift());

export default function Home() {
    return (
        <div className="h-[100vh] flex items-center justify-center u">
            <h1 className="capitalize text-2xl">data structures</h1>
        </div>
    );
}
