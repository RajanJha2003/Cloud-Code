import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Features() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-50">
      
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg w-full">
        <div className="flex items-center justify-between max-w-screen-md mx-auto px-8 py-4">
          <div className="text-3xl font-bold text-white">CloudCode</div>
          <nav className="space-x-6">
            <Link href="/" className="text-white hover:text-yellow-300 transition duration-200">Home</Link>
            <Link href="/features" className="text-white hover:text-yellow-300 transition duration-200">Features</Link>
            <Link href="/about" className="text-white hover:text-yellow-300 transition duration-200">About</Link>
            <Link href="/sign-up">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition duration-200">
                Sign Up
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Features Content */}
      <div className="flex flex-col items-center justify-center w-full max-w-screen-md px-8 mx-auto text-center mt-16">
        <h1 className="text-4xl font-bold text-gray-800">Features</h1>
        <p className="text-gray-500 mt-4">
          Discover the powerful features that make CloudCode the ultimate coding platform for collaboration and productivity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Feature Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl">
                🌐
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-gray-700">Real-Time Collaboration</h2>
            <p className="text-gray-500 mt-2">
              Work together with your team in real-time, making coding more efficient and enjoyable. 
              See changes as they happen and communicate seamlessly.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl">
                🤖
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-gray-700">AI-Powered Suggestions</h2>
            <p className="text-gray-500 mt-2">
              Leverage AI to get code suggestions, error detection, and optimization tips, helping you write better code faster.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl">
                ⚙️
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-gray-700">Customizable Environment</h2>
            <p className="text-gray-500 mt-2">
              Tailor your coding environment to fit your preferences with themes, layouts, and extensions that enhance your workflow.
            </p>
          </div>

          {/* Feature Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl">
                📦
              </div>
            </div>
            <h2 className="text-2 xl font-semibold text-gray-700">Integrated Version Control</h2>
            <p className="text-gray-500 mt-2">
              Keep track of your code changes with built-in version control, making it easy to collaborate and revert to previous versions.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Link href="/sign-up">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-200">
              Start Coding Today
            </Button>
          </Link>
        </div>
      </div>

    </div>
  );
}