import styled from "styled-components";
import Image from "next/image";
import logo from "../../../public/assets/img/logo.png";
import Link from "next/link";

const FooterWrapper = styled.footer`
  align-items: center;
  background-color: var(--color-black);
  border-top: 0.6px solid var(--color-blue);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1.5rem;
  padding: 1.5rem;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Link href="/"><Image src={logo} width={150} height={40} alt="Logo do AluraFlix" /></Link>
    </FooterWrapper>
  );
}
