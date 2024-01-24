import logoImg from "@assets/logo.png";
import { useNavigation } from "@react-navigation/native";
import { CaretLeft } from "phosphor-react-native";
import { Pressable } from "react-native";
import { useTheme } from "styled-components/native";
import * as S from "./styles";

export type HeaderProps = {
  version: "primary" | "secondary";
};

export const Header = ({ version = "primary" }: HeaderProps) => {
  const navigation = useNavigation();
  const theme = useTheme();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <S.Container version={version}>
      {version === "secondary" ? (
        <Pressable onPress={handleGoBack}>
          <CaretLeft color={theme.colors.white} size={36} />
        </Pressable>
      ) : null}
      <S.Logo source={logoImg} />
    </S.Container>
  );
};
