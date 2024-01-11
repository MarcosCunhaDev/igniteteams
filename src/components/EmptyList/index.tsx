import React from "react";
import * as S from "./styles";

export const EmptyList = ({ message }: { message: string }) => {
  return (
    <S.Container>
      <S.Message>{message}</S.Message>
    </S.Container>
  );
};
