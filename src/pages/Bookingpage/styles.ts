import styled from "styled-components";
import { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 7rem;
  margin: 0 auto;
  gap: 2rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 3rem;
  }
`;
