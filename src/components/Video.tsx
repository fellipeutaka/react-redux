import { AspectRatio, Box, Heading, Text } from "@chakra-ui/react";
import { useMemo } from "react";
import ReactPlayer from "react-player/youtube";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { courseActions } from "../store/reducers/course";

export default function Video() {
  const course = useAppSelector((state) => ({
    activeModule: state.courseReducer.activeModule,
    activeLesson: state.courseReducer.activeLesson,
    modules: state.courseReducer.modules,
  }));
  const dispatch = useAppDispatch();

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
        <ReactPlayer
          width="100%"
          height="100%"
          url={course.activeLesson.videoURL}
          controls
          config={{
            playerVars: {
              autoplay: 1,
            },
          }}
          onEnded={() =>
            dispatch(
              courseActions.navigateToNextVideo({
                module: course.activeModule,
                lesson: course.activeLesson,
              })
            )
          }
        />
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
