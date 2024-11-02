export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-center text-5xl font-bold">
        Welcome to{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
          GymAI
        </span>
      </h1>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
        Get Started
      </button>
    </div>
  );
}