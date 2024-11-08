'use client' // Error components must be Client Components
import { paragraph, title } from '@/components/primitives'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen relative">
      <h1 className="font-bold absolute text-center text-default-900/5 text-[10rem] sm:text-[14rem] lg:text-[18rem] xl:text-[20rem]">
        Error
      </h1>
      <div className="flex flex-col items-center">
        <span
          className={`!font-extrabold !text-center ${title({
            size: "xxl",
          })}`}
        >
          Something went wrong.
        </span>
        <span
          className={`!font-bold !text-center ${paragraph({
            size: "lg",
          })}`}
        >
          Please try again later or contact me.
        </span>
      </div>
      <div className="flex flex-row items-center justify-center w-full mt-4">
        {/* // Link to the blog route */}
        <Button as={Link} href="/" radius="none" color="warning" variant="solid" className='font-semibold'>
          return to home
        </Button>
        {/* // Refresh the page */}
        <Button
          className="ml-4 font-semibold"
          radius="none"
          color="warning"
          variant="bordered"
          onClick={() => reset()}
        >
          refresh
        </Button>
      </div>
    </div>
  )
}