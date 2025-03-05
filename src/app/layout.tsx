import "./globals.css";
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Personal Website",
    description: "Self taught developer"
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className="relative min-h-[93vh] dark:bg-gray-900 dark:text-gray-200 after:block after:h-24 xl:px-0 md:px-5 px-0">
                <main>
                    <div className="bottom-0 mx-auto xl:w-1/2 lg:2/3 w-full my-5 md:px-0 px-5 mt-12">
                        {children}
                    </div>
                    <footer className="absolute bottom-0 left-0 right-0 ml-auto mr-auto w-fit md:px-0 px-5 md:text-md text-sm my-8">
                        <div className="text-center">
                            <p className="text-gray-400 select-none">{ new Date().getFullYear() } • Your Name </p>
                            <p className="text-gray-400 select-none flex">Made with ❤️ and React.</p>
                        </div>
                    </footer>
                </main>
            </body>
        </html>
    );
}