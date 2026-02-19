"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SetupPage() {
    const router = useRouter();
    const [examDate, setExamDate] = useState("");
    const [hoursPerWeek, setHoursPerWeek] = useState("");

    const handleSubmit = () => {
        if (!examDate || !hoursPerWeek) return;
        router.push(`/units?examDate=${examDate}&hours=${hoursPerWeek}`);
    };

    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-3x1 font-bold mb-6">Set Up Your Exam Plan</h1>

            <div className="flex flex-col gap-4 w-80">
                <input
                    type="date"
                    value={examDate}
                    onChange={(e) => setExamDate(e.target.value)}
                    className="p-3 border rounded"
                />

                <input
                    type="number"
                    placeholder="Hours per week"
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(e.target.value)}
                    className="p-3 border rounded"
                />

                <button
                    onClick={handleSubmit}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                    Generate Plan
                </button>
            </div>
        </main>
    );
    }