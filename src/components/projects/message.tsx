import { useEffect, useState } from "react";
import styles from "./message.module.scss"

interface MessageProps{
  msg: string;
  type? : string;
}

export const Message = ({ msg, type }: MessageProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => { //verificar se a mensagme existe
    if (!msg) {
      setVisible(false);
      return;
    } else {
      setVisible(true);
    }

    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [msg]);

  return (
    <>
      {visible && (
        <p className={styles.message} typeof={type}>
          {msg}
        </p>
      )}
    </>
  );
}
