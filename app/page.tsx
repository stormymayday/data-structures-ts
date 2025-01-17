"use client";

import HashTable from "@/implementations/hash-tables/barrett";

const myHashTable = new HashTable();
console.log(myHashTable);
myHashTable.set("grapes", 123);
console.log(myHashTable);
console.log(myHashTable.get("banana"));
console.log(myHashTable.get("grapes"));

export default function Home() {
    return (
        <div className="h-[100vh] flex items-center justify-center u">
            <h1 className="capitalize text-2xl">data structures</h1>
        </div>
    );
}
