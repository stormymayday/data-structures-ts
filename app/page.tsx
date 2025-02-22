"use client";

// import quickSort from "@/implementations/sorting/quick/barrett";
import quickSort from "@/implementations/sorting/quick/steele";

console.log(quickSort([4, 2, 3, 5, 0, 2, 6]));

export default function Home() {
    return (
        <div className="h-[100vh] flex items-center justify-center u">
            <h1 className="capitalize text-2xl">data structures</h1>
        </div>
    );
}
