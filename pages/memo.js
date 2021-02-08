import Head from "next/head";
import styles from "../styles/memo.module.css";

export default function Memo() {
  return (
    <>
      <Head>
        <title>Memo</title>
      </Head>

      <main className="box-border bg-bgWhite h-screen flex-1 flex items-center">
        <div class="container rounded-full sm:w-3/5 md:w-2/5 lg:w-1/5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="heart"
            viewBox="0 0 362 327"
          >
            <path
              d="M348.82 107.15c0-51.97-42.13-94.1-94.1-94.1-29.82 0-56.39 13.87-73.63 35.51l-.77-.77-.01.01c-17.25-21.2-43.55-34.75-73.02-34.75-51.97 0-94.1 42.13-94.1 94.1 0 29.47 13.55 55.77 34.75 73.02l-.69.69 133.08 133.08L313.4 180.87l-.09-.09c21.64-17.24 35.51-43.81 35.51-73.63z"
              fill="#e22d48"
            />
          </svg>
        </div>
      </main>
    </>
  );
}
