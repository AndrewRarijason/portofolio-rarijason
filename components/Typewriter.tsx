import { useEffect, useState } from "react";

export default function Typewriter({ text = "", start = false, speed = 12, className = "" }) {
  const [typed, setTyped] = useState("");
  useEffect(() => {
    if (!start) return;
    let i = 0;
    let timer: NodeJS.Timeout;
    function typeWriter() {
      if (i <= text.length) {
        setTyped(text.slice(0, i));
        i++;
        timer = setTimeout(typeWriter, speed);
      }
    }
    typeWriter();
    return () => clearTimeout(timer);
  }, [start, text, speed]);
  return (
    <span className={className}>
      {typed}
    </span>
  );
}