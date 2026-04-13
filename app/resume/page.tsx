"use client";

import { useEffect } from "react";

const RESUME_URL =
    "https://drive.google.com/file/d/1HNx8Np1vqd-jLSQA8NtIrmyuuK82luDw/view?usp=drive_link";

export default function ResumePage() {
    useEffect(() => {
        window.location.href = RESUME_URL;
    }, []);

    return null;
}
