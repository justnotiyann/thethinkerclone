import cn from "./utils/cn";

function App() {
    const books = [
        {
            image: "https://api.thethinker.design/storage/library/2024-11-03-14:17:07-y4vkZfJfLM.png",
            category: "upcoming",
            title: "First Steps to Mastery",
        },
        {
            image: "https://api.thethinker.design/storage/library/2024-11-03-13:14:16-4cFqXx5UGU.png",
            category: "upcoming",
            title: "Feeling Matter",
        },
        {
            image: "https://api.thethinker.design/storage/library/2024-11-03-13:07:18-8iqXBl2SY0.png",

            category: "upcoming",
            title: "The Idea Spectrum",
        },
        {
            image: "https://api.thethinker.design/storage/library/2024-11-03-13:03:31-CjRquxxh85.png",

            category: "upcoming",
            title: "Depth in Information Architecture",
        },
        {
            image: "https://api.thethinker.design/storage/library/2024-11-03-12:59:41-Tt2mlw1Y0E.png",

            category: "upcoming",
            title: "Survive and Thrive",
        },
        {
            image: "https://api.thethinker.design/storage/library/2024-11-03-12:54:23-JYUKgyUrtY.png",
            category: "upcoming",
            title: "The Systemic Designer",
        },
        {
            image: "https://api.thethinker.design/storage/library/2024-11-03-12:21:38-qt0uIlSZCH.png",
            category: "upcoming",
            title: "The Systemic Designer",
        },
        {
            image: "https://api.thethinker.design/storage/library/2024-11-03-12:47:49-Ov769SAnhl.png",

            category: "upcoming",
            title: "The Systemic Designer",
        },
    ];
    return (
        <div className={cn("bg-[#0F1A24] text-[#FAFAFA]")}>
            <div className="container mx-auto p-10">
                <div className="mb-10 grid grid-cols-2 items-center justify-center gap-10">
                    <div className="col-span-2 md:col-span-1">
                        <p className="mb-8 uppercase">welcome to</p>
                        <h1 className="mb-3 text-2xl font-extrabold capitalize md:text-5xl">
                            the thinker{" "}
                            <span className="text-pink-400">library.</span>
                        </h1>
                        <p>
                            A collection of UI/UX design learning resources.
                            Equipped with educational and detailed explanations.
                        </p>
                    </div>

                    <div className="col-span-2 md:col-span-1">
                        <form action="#" method="post">
                            <div className="relative">
                                {/* add transitioion when input clicked */}
                                <input
                                    type="text"
                                    name="search"
                                    className="w-full rounded-md bg-[#08111A] px-10 py-4 placeholder-gray-400 shadow-sm focus:outline-none"
                                    id="search"
                                    placeholder="Search library or content"
                                />
                                {/* make this button center top and bottom by translate them */}
                                <button
                                    type="submit"
                                    className="focus:ring- absolute right-4 top-1/2 -translate-y-1/2 rounded-md bg-[#FBB800] px-3 py-1.5 text-black shadow-sm transition-colors ease-in-out hover:bg-indigo-500 focus:outline-none focus:ring-blue-800 sm:text-sm"
                                >
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="hide-scrollbar col-span-2 my-10 mb-10 flex gap-5 overflow-x-auto font-bold">
                    <div className="shrink-0 rounded-md border bg-[#1F2A36] px-10 py-3 hover:cursor-pointer">
                        All
                    </div>
                    <div className="shrink-0 rounded-md border px-10 py-3 hover:cursor-pointer hover:bg-[#1F2A36]">
                        Case Study
                    </div>
                    <div className="shrink-0 rounded-md border px-10 py-3 hover:cursor-pointer hover:bg-[#1F2A36]">
                        Masterclass
                    </div>
                    <div className="shrink-0 rounded-md border px-10 py-3 hover:cursor-pointer hover:bg-[#1F2A36]">
                        Modul UI/UX
                    </div>
                    <div className="shrink-0 rounded-md border px-10 py-3 hover:cursor-pointer hover:bg-[#1F2A36]">
                        Pattern
                    </div>
                    <div className="shrink-0 rounded-md border px-10 py-3 hover:cursor-pointer hover:bg-[#1F2A36]">
                        Upcoming
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-10">
                    {books.map((book, index) => (
                        <div
                            key={index}
                            className="col-span-4 space-y-3 md:col-span-1"
                        >
                            <img
                                src={book.image}
                                alt={book.title}
                                className="rounded-r-xl"
                            />

                            <div className="font-bold">
                                <p className="uppercase text-[#2FAB4D]">
                                    {book.category}
                                </p>
                                <p className="capitalize">{book.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
