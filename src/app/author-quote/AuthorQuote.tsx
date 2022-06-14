import React, { FC } from "react";
import QuoteBlock from "../../common/ui/components/quote-block";

import MainLayout from "../../common/ui/layout/MainLayout";
import styles from "./AuthorQuote.module.scss";
interface Props {
  id?: string;
}

const AuthorQuote: FC<Props> = (props: Props) => {
  return (
    <MainLayout>
      <div className={styles.content}>
        <div className={styles.author}>
          <h1>Bill Gates</h1>
        </div>

        <QuoteBlock quote="The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency." />

        <QuoteBlock quote="We always overestimate the change that will occur in the next two years and underestimate the change that will occur in the next ten. Don't let yourself be lulled into inaction." />

        <QuoteBlock quote="Climate change is a terrible problem, and it absolutely needs to be solved. It deserves to be a huge priority." />
      </div>
    </MainLayout>
  );
};

export default AuthorQuote;
