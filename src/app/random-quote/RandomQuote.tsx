import React from "react";
import QuoteBlock from "../../common/ui/components/quote-block";
import MainLayout from "../../common/ui/layout/MainLayout";

import { ReactComponent as ArrowRight } from "../../common/ui/assets/images/arrow-right.svg";

import styles from "./RandomQuote.module.scss";

const RandomQuote = () => {
  return (
    <MainLayout>
      <div className={styles.content}>
        <QuoteBlock quote="The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency." />

        <div className={styles.author}>
          <div className={styles["author-info"]}>
            <h4>Bill Gates</h4>
            <p>business</p>
          </div>
          <ArrowRight />
        </div>
      </div>
    </MainLayout>
  );
};

export default RandomQuote;
