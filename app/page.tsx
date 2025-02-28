"use client";

// import SinglyLinkedList from "@/implementations/data-structures/linked-lists/sll/steele";
// const singlyLinkedList = new SinglyLinkedList();
// singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
// console.log(singlyLinkedList.head.val); // 5
// console.log(singlyLinkedList.tail.val); // 25;
// console.log(singlyLinkedList.toArray());
// singlyLinkedList.rotate(3);
// console.log(singlyLinkedList.toArray());
// console.log(singlyLinkedList.head.val); // 20
// console.log(singlyLinkedList.head.next.val); // 25
// console.log(singlyLinkedList.head.next.next.val); // 5
// console.log(singlyLinkedList.head.next.next.next.val); // 10
// console.log(singlyLinkedList.head.next.next.next.next.val); // 15
// console.log(singlyLinkedList.tail.val); // 15
// console.log(singlyLinkedList.tail.next); // null

// const singlyLinkedList2 = new SinglyLinkedList();
// singlyLinkedList2.push(5).push(10).push(15).push(20).push(25);
// console.log(singlyLinkedList2.head.val); // 5
// console.log(singlyLinkedList2.tail.val); // 25;
// console.log(singlyLinkedList2.toArray());
// singlyLinkedList2.rotate(-1);
// console.log(singlyLinkedList2.toArray());
// console.log(singlyLinkedList2.head.val); // 25
// console.log(singlyLinkedList2.head.next.val); // 5

export default function Home() {
    return (
        <div className="h-[100vh] flex items-center justify-center u">
            <h1 className="capitalize text-2xl">data structures</h1>
        </div>
    );
}
