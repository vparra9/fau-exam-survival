"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation"

//Create the Chem Units list
const CHEM_UNITS = [
    "Matter and Measurements",
    "Atoms and the Periodic Table",
    "Ionic and Covalent Compounds",
    "Chemical Reactions",
    "Energy and Matter",
    "Gases",
    "Solutions",
    "Acids and Bases",
    "Nuclear Chemistry",
    "Hydrocarbons",
    "Intro to Organic Molecules",
    "Carbohydrates",
    "Lipids",
    "Amino Acids, Proteins, and Enzymes",
    "Nucleic Acids and Protein Synthesis",
    "Energy and Metabolism"
]

//Create Units page and have it access examDate and hours
export default function UnitsPage() {
    const searchParams = useSearchParams();

    //Read examDate and hours
    const examDate = searchParams.get("examDate");
    const hours = searchParams.get("hours");

    //State to track selected units
    const[selectedUnits, setSelectedUnits] = useState <string[]>([]);

    //Create toggle function
    function toggleUnit(unit: string) {
    if (selectedUnits.includes(unit)) {
        setSelectedUnits(selectedUnits.filter((u) => u !== unit));
    } else {
        setSelectedUnits([...selectedUnits, unit]);
    }
    }

    //Displays examDate and hours, and the list of units with checkboxes
    return (
        <div>
            <h1>Select Units for the Exam</h1>
            
            {CHEM_UNITS.map((unit) => (
                <div key={unit}>
                    <label>
                        <input
                            type="checkbox"
                            checked={selectedUnits.includes(unit)}
                            onChange={() => toggleUnit(unit)}
                        />
                        {unit}
                    </label>
                </div>
            ))}
        </div>
    );
}