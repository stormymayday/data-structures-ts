"use client";

import SinglyLinkedList from "@/implementations/data-structures/linked-lists/sll/steele";

const myLinkedList = new SinglyLinkedList();
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
console.log(myLinkedList.toArray());
myLinkedList.rotateRight(2);
console.log(myLinkedList.toArray());

export default function Home() {
    return (
        <div className="h-[100vh] flex items-center justify-center u">
            <h1 className="capitalize text-2xl">data structures</h1>
        </div>
    );
}
