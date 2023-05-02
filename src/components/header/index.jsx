import styled from "styled-components";
import Image from "next/image";
import logo from "../../../public/assets/img/logo.png";
import Link from "next/link";

const HeaderWrapper = styled.header`
  align-items: center;
  background-color: var(--color-black);
  border-bottom: 0.6px solid var(--color-blue);
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
  padding: 1.5rem;
`;

const Button = styled.button`
  align-items: center;
  background-color: var(--color-black);
  border: 1px solid var(--color-white);
  border-radius: 4px;
  color: var(--color-white);
  display: flex;
  font-size: 1rem;
  height: 40px;
  justify-content: center;
  padding: 1rem;
  width: 160px;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Link href="/"><Image src={logo} width={150} height={40} alt="Logo do AluraFlix" /></Link>
      <Button>Novo vídeo</Button>
    </HeaderWrapper>
  );
}
