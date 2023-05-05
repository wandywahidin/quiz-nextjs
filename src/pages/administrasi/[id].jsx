import Head from "next/head";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import pertanyaan from "../../pertanyaan.json";
import { increment } from "@/store/slice";
import Link from "next/link";

export default function Quiz() {
  const [answer, setAnswer] = useState("");
  const [btnAktif, setBtnAktif] = useState(null);
  const [itemQuiz, setItemQuiz] = useState(pertanyaan);
  const [jawabanBenar, setJawabanBenar] = useState("");
  const [disabel, setdisabel] = useState(false);
  const dispatch = useDispatch();

  const router = useRouter();
  const { id } = router.query;

  const jawaban = (param) => {
    setAnswer(param);
    setdisabel(true);
    setJawabanBenar(itemQuiz.questions[id - 1].answer);
    setBtnAktif(param);
  };
  const next = () => {
    setAnswer("");
    setdisabel(false);
    setJawabanBenar('');
    setBtnAktif(null);
  }

  useEffect(() => {
    if (answer == itemQuiz.questions[id - 1]?.answer) {
      dispatch(increment());
    }
  }, [answer]);
console.log('itemQuiz :>> ', itemQuiz.questions.length);
  return (
    <div className="bg-gray-800 min-h-screen">
      <Head>
        <title>Quiz {id}</title>
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Quiz Administrasi</h1>
        <h1 className="text-4xl font-bold text-center mb-8"></h1>

        <p className="text-xl mb-4">Question {id}:</p>
        <div>
          <p className="mb-4">{itemQuiz.questions[id - 1]?.question}</p>

          <div className="grid grid-cols-2 gap-4">
            {itemQuiz.questions[id - 1]?.options.map((item) => {
              return (
                <button
                  key={item}
                  id={item}
                  onClick={() => jawaban(item)}
                  disabled={disabel}
                  className={
                    btnAktif === item && btnAktif === jawabanBenar
                      ? "bg-green-500 text-white font-bold py-4 px-8 rounded-lg"
                      : btnAktif === item && btnAktif !== jawabanBenar
                      ? "bg-red-500  text-white font-bold py-4 px-8 rounded-lg"
                      : "bg-blue-500 text-white font-bold py-4 px-8 rounded-lg"
                  }
                >
                  {item}
                </button>
              );
            })}
          </div>
          {jawabanBenar !== "" ? (
            <div className="mt-2">Jawaban Benar : {jawabanBenar}</div>
          ) : null}
          {disabel? <div className="mt-4 text-end">{itemQuiz.questions.length > parseInt(id) ? <Link className="px-6 py-2 rounded bg-blue-600" onClick={next} href={`/administrasi/${parseInt(id) + 1}`}>Next</Link>: <Link className="px-6 py-2 rounded bg-blue-600" href="/hasil">Lihat Hasil</Link>}</div> : null}
          
        </div>
      </main>
    </div>
  );
}
