import Link from "next/link";
import fetchALLFeedbacks from "../hooks/useFeedback";
import { PostType } from "../types";

export default async function Home() {
  const feedbacks = await fetchALLFeedbacks();
  return (
    <main>
      <div>
        <h1>欅祭アンケート</h1>
      </div>
      {/* Link */}
      <div>
        <Link href={"/feedback"}>ブログ新規作成</Link>
      </div>

      <div>
        {feedbacks?.map((feedback: PostType) => (
          <div key={feedback.id}>
            <div>
              <h2>{feedback.comment}</h2>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
