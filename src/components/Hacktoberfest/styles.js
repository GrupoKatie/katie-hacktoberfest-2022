import styled from "styled-components/macro";
import { fonts } from "../../assets/styles/typography";
import { Subtitle, Text } from "../../shared-ui/Typography";

export const Top = styled.img`
  padding: 8rem 0 0 0;
`;

export const Statement = styled(Subtitle)`
  max-width: 43rem;
  padding: 0;
  font-family: ${fonts.base};
  font-size: 2.7rem;
  line-height: 3rem;
  text-align: center;
`;

export const Context = styled(Text)`
  max-width: 55rem;
  padding: 0;
  margin: 0;
  font-family: ${fonts.base};
  text-align: center;
  line-height: 1.4rem;
`;

export const Alert = styled(Subtitle)`
  margin: 3rem 0 0 0;
  font-family: ${fonts.base};
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.4rem;
  text-align: center;
`;

export const Article = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 17rem;
`;

export const Contact = styled.img`
  padding: 2rem 0 1rem 0;
  width: 4.7rem;
`;

export const Button = styled.img`
  padding: 2rem 0 1rem 0;
  width: 17.5rem;
`;
