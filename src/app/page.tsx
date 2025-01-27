import Image from "next/image";
import NavBar from './components/Navbar';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <main className="flex flex-col items-center justify-center flex-grow p-8 gap-16 sm:p-20">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <p className="text-center text-gray-700 dark:text-gray-300">
          Welcome to BoulevardX Navigate to Appointments to view your schedule.
        </p>
      </main>

      <footer className="flex items-center justify-center h-16 bg-gray-100 text-sm text-gray-500 dark:bg-gray-800 dark:text-gray-400">
        © 2025 MyApp. All rights reserved.
      </footer>
    </div>
  );
}
