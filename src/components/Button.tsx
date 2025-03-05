import Link from 'next/link';
import React from 'react'

interface ButtonProps {
    isLink?: boolean;
    text: string;
    href?: string;
}

const Button: React.FC<ButtonProps> = ({ text, isLink, href }) => {
  return (
    <div className='duration-100 active:scale-95'>
      <Link href={href ? href : "#"} className="rounded-lg border px-4 py-2 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-500 dark:hover:bg-gray-600">
        {text}
      </Link>
    </div>
  )
}

export default Button