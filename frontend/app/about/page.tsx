import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaCode, FaUsers, FaRocket } from "react-icons/fa"; // Importing icons for visual appeal

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-100">

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

      {/* About Overview Section */}
      <section className="w-full max-w-screen-lg mx-auto text-center p-10 mt-16 bg-white rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold text-gray-800">About Us</h1>
        <p className="text-gray-600 mt-4">
          At CloudCode, we are transforming the way developers collaborate and code. Our platform is designed to empower teams and enhance productivity.
        </p>
      </section>

      {/* Mission Section */}
      <section className="w-full max-w-screen-lg mx-auto text-center p-10 mt-8 bg-blue-100 rounded-lg shadow-lg">
        <h2 className="text-4xl font-semibold text-blue-700">Our Mission</h2>
        <p className="text-gray-700 mt-2">
          To revolutionize coding through collaboration and innovation, making it accessible and enjoyable for everyone.
        </p>
      </section>

      {/* Cards Section */}
      <section className="w-full max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 p-6">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-6 transform transition-transform duration-300 hover:scale-105">
          <div className="flex items-center justify-center mb-4">
            <FaCode className="text-blue-500 text-5xl" />
          </div>
          <h3 className="text-xl font-semibold">Innovative Solutions</h3>
          <p className="text-gray-600 mt-2">
            We provide cutting-edge tools that enhance the coding experience and foster collaboration.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-6 transform transition-transform duration-300 hover:scale-105">
          <div className="flex items-center justify-center mb-4">
            <FaUsers className="text-blue-500 text-5xl" />
          </div>
          <h3 className="text-xl font-semibold">Community Driven</h3>
          <p className="text-gray-600 mt-2">
            Our platform is built with input from developers around the world, ensuring it meets real needs.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-6 transform transition-transform duration-300 hover:scale-105">
          <div className="flex items-center justify-center mb-4">
            <FaRocket className="text-blue-500 text-5xl" />
          </div>
          <h3 className="text-xl font-semibold">Fast and Efficient</h3>
          <p className="text-gray-600 mt-2">
            Our tools are designed for speed, allowing you to focus on what really matters: your code.
          </p>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="bg-white w-full max-w-screen-lg mx auto text-center p-10 mt-12 rounded-lg shadow-lg">
        <h2 className="text-4xl font-semibold text-gray-800">Join Us</h2>
        <p className="text-gray-600 mt-2">
          We are always on the lookout for talented individuals who share our passion for coding and collaboration. 
          If you're interested in joining our team, we would love to hear from you!
        </p>
        <Link href="/sign-up">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-200 mt-4">
            Get Involved
          </Button>
        </Link>
      </section>

    </div>
  );
}