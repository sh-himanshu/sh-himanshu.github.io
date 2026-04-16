"use client";

import { useEffect } from "react";

const RESUME_URL =
    "https://drive.google.com/file/d/1z25g_YtDveVP9LJhLMH5ikEJeAXFKjhS/view?usp=sharing";

export default function ResumePage() {
    useEffect(() => {
        window.location.href = RESUME_URL;
    }, []);

    return null;
}
