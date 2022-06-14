import React, { FC, ReactNode } from "react";
import Container from "../components/container";

import { ReactComponent as Random } from "../assets/images/random.svg";
import styles from "./MainLayout.module.scss";

interface Props {
  children: ReactNode;
}

const MainLayout: FC<Props> = (props: Props) => {
  return (
    <Container>
      <div className={styles.layout}>
        <header className={styles.header}>
          <div className={styles.randomBtn}>
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
