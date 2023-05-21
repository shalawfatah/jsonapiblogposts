import { DetailProps } from '@/types/Types'
import Link from 'next/link'
import React from 'react'

const SingleRow = ({item}: DetailProps) => {
  return (
    <tr className="" key={item.id}>
        <td className="border-4 border-[#FEC128] bg-white">
        <Link
            className="block w-full h-auto p-2 px-4 text-black hover:bg-green-600 duration-400 cursor-pointer"
            href={`detail/${item.id}`}
        >
            {item.id}
        </Link>
        </td>
        <td className="border-4 border-[#FEC128] p-2 bg-white text-black">{item.title}</td>
        <td className="border-4 border-[#FEC128] p-2 bg-white text-black">{item.body}</td>
    </tr>
  )
}

export default SingleRow