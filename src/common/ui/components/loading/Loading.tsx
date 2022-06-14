import React, { FC } from "react";
import { Spinner } from "react-bootstrap";

import style from "./Loading.module.scss";

interface Props {
  isOpen: boolean;
}

const Loading: FC<Props> = (props: Props) => {
  return (
    <div className={`${style.loading} ${props.isOpen && style.open}`}>
      <Spinner
        animation="border"
        variant="primary"
        className={style.content}
      ></Spinner>
    </div>
  );
};

export default Loading;
