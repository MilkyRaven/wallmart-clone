import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
type Props = {
    title: string;
    className?: string;
    image?: string;
};

function GridOption({ title, className, image }: Props) {
    return (
        <Link href={
            {
                pathname: "/",
                query: { q: title }
            }
        }>
            <h2>Title</h2>
            {image && (
                <Image src={image} alt={title} layout='fill' className='object-cover opacity-20 rounded-md'></Image>
            )}
        </Link>
    )
}

export default GridOption