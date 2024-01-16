import * as S from "./styles";
import logoImg from "@assets/logo.png";
import { CaretLeft } from "phosphor-react-native";
import { TouchableWithoutFeedback } from "react-native";
import { useTheme } from "styled-components/native";

export type HeaderProps = {
  version: "primary" | "secondary";
};

export const Header = ({ version = "primary" }: HeaderProps) => {
  const theme = useTheme();
  return (
    <S.Container version={version}>
      {version === "secondary" ? (
        <TouchableWithoutFeedback
          onPress={() => {
            console.log("clicou aqiu");
          }}
        >
          <CaretLeft color={theme.colors.white} size={36} />
        </TouchableWithoutFeedback>
      ) : null}
      <S.Logo source={logoImg} />
    </S.Container>
  );
};
