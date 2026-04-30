"use client";

import { Loader2 } from "lucide-react";
import { useState } from "react";

export function ResumeViewer({ src, title }: { src: string; title: string }) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="relative h-[80vh] min-h-[32rem] bg-zinc-950/5 dark:bg-black/20">
            {!loaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <Loader2
                        size={28}
                        className="animate-spin text-zinc-400 dark:text-zinc-500"
                    />
                </div>
            )}
            <iframe
                src={src}
                title={title}
                className={`h-full w-full transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
                allow="autoplay"
                onLoad={() => setLoaded(true)}
            />
        </div>
    );
}
