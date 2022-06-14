import React, { FC, ReactNode } from "react";
import Container from "../components/container";

import { ReactComponent as Random } from "../assets/images/random.svg";
import styles from "./MainLayout.module.scss";
import { useNavigate } from "react-router-dom";

interface Props {
  children: ReactNode;
  randomQuote?: () => void;
}

const MainLayout: FC<Props> = (props: Props) => {
  const { randomQuote } = props;
  const navigate = useNavigate();

  const backToRandomQuotePage = () => {
    if (randomQuote) randomQuote();
    navigate("/", { replace: true });
  };

  return (
    <Container>
      <div className={styles.layout}>
        <header className={styles.header}>
          <div className={styles.randomBtn} onClick={backToRandomQuotePage}>
            random <Random />
          </div>
        </header>
        <main className={styles.main}>{props.children}</main>
        <footer className={styles.footer}>
          created by <span>username</span> - devChallenges.io
        </footer>
      </div>
    </Container>
  );
};

export default MainLayout;
