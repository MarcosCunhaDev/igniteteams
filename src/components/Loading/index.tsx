import { ActivityIndicator } from "react-native";
import * as S from "./styles";
import { useTheme } from "styled-components/native";

export const Loading = () => {
  const theme = useTheme();
  return (
    <S.Container>
      <ActivityIndicator color={theme.colors.green_700} />
    </S.Container>
  );
};
