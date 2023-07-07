'use client'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  const buttons = [
    {
      label: "Register",
      path: "/register",
    },
    {
      label: "Approve",
      path: "",
    },
    {
      label: "Decline",
      path: "",
    },
    {
      label: "Revise",
      path: "",
    },
    {
      label: "Add Credits",
      path: "",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col justify-center">
        {buttons.map((btn, idx) => (
          <button
            className={`my-2 bg-slate-400 rounded w-60 p-4 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-300`}
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
