import { AspectRatio, Box, Heading, Text } from "@chakra-ui/react";
import { useMemo } from "react";
import { useAppSelector } from "../hooks/redux";

export default function Video() {
  const course = useAppSelector((state) => ({
    activeModule: state.courseReducer.activeModule,
    activeLesson: state.courseReducer.activeLesson,
    modules: state.courseReducer.modules,
  }));

  const numberOfLessons = useMemo(() => {
    return course.modules.reduce(
      (previousModuleValue, currentModule) =>
        previousModuleValue + currentModule.lessons.length,
      0
    );
  }, [course.modules]);

  return (
    <Box w="75%">
      <AspectRatio ratio={16 / 9}>
        <Box className="player" w="100%" h="100%" bgColor="#000" />
      </AspectRatio>
      <Box ml={6} mt={4}>
        <Heading as="h2">About this course</Heading>
        <Text>Learn React and your ecosystem.</Text>
        <Text>
          {course.modules.length} sections • {numberOfLessons} lessons
        </Text>
      </Box>
    </Box>
  );
}
