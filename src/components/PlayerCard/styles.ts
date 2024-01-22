import { MaterialIcons } from "@expo/vector-icons";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 56px;

  background-color: ${({ theme }) => theme.colors.gray_500};

  flex-direction: row;
  align-items: center;
  border-radius: 6px;

  margin-bottom: 16px;
  padding-left: 10px;
`;

export const Name = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    font-size: ${theme.font_size.md};
    color: ${theme.colors.gray_200};
    font-family: ${theme.font_family.regular};
  `}
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors.gray_200,
}))`
  margin-right: 4px;
`;
