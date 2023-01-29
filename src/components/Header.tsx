import { Flex, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useAppSelector } from "../hooks/redux";

export function Header() {
  const course = useAppSelector((state) => ({
    activeModule: state.courseReducer.activeModule,
  }));

  useEffect(() => {
    document.title = `${course.activeModule.title} | React Redux`;
  }, [course]);

  return (
    <Flex
      as="header"
      justifyContent="center"
      alignItems="center"
      h={16}
      bgColor="#1c1d1f"
      borderBottom="1px solid #3e4143"
    >
      <Heading size="lg">{course.activeModule.title}</Heading>
    </Flex>
  );
}
