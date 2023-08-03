"use client";

import { useRouter } from "next/navigation";

interface Props {
    children: React.ReactNode,
}

const ButtonBack = ({children}: Props) => {

  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      type="button"
      className="rounded p-1 bg-gradient-to-r from-pink-500 to-yellow-500 text-white hover:from-green-400 hover:to-blue-500"
    >
      {children}
    </button>
  );
};
export default ButtonBack;
