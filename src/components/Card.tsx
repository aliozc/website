import React from 'react'

interface ProjectCardProps {
    title: string;
    description: string;
    subtitle?: string;
    className?: string;
    href?: string;
    imageURL?: string;
    invert?: boolean;
    imageAltText?: string;
}

const Card: React.FC<ProjectCardProps> = ({ title, description, subtitle, className, href, imageURL, invert, imageAltText }) => {
  return (
    <a href={href} className={`
        box
        min-w-fit
        min-h-[5.2em]
        px-3
        py-2 `+className}>
        <div className='flex space-x-3 h-full'>
          { imageURL ? <img src={imageURL} alt={imageAltText} className={'w-10 h-10 my-auto '+(invert ? "dark:invert" : "")}/> : ""}
          <div className='my-auto'>
            <h1 className="font-bold">{title}</h1>
            <p className="text-sm text-gray-600">{description}</p>
            { subtitle ? <p className="text-xs text-gray-600 mt-px">{subtitle}</p> : "" }
          </div>
        </div>
    </a>
  )
}

export default Card;