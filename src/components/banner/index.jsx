import Image from "next/image";
import styled from "styled-components";
import banner from "../../../public/assets/img/banner.png";

const BannerWrapper = styled.div`
  align-items: center;
  color: var(--color-white);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-around;
  padding: 7rem 1.5rem 0 1.5rem;
`;

const TextWrapper = styled.div`
  align-items: left;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Label = styled.h1`
  align-items: center;
  background-color: var(--color-courses-frontend);
  display: flex;
  font-size: 2rem;
  font-weight: 400;
  justify-content: center;
  padding: 1rem;
  width: 200px;
`;

const Title = styled.h2`
  color: var(--color-white);
  font-size: 2rem;
  font-weight: 200;
`;

const Paragraph = styled.p`
  color: var(--color-white);
  font-size: 1.2rem;
  font-weight: 200;
  text-align: left;
`;

export default function Banner() {
  return (
    <BannerWrapper>
      <TextWrapper>
        <Label>Front-End</Label>
        <Title>SEO com React</Title>
        <Paragraph>
          Esse desafio é uma forma de aprendizado. É um mecanismo onde você pode
          <br></br>
          se engajar na resolução de um problema para poder aplicar todo o
          conhecimento<br></br>adquirido na Formação React.
        </Paragraph>
      </TextWrapper>
      <Image
        src={banner}
        width={600}
        height={300}
        alt="Thumbnail do vídeo de Transformação Digital"
      />
    </BannerWrapper>
  );
}
