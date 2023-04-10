import { useState } from "react";

export const useAnswer = () => {
  const [answer, setAnswer] = useState("");
  const showAnswer = (res) => setAnswer(res);

  return {
    answer,
    showAnswer
  }
}
