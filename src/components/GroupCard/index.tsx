import { useTheme } from "styled-components/native";
import * as S from "./styles";
import { UsersThree, Users } from "phosphor-react-native";
import { TouchableOpacityProps } from "react-native";

interface GroupCard extends TouchableOpacityProps {
  title: string;
}

export const GroupCard = ({ title, ...rest }: GroupCard) => {
  const theme = useTheme();
  return (
    <S.Container {...rest}>
      <UsersThree
        size={32}
        color={theme.colors.green_700}
        style={{ marginRight: 20 }}
        weight="fill"
      />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
