import React from 'react'

const Button = ({isLoading, loadMoreData}) => {
  return (
    <button className='font-bold m-2 px-8 py-2 rounded-md bg-green-600 hover:bg-green-800 duration-400' onClick={loadMoreData} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Load More'}
    </button>
  )
}

export default Button