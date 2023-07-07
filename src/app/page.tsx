'use client'
import { useRouter } from 'next/navigation'

const buttons = [
  {
    label: "Register",
    color: "slate",
    path: "/register",
  },
  {
    label: "Approve",
    color: "green",
    path: "",
  },
  {
    label: "Decline",
    color: "rose",
    path: "",
  },
  {
    label: "Revise",
    color: "blue",
    path: "",
  },
  {
    label: "Add Credits",
    color: "violet",
    path: "",
  },
];

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col justify-center">
        {buttons.map((btn, idx) => (
          <button
            className={`my-2 bg-${btn.color}-400 rounded w-60 p-4 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-${btn.color}-500 duration-300`}
            key={idx}
            onClick={() => router.push(btn.path)}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </main>
  );
}
