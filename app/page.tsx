"use client";

// import HashTable from "@/implementations/hash-tables/barrett";
import Graph from "@/implementations/graphs/barrett";

const newGraph = new Graph();
console.log(newGraph);

console.log(newGraph.addVertex("A"));
console.log(newGraph);
console.log(newGraph.addVertex("B"));
console.log(newGraph);
console.log(newGraph.addVertex("C"));
console.log(newGraph);
console.log(newGraph.addEdge("A", "B"));
console.log(newGraph);
console.log(newGraph.addEdge("A", "C"));
console.log(newGraph);
console.log(newGraph.addEdge("B", "C"));
console.log(newGraph);

console.log(newGraph.removeEdge("A", "B"));
console.log(newGraph);

console.log(newGraph.removeEdge("A", "C"));
console.log(newGraph);

console.log(newGraph.removeEdge("B", "C"));
console.log(newGraph);

export default function Home() {
    return (
        <div className="h-[100vh] flex items-center justify-center u">
            <h1 className="capitalize text-2xl">data structures</h1>
        </div>
    );
}
