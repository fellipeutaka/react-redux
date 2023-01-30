import { AspectRatio, Box, Heading, Text } from "@chakra-ui/react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { courseActions } from "../store/reducers/course";

export function Video() {
  const course = useAppSelector((state) => ({
    activeModule: state.courseReducer.activeModule,
    activeLesson: state.courseReducer.activeLesson,
    modules: state.courseReducer.modules,
    playedSeconds: state.courseReducer.playedSeconds,
  }));
  const dispatch = useAppDispatch();

  const numberOfLessons = useMemo(() => {
    return course.modules.reduce(
      (previousModuleValue, currentModule) =>
        previousModuleValue + currentModule.lessons.length,
      0
    );
  }, [course.modules]);

  const onProgress = useCallback(
    (playedSeconds: number) => {
      const data = {
        playedSeconds,
        activeModuleId: course.activeModule.id,
        activeLessonId: course.activeLesson.id,
      };
      localStorage.setItem("@react-redux/data", JSON.stringify(data));
    },
    [course.activeLesson.id, course.activeModule.id]
  );

  useEffect(() => {
    const localStorageData = localStorage.getItem("@react-redux/data");
    if (localStorageData) {
      const data = JSON.parse(localStorageData);
      dispatch(
        courseActions.toggleLesson({
          moduleId: data?.activeModuleId,
          lessonId: data?.activeLessonId,
          playedSeconds: Math.floor(data?.playedSeconds || 0),
        })
      );
    }
  }, []);

  return (
    <Box w={["100%", "75%"]}>
      <AspectRatio ratio={16 / 9}>
        <ReactPlayer
          width="100%"
          height="100%"
          url={course.activeLesson.videoURL}
          controls
          onProgress={(state) => onProgress(state.playedSeconds)}
          config={{
            playerVars: {
              autoplay: 1,
              start: course.playedSeconds,
            },
          }}
          onEnded={() =>
            dispatch(
              courseActions.navigateToNextVideo({
                moduleId: course.activeModule.id,
                lessonId: course.activeLesson.id,
              })
            )
          }
        />
      </AspectRatio>
      <Box ml={6} my={4}>
        <Heading as="h2">About this course</Heading>
        <Text>Learn React and your ecosystem.</Text>
        <Text>
          {course.modules.length} sections • {numberOfLessons} lessons
        </Text>
      </Box>
    </Box>
  );
}
