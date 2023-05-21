import { TitleProps } from '@/types/Types';
import Link from 'next/link';
import React from 'react';

const Title = ({ text }: TitleProps) => {
  return <Link href="/">
            <h1 className='text-3xl text-white p-2 font-bold'>{text}</h1>
        </Link>;
};

export default Title;
