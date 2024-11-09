import { Button } from "@/components/ui/button";
import Image from "next/image"; // Importing the Image component
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-screen overflow-hidden flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      
      {/* Stylish Header Section */}
      <header className="bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg dark:bg-gradient-to-r dark:from-blue-600 dark:to-blue-800">
        <div className="flex items-center justify-between max-w-screen-md mx-auto px-8 py-4">
          <div className="text-3xl font-bold text-white">CloudCode</div>
          <nav className="space-x-6">
            <Link href="/" className="text-white hover:text-yellow-300 transition duration-200 dark:hover:text-yellow-400">Home</Link>
            <Link href="/features" className="text-white hover:text-yellow-300 transition duration-200 dark:hover:text-yellow-400">Features</Link>
            <Link href="/about" className="text-white hover:text-yellow-300 transition duration-200 dark:hover:text-yellow-400">About</Link>
            <Link href="/sign-up">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition duration-200 dark:bg-yellow-400 dark:hover:bg-yellow-500">
                Sign Up
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <div className="flex flex-col items-center justify-center w-full max-w-screen-md px-8 mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mt-32 dark:text-gray-200">
          Collaborative Cloud Code Editor
        </h1>
        <h2 className="text-xl font-semibold text-gray-600 mt-2 dark:text-gray-400">
          AI Powered, Auto-Scaling Copilot
        </h2>
        <p className="text-gray-500 mt-4 dark:text-gray-300">
          A virtual box code editing environment with custom AI code autocompletion and real-time collaboration.
        </p>
        <div className="mt-8">
          <Link href={"/sign-up"}>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-200 dark:bg-blue-500 dark:hover:bg-blue-600">
              Go To App
            </Button>
          </Link>
        </div>
      </div>

      {/* Image Banner */}
      <div className="relative w-full mt-12 aspect-video max-w-screen-md mx-auto">
        <Image
          src="/banner.jpg" // Path to your image in the public folder
          alt="Collaborative Cloud Code Editor"
          layout="responsive" // This makes the image responsive
          width={800} // Set a width
          height={200} // Set a height
          className="rounded-lg shadow-lg" // Optional styling
        />
      </div>

      {/* Testimonials Section */}
      <div className="w-full max-w-screen-lg px-8 mt-24 mx-auto bg-gray-100 rounded-lg shadow-lg p-8 dark:bg-gray-800 dark:text-gray-200">
        <h2 className="text-3xl font-semibold text-gray-800 text-center dark:text-gray-100">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Testimonial Cards */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200 dark:bg-gray-700 dark:hover:shadow-2xl">
            <p className="text-gray-600 italic dark:text-gray-300">"CloudCode has transformed the way our team collaborates on projects. The real-time editing feature is a game changer!"</p>
            <div className="mt-4 flex items-center">
              {/* Random Image for User 1 */}
              <Image 
                src={`https://picsum.photos/50?random=1`} 
                alt="User 1" 
                width={50} 
                height={50} 
                className="rounded-full" 
              />
              <div className="ml-3">
                <p className="font-semibold text-white">Alice Johnson</p>
                <p className="text-gray-500 text-sm">Software Engineer</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200 dark:bg-gray-700 dark:hover:shadow-2xl">
            <p className="text-gray-600 italic dark:text-gray-300">"The AI code autocompletion saves me so much time. I can't imagine going back to coding without it!"</p>
            <div className="mt-4 flex items-center">
              {/* Random Image for User 2 */}
              <Image 
                src={`https://picsum.photos/50?random=2`} 
                alt="User 2" 
                width={50} 
                height={50} 
                className="rounded-full" 
              />
              <div className="ml-3">
                <p className="font-semibold text-white">Bob Smith</p>
                <p className="text-gray-500 text-sm">Web Developer</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200 dark:bg-gray-700 dark:hover:shadow-2xl">
            <p className="text-gray-600 italic dark:text-gray-300">"I love how easy it is to collaborate with my team. The interface is intuitive and user-friendly!"</p>
            <div className="mt-4 flex items-center">
              {/* Random Image for User 3 */}
              <Image 
                src={`https://picsum.photos/50?random=3`} 
                alt="User 3" 
                width={50} 
                height={50} 
                className="rounded-full" 
              />
              <div className="ml-3">
                <p className="font-semibold text-white">Charlie Brown</p>
                <p className="text-gray-500 text-sm">Project Manager</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200 dark:bg-gray-700 dark:hover:shadow-2xl">
            <p className="text-gray-600 italic dark:text-gray-300">"The auto-scaling feature is fantastic! I never have to worry about performance issues." </p>
            <div className="mt-4 flex items-center">
              {/* Random Image for User 4 */}
              <Image 
                src={`https://picsum.photos/50?random=4`} 
                alt="User 4" 
                width={50} 
                height={50} 
                className="rounded-full" 
              />
              <div className="ml-3">
                <p className="font-semibold text-white">Dana White</p>
                <p className="text-gray-500 text-sm">Data Scientist</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
