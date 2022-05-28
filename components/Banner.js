import React from 'react'
import Image from 'next/image'

function Banner() {
  return (
    <div className=" relative h-[300px]  sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />

      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm font-bold sm:text-lg">
          Not sure where to go ? Perfect.
        </p>
        <button className="my-3 rounded-full bg-white py-4 px-10 font-bold text-purple-600 shadow-md transition duration-150 hover:shadow-xl active:scale-90">
          Im Flexible
        </button>
      </div>
    </div>
  )
}

export default Banner
