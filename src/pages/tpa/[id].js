import Head from "next/head";
import { useRouter } from "next/router";

export default function Quiz() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="bg-gray-800 min-h-screen">
      <Head>
        <title>Quiz {id}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full min-h-screen flex items-center justify-center">
        <img src="/coming.png" alt="coming-soon"/>
      </main>
    </div>
  );
}
