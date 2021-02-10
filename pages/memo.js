import Head from "next/head";
import styles from "../styles/memo.module.css";
import { useRef, useState, useEffect } from "react";
import lcKey from "../lcKey.json";
import DateItem from "../components/dateItem";
const AV = require("leancloud-storage");

AV.init({
  appId: lcKey.appId,
  appKey: lcKey.appKey,
  serverURL: lcKey.serverURL,
});
// const { Query, User } = AV;

export default function Memo() {
  const heartRef = useRef(null);
  const heartPath = useRef(null);

  const [showCards, setShowCards] = useState(false);
  const [memos, setMemos] = useState([]);

  function onHeartClick() {
    if (heartRef.current) {
      heartRef.current.classList.remove("shadow-neu");
      heartRef.current.classList.add("shadow-pressed");
      heartPath.current.setAttribute("fill", "#e22d48");
      heartPath.current.setAttribute("stroke", "none");
      heartRef.current.classList.add("animate-ping");
      setTimeout(() => {
        heartRef.current.classList.remove("animate-ping");
        setShowCards(true);
      }, 600);
    }
  }

  useEffect(() => {
    const query = new AV.Query("MemoTable");
    query.find().then((res) => {
      if (res && res.length) {
        let arr = res.map((item) => {
          return {
            id: item.id,
            ...item.attributes,
          };
        });
        setMemos(arr);
      }
    });
  }, []);

  return (
    <>
      <Head>
        <title>Memo</title>
      </Head>

      <main className="p-4 box-border bg-bgWhite min-h-screen h-full flex-1 flex items-center justify-center flex-col">
        <div
          className="container rounded-full w-20 lg:w-24 h-20 lg:h-24 shadow-neu flex items-center cursor-pointer transition-all transform hover:shadow-pressed"
          onClick={onHeartClick}
          ref={heartRef}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="heart transition-colors"
            viewBox="0 0 362 327"
          >
            <path
              d="M348.82 107.15c0-51.97-42.13-94.1-94.1-94.1-29.82 0-56.39 13.87-73.63 35.51l-.77-.77-.01.01c-17.25-21.2-43.55-34.75-73.02-34.75-51.97 0-94.1 42.13-94.1 94.1 0 29.47 13.55 55.77 34.75 73.02l-.69.69 133.08 133.08L313.4 180.87l-.09-.09c21.64-17.24 35.51-43.81 35.51-73.63z"
              fill="none"
              stroke="#a3b1c6"
              strokeWidth={10}
              ref={heartPath}
              className="transition-colors"
            />
          </svg>
        </div>
        {showCards && (
          <div className="">
            {memos.map((m) => (
              <DateItem
                date={m.date}
                picture={m.picture}
                emoji={m.emoji}
                content={m.content}
              />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
