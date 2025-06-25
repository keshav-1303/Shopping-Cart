import React from 'react'

const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-8 h-8 border-2 border-white/30 border-t-blue-500 rounded-full animate-spin backdrop-blur-sm bg-white/10"></div>
    </div>
  )
}

export default Spinner