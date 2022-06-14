import React, { FC, ReactNode } from "react";

import styles from "./QuoteBlock.module.scss";

interface Props {
  children?: ReactNode;
  quote: string;
}

const QuoteBlock: FC<Props> = (props: Props) => {
  const { quote = "no quote" } = props;

  return (
    <section className={styles.block}>
      <div className={styles.bar}></div>
      <q>{quote}</q>
    </section>
  );
};

export default QuoteBlock;
