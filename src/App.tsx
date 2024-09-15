<<<<<<< HEAD
function App() {
    return (
        <main className="app">
            <button className="btn btn-danger"></button>
=======
import { useState } from "react";
import cn from "./utils/cn";

function App() {
    return (
        <main
            className={cn(
                "flex h-screen items-center justify-center bg-gray-500/10",
            )}
        >
            <h1 className="text-2xl font-bold">
                Boilterplate by{" "}
                <a
                    href="https://www.shousyadev.my.id/"
                    className="text-violet-800"
                >
                    Shousyadev
                </a>
            </h1>
>>>>>>> parent of 43f22b4... first commit
        </main>
    );
}

export default App;
