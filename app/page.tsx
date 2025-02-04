"use client";

// import HashTable from "@/implementations/hash-tables/barrett";
import Graph from "@/implementations/graphs/barrett";

const newGraph = new Graph();
console.log(newGraph);

console.log(newGraph.addVertex("A"));
console.log(newGraph.addVertex("B"));
console.log(newGraph.addVertex("C"));
console.log(newGraph.addVertex("D"));

console.log(newGraph.addEdge("A", "B"));
console.log(newGraph.addEdge("A", "C"));
console.log(newGraph.addEdge("A", "D"));

console.log(newGraph.addEdge("B", "D"));

console.log(newGraph.addEdge("C", "D"));
console.log(newGraph);

console.log(newGraph.removeVertex("D"));
console.log(newGraph);

console.log(newGraph.removeVertex("E"));
console.log(newGraph);

export default function Home() {
    return (
        <div className="h-[100vh] flex items-center justify-center u">
            <h1 className="capitalize text-2xl">data structures</h1>
        </div>
    );
}
