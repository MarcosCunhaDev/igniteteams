import { Text } from "react-native";
import * as S from "./styles";
import { useTheme } from "styled-components/native";

export function Groups() {
  const theme = useTheme();
  return (
    <S.Container>
      <Text style={{ fontFamily: theme.font_family.regular }}>Groups</Text>
      <Text style={{ fontFamily: theme.font_family.bold }}>
        React native test
      </Text>
      <Text style={{ fontFamily: theme.font_family.regular }}>
        testando Hot reload
      </Text>
    </S.Container>
  );
}
