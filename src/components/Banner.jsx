import React from 'react'

const Banner = ({message}) => {
  return (
    <>
      <div className="hidden lg:block bg-orange-500 text-primary-foreground p-[8px] text-center text-md z-999">
        <div className="flex items-center justify-center">
          <p>{message}</p>
        </div>
      </div>
    </>
  );
}

export default Banner