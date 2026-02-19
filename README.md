# FAU-EXAM-SURVIVAL-README
Overview:
FAU Exam Survival is a web application that generates structured, exam-specific study plans for FAU students. Instead of generic AI responses, this tool creates a personalized survival plan based on:
  * The exact units on the exam
  * The number of days available
  * The student's available study hours
The system ensures that 100% of exam content is covered, distributed proportionally across the time available. 

Core Concept:
The study plan engine works as follows:
  1. User selects which units are on the exam.
  2. The selected units represent 100% of the exam scope.
  3. The total available study time is calculated.
  4. Each unit is assigned a percentage of effort.
  5. That effort is distributed across the exact number of study days.
This ensures:
  * No arbitrary 10-day template
  * No under-coverage
  * No wasted time
  * Full exam scope coverage

MVP Scope
Version 1 includes
  * Single course: FAU Chemistry I
  * Manual syllabus unit structure
  * Unit selection checklist
  * Exam date input
  * Hours per week input
  * Dynamic study plan generation
Not included in MVP
  * Chat assistant
  * Document uploads
  * Stripe payments
  * Multi-course support

Tech Stack
  * Next.js (App Router)
  * Tailwind CSS
  * GitHub Codespaces
  * Supabase
  * OpenAI API
  * Stripe

Current Status
  * Project scaffolded
  * Homepage built
  * Setup page built
  * Navigation flow working
  * Plan engine logic defined 
