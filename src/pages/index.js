import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {

  return (
    <div className="bg-gray-800 min-h-screen">
      <Head>
        <title>Quiz App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-12 text-white">
        <h1 className="text-4xl font-bold text-center mb-8">Hallo Sindi, <br/> Selamat Mengerjakan!</h1>

        <div className="grid md:grid-cols-2 grid-flow-row gap-4 ">
          <Link href="/tpa/1"
             className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg">
              TPA (Test Potensi Akademik)
          </Link>

          <Link href="/administrasi/1"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg">
              Administrasi
          </Link>
        </div>
      </main>
    </div>
  );
}