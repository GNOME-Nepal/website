export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-gray-300 text-xl mb-6">
          Oops! The page you are looking for does not exist.
        </p>
        <a
          href="/"
          className="text-blue-500 hover:text-blue-400 underline text-lg"
        >
          Go back to Home
        </a>
      </div>
    </div>
  );
}
