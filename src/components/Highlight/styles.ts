import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font_size.xl};
    font-family: ${theme.font_family.bold};
    color: ${theme.colors.white};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font_size.md};
    font-family: ${theme.font_family.regular};
    color: ${theme.colors.gray_300};
  `}
`;
