export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="test-4x1 font-bold mb-4">
        FAU Chem Exam Survival
      </h1>

      <p className="text-lg text-gray-600 mb-8">
        Generate a structured survival plan for your next exam.
      </p>

      <a
        href="/setup" 
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Start Planning 
      </a>
    </main>
  );
}