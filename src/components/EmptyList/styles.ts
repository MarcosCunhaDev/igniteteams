import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font_size.sm};
    font-family: ${theme.font_family.regular};
    color: ${theme.colors.gray_300};
  `}
`;
