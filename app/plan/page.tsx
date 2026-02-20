"use client";

import {useSearchParams} from "next/navigation";

export default function PlanPage() {
    const searchParams = useSearchParams();

    const examDate = searchParams.get("examDate");
    const hours = searchParams.get("hours");
    const unitsParam = searchParams.get("units");
    
    // Get today's date (strip time)
    const today = new Date();
    today.setHours(0,0,0,0);

    let exam = new Date();
    if (examDate) {
        const [y, m, d] = examDate.split("-").map(Number);
        exam = new Date(y, m-1, d); //month is 0 based
        exam.setHours(0,0,0,0);
    }

    //Calculate difference in days
    const msPerDay = 1000*60*60*24;
    let diffDays = Math.round((exam.getTime() - today.getTime()) / msPerDay);

    // Rules to be applied:
    // -If exam is today, allow 1 study day
    // -Otherwise: studyDays = daysUntilExam (excludes exam day)
    let studyDays = diffDays;
    if (diffDays === 0) studyDays = 1;
    if (diffDays === 0) studyDays = 1;
    if (diffDays < 0) studyDays = 1;

    
    // Handles review day rule
    // - If StudyDays >= 2 then the last day is a review/quiz and the other days are content review
    let contentDays = studyDays;
    let hasReviewDay = false;

    if (studyDays >= 2) {
        contentDays = studyDays - 1;
        hasReviewDay = true;
    }
    return (
        <div>
            <h1>Your Plan</h1>
            <p>Exam Date: {examDate}</p>
            <p>Hours Per Week: {hours}</p>
            <p>Units: {unitsParam} </p>
            <p>Days Until Exam: {diffDays}</p>
            <p>Study Days: {studyDays}</p>
            <p>Content Days: {contentDays}</p>
            <p>Has Review Day: {String(hasReviewDay)}</p>

        </div>
    );

}

