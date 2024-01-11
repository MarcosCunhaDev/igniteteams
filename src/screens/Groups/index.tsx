import { Header } from "@components/Header";
import { useTheme } from "styled-components/native";
import * as S from "./styles";

export function Groups() {
  const theme = useTheme();
  return (
    <S.Container>
      <Header version="primary" />
    </S.Container>
  );
}
