import React, { useEffect, useState } from "react";
import axios from "axios";

import QuoteBlock from "../../common/ui/components/quote-block";
import MainLayout from "../../common/ui/layout/MainLayout";
import { ReactComponent as ArrowRight } from "../../common/ui/assets/images/arrow-right.svg";

import styles from "./RandomQuote.module.scss";
import { Link } from "react-router-dom";
import { getRandomValue } from "../../common/utils/getRandomValue";
import { Quote } from "../../common/ui/components/model";
import Loading from "../../common/ui/components/loading";

const RandomQuote = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [quote, setQuote] = useState<Quote>({
    _id: "1",
    quoteText:
      "The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency.",
    quoteAuthor: "Bill Gates",
    quoteGenre: "business",
  });
  const { quoteText, quoteAuthor, quoteGenre } = quote;

  const getQuote = async () => {
    setIsLoading(true);
    const response = await axios.get(
      process.env.REACT_APP_BASE_API_QUOTE_GARDEN ||
        "https://quote-garden.herokuapp.com/api/v3/quotes"
    );

    const responseData = response.data;
    const quoteData = getRandomValue(responseData.data);
    delete quoteData["__v"];

    setQuote(quoteData);
    setIsLoading(false);
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <MainLayout randomQuote={getQuote}>
      <Loading isOpen={isLoading} />
      <div className={styles.content}>
        <QuoteBlock quote={quoteText} />

        <Link className={styles.author} to="/asdf">
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
