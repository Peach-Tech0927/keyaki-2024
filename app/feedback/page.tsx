"use client";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

const postFeedback = async (comment: string | undefined) => {
  const res = await fetch(`http://localhost:3000/api/feedback`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ comment }),
  });

  return res.json();
};

const Postfeedback = () => {
  const router = useRouter();
  const feedbackRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(feedbackRef.current?.value);

    await postFeedback(feedbackRef.current?.value);
    router.push("/");
    router.refresh();
  };

  return (
    <>
      <div>
        <div>
          <p>ブログ新規作成 🚀</p>
          <form onSubmit={handleSubmit}>
            <textarea ref={feedbackRef} placeholder="記事詳細を入力"></textarea>
            <button className="font-semibold px-4 py-2 shadow-xl bg-slate-200 rounded-lg m-auto hover:bg-slate-100">
              投稿
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Postfeedback;
