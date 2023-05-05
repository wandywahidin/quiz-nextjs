import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const quizResults = [
  {
    title: 'Hasil Quiz',
    description: 'Horee, Sindi telah menyelesaikan quiz ini dengan baik!',
    imageUrl: '/succes.png',
  },
  {
    title: 'Hasil Quiz',
    description: 'Sayang sekali, jawaban sindi masih perlu ditingkatkan.',
    imageUrl: '/failure.png',
  },
];

const Result = () => {
  const hasil = useSelector((state) => state.counter.value);
  const [resultIndex, setResultIndex] = useState(hasil >= 8 ? 0 : 1);
  const result = quizResults[resultIndex];

  return (
    <div className="bg-gray-800 min-h-screen">
      <Head>
        <title>Hasil</title>
      </Head>

      <div className="py-12">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Image
              src={result.imageUrl}
              alt="Quiz Result Image"
              width={200}
              height={200}
              className='mx-auto'
            />
            <h2 className="mt-6 text-3xl font-extrabold text-white">
              {result.title}
            </h2>
            <p className="mt-2 text-sm text-white">{result.description}</p>
            <p className="mt-6 font-bold text-xl text-white">
              Skor Sindi: {hasil}
            </p>
            <div className="mt-6">
              <Link href="/"
                className="px-6 py-2 rounded bg-blue-600">
                  Kembali ke Beranda
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;