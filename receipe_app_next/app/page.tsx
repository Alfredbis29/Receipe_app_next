import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
   <main>
      <h1 className='text-xl mt-4 text-center font-semibold'> Hello Welcome to the Recipe App </h1>
      <Link href="/categories" className='underline'>List of Categories</Link>
     </main>
  )
}
