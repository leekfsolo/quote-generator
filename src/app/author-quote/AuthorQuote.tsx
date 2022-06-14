import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../common/ui/components/loading";
import { Quote } from "../../common/ui/components/model";
import QuoteBlock from "../../common/ui/components/quote-block";

import MainLayout from "../../common/ui/layout/MainLayout";
import { doGetQuotes } from "../api";
import { INIT_DATA } from "../constants";
import styles from "./AuthorQuote.module.scss";

const AuthorQuote = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [quotes, setQuotes] = useState<Array<Quote>>([INIT_DATA]);
  const { author } = useParams();

  const getAllQuotes = useCallback(() => {
    setIsLoading(true);
    doGetQuotes({ author })
      .then((data) => {
        const responseData = data.data;
        setQuotes(responseData.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        throw new Error(error);
      });
  }, [author]);

  useEffect(() => {
    getAllQuotes();
  }, [getAllQuotes]);

  return (
    <MainLayout>
      <Loading isOpen={isLoading} />
      <div className={styles.content}>
        <div className={styles.author}>
          <h1>{author}</h1>
        </div>

        {quotes.map((quote) => (
          <QuoteBlock quote={quote.quoteText} key={quote._id} />
        ))}
      </div>
    </MainLayout>
  );
};

export default AuthorQuote;
