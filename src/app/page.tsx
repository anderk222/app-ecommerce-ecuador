import { Button } from 'antd'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center flex-col items-center">
      <h1 className='text-emerald-500 text-3xl' >Ecommerce Ecuador!</h1>
      <Link href={"/product"}> <Button type="primary">Button</Button></Link>
    </main>
  )
}
