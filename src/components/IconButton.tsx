import React from 'react'

interface IconButtonProps {
    text: string;
    imageURL?: string;
    icon?: string;
    className?: string;
    href?: string;
    alt?: string;
    invert?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({ text, imageURL, icon, className, href, alt, invert }) => {
    return (
        href ?
        <a href={href} className={"box group flex space-x-2 w-full p-2 max-h-12 "+className}>
            <img
                src={icon ? "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/"+icon+"/"+icon+"-original.svg" : imageURL}
                className={"w-8 h-8 rounded "+ (invert ? "dark:invert" : "")}
                alt={alt ? alt : "Logo of "+text}
            />
            <p className='my-auto truncate'>{text}</p>
        </a>
        :
        <div>
            <button className={"box group flex space-x-2 w-full p-2 max-h-12 "+className}>
                <img
                    src={icon ? "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/"+icon+"/"+icon+"-original.svg" : imageURL}
                    className={"w-8 h-8 rounded "+ (invert ? "dark:invert" : "")}
                    alt={alt ? alt : "Logo of "+text}
                />
                <p className='my-auto truncate'>{text}</p>
            </button>
        </div>
    )
}

export default IconButton
