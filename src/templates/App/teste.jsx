import { Children } from "react";
import { styled } from "styled-components";

export const Teste = () => {
  const Input = styled.input`
    padding: 1em 2em;
  `;

  const Paragraph = styled.p`
    background-color: ${(props) =>
      props.backgroundColor ? props.backgroundColor : "red"};
    padding: 2em;
    transition: 0.6s all ease-in-out;

    &::placeholder {
      background-color: red;
    }

    &:active {
      background-color: #27b63a;
    }
  `;

  return (
    <div>
      <Input type="password" placeholder="Digite alguma cosia" />
      <button>Botao de clicar</button>
      <Paragraph backgroundColor="blue">oi</Paragraph>
      <Paragraph>oi</Paragraph>
      <Paragraph backgroundColor="blue">oi</Paragraph>
    </div>
  );
};
