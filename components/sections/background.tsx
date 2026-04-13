"use client";

import { useEffect, useState } from "react";

export function Background() {
    const [noiseUrl, setNoiseUrl] = useState<string | null>(null);

    useEffect(() => {
        const size = 128;
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const imageData = ctx.createImageData(size, size);
        const pixels = imageData.data;
        for (let i = 0; i < pixels.length; i += 4) {
            const v = Math.random() * 255;
            pixels[i] = v;
            pixels[i + 1] = v;
            pixels[i + 2] = v;
            pixels[i + 3] = 15;
        }
        ctx.putImageData(imageData, 0, 0);
        setNoiseUrl(canvas.toDataURL("image/png"));
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 z-0">
            {/* Mesh gradient — stacked radial gradients, no blur filter */}
            <div className="bg-mesh absolute inset-0" />

            {/* Noise texture */}
            {noiseUrl && (
                <div
                    className="absolute inset-0 opacity-[0.2] mix-blend-soft-light dark:opacity-[0.35]"
                    style={{
                        backgroundImage: `url(${noiseUrl})`,
                        backgroundRepeat: "repeat",
                    }}
                />
            )}
        </div>
    );
}
