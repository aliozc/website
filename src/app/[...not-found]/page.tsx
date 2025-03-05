import React from "react";
import { Pixelify_Sans } from "next/font/google"
import Button from "../../components/Button";

const pixelify = Pixelify_Sans(
  {
    weight: "400",
    subsets: ['latin'],
    display: "swap"
  }
)

export default function Home() {
  return (
    <div>
        <div className="flex w-full h-96">
            <div className="m-auto text-center">
                <h1 className={"duration-100 font-bold text-8xl cursor-pointer select-none active:scale-95 animate-pulse "+pixelify.className}>404</h1>
                <p className="text-gray-600">Sorry, whoever you are!<br/>The page you're looking for is in another castle.</p>
                <div className="mt-4">
                  <Button text="← Go Back" href="/"/>
                </div>
            </div>
        </div>
    </div>
  );
}