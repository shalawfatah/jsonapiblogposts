import { LayoutProps } from '@/types/Types'
import React, { useEffect, useState } from 'react'

const Table = ({children}: LayoutProps) => {

  return (
    <table className="table-auto">
        <thead className="bg-[#26bfa1] text-white w-auto">
        <tr>
            <th className="border-4 border-[#FEC128]">ID</th>
            <th className="border-4 border-[#FEC128]">Title</th>
            <th className="border-4 border-[#FEC128]">Body</th>
        </tr>
        </thead>
        <tbody>
            {children}
        </tbody>
    </table>
  )
}

export default Table