import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = "Primary" | "Secondary";

interface ButtonProps {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, type }) =>
    type === "Primary" ? theme.colors.green_700 : theme.colors.red_dark};

  border-radius: 6px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.md};
    color: ${theme.colors.white};
    font-family: ${theme.font_family.bold};
  `}
`;
