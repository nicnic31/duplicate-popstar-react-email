import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface WelcomeEmailProps {
  name: string;
}

export const WelcomeEmail = ({
  name = "Sydney Sheldon",
}: WelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>Welcome to Popstar</Preview>
    <Tailwind>
      <Body className="bg-white">
        <Container className="py-1">
          <Heading className="font-sans font-bold text-4xl">
            Welcome, {name}
          </Heading>
          <Img
            src="https://marketplace.canva.com/EAFKhiH4qxc/1/0/1600w/canva-blue-gaming-facebook-cover-kX5rJG6ZaQI.jpg"
            alt="logo"
            width="100%"
            height="200px"
            className="object-cover my-2"
          />
          <Text className="font-sans text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac
            habitasse platea dictumst vestibulum. Euismod elementum nisi quis
            eleifend quam adipiscing vitae proin. Felis imperdiet proin
            fermentum leo vel orci porta non pulvinar. Ultricies leo integer
            malesuada nunc vel risus commodo viverra maecenas. Nascetur
            ridiculus mus mauris vitae ultricies leo integer malesuada. Aliquet
            nibh praesent tristique magna sit amet. Gravida quis blandit turpis
            cursus in. Non nisi est sit amet facilisis magna etiam. Cum sociis
            natoque penatibus et magnis dis. Sodales ut etiam sit amet nisl
            purus. Aliquet porttitor lacus luctus accumsan tortor. Augue lacus
            viverra vitae congue eu. Egestas maecenas pharetra convallis
            posuere.
          </Text>
          <Hr className="my-1"/>
         <Section className="text-center">
            <Column>A</Column>
            <Column>B</Column>
            <Column>C</Column>
         </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default WelcomeEmail;
