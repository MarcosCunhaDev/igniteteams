import styled from "styled-components/native";
import { HeaderProps } from ".";

export const Container = styled.View<HeaderProps>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ theme, version }) =>
    version === "primary" ? "center" : "space-between"};
`;

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`;
