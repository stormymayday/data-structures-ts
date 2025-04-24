"use client";

import BST from "@/implementations/data-structures/trees/bst/barrett";

const tree = new BST();

console.log(tree);

tree.insert(5);
tree.insert(3);
tree.insert(6);
tree.insert(2);
tree.insert(7);
tree.insert(4);
tree.insert(9);

console.log(tree.BFS());

export default function Home() {
    return (
        <div className="h-[100vh] flex items-center justify-center u">
            <h1 className="capitalize text-2xl">data structures</h1>
        </div>
    );
}
