import { clsx } from "clsx";
import { Minus, Plus, Star } from "lucide-react";
import { useEffect, useState } from "react";

export const Hero = () => {
    const [count, setCount] = useState(1);

    const setCountToLocalStorate = (value: number) => {
        setCount(value);
        localStorage.setItem("count", value.toString());
    };

    useEffect(() => {
        if (localStorage.getItem("count")) {
            setCount(parseInt(localStorage.getItem("count")!));
        }
    }, []);

    const [imageIndex, setImageIndex] = useState(0);

    const kursiImage = [
        "kursi/kursi-1.webp",
        "kursi/kursi-2.webp",
        "kursi/kursi-3.webp",
    ];

    return (
        <section id="hero" className="mt-32 grid grid-cols-2 px-10 md:px-20">
            <div className="col-span-2 md:col-span-1">
                <div className="w-full">
                    <h1 className="font-Proxima text-4xl font-semibold md:text-5xl">
                        Meryl Lounge Chair
                    </h1>

                    <div className="mb-5 mt-6 flex items-center justify-between md:mb-12">
                        <p className="font-Proxima text-md font-semibold">
                            $149.99
                        </p>
                        <div className="flex items-center">
                            {[0, 1, 2, 3, 5].map((index) => (
                                <Star
                                    key={index}
                                    className="h-3 w-3 border-none text-yellow-400 outline-none"
                                    fill="#facc15"
                                />
                            ))}
                            <p className="ml-3 text-xs md:text-base">
                                4.6 / 5.0{" "}
                                <span className="text-gray-500">(556)</span>
                            </p>
                        </div>
                    </div>

                    <p className="font-Poppins text-brand-space-cadet text-base font-normal">
                        The gently curved lines accentuated by sewn details are
                        kind to your body and pleasant to look at. Also, there's
                        a tilt and height-adjusting mechanism that's built to
                        outlast years of ups and downs.
                    </p>

                    <div className="mb-8 mt-12 flex flex-col items-start gap-4 md:flex-row md:items-center">
                        <div className="flex items-center justify-between gap-x-10 rounded border px-10 py-3">
                            <Minus
                                onClick={() =>
                                    setCountToLocalStorate(count - 1)
                                }
                                className="cursor-pointer"
                            />
                            {count}
                            <Plus
                                onClick={() =>
                                    setCountToLocalStorate(count + 1)
                                }
                                className="cursor-pointer"
                            />
                        </div>

                        <button className="bg-brand-verdigris rounded px-10 py-3 font-medium text-white">
                            Add to cart
                        </button>
                    </div>
                    <div>
                        <p>
                            Free 3-5 day shipping • Tool-free assembly • 30-day
                            trial
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-span-2 md:col-span-1">
                <img
                    src={kursiImage[imageIndex]}
                    alt="kursi"
                    className="mx-auto mb-5 w-1/2"
                />

                <div className="flex items-center justify-center gap-5">
                    {kursiImage.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt="kursi"
                            className={clsx(
                                "w-20 cursor-pointer rounded-lg border-2",
                                imageIndex === index
                                    ? "border-brand-verdigris"
                                    : "",
                            )}
                            onClick={() => setImageIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
