import React, { useEffect, useState } from "react";

import QuoteBlock from "../../common/ui/components/quote-block";
import MainLayout from "../../common/ui/layout/MainLayout";
import { ReactComponent as ArrowRight } from "../../common/ui/assets/images/arrow-right.svg";

import styles from "./RandomQuote.module.scss";
import { Link } from "react-router-dom";
import { getRandomValue } from "../../common/utils/getRandomValue";
import { Quote } from "../../common/ui/components/model";
import Loading from "../../common/ui/components/loading";
import { doGetQuotes } from "../api";
import { INIT_DATA } from "../constants";

const RandomQuote = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [quote, setQuote] = useState<Quote>(INIT_DATA);
  const { quoteText, quoteAuthor, quoteGenre } = quote;

  const getQuote = () => {
    setIsLoading(true);
    doGetQuotes()
      .then((data) => {
        const responseData = data.data;
        const quoteData = getRandomValue(responseData.data);

        setQuote(quoteData);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        throw new Error(error);
      });
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <MainLayout randomQuote={getQuote}>
      <Loading isOpen={isLoading} />
      <div className={styles.content}>
        <QuoteBlock quote={quoteText} />

        <Link className={styles.author} to={`/${quoteAuthor}`}>
          <div className={styles["author-info"]}>
            <h4>{quoteAuthor}</h4>
            <p>{quoteGenre}</p>
          </div>
          <ArrowRight />
        </Link>
      </div>
    </MainLayout>
  );
};

export default RandomQuote;
