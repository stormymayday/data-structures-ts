"use client";

import BST from "@/implementations/data-structures/trees/bst/barrett";

const tree = new BST();

// console.log(tree);

console.log(tree.rInsert(5));
console.log(tree.rInsert(5));
console.log(tree.rInsert(1));
console.log(tree.rInsert(6));
console.log(tree.rInsert(2));
console.log(tree.rInsert(8));

console.log(tree.DFSInOrder());

tree.deleteNode(5);
console.log(tree);

console.log(tree.DFSInOrder());

export default function Home() {
    return (
        <div className="h-[100vh] flex items-center justify-center u">
            <h1 className="capitalize text-2xl">data structures</h1>
        </div>
    );
}
