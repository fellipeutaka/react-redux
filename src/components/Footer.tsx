import { Flex, Link, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      as="footer"
      justifyContent="center"
      alignItems="center"
      mt={24}
      h={24}
      bgColor="#1c1d1f"
    >
      <Text>
        Developed with <span role="img">❤️</span> by{" "}
        <Link href="https://github.com/fellipeutaka" isExternal>
          Fellipe Utaka
        </Link>
      </Text>
    </Flex>
  );
}
