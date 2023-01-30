import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { courseActions } from "../store/reducers/course";

export function Sidebar() {
  const course = useAppSelector((state) => ({
    modules: state.courseReducer.modules,
    activeModule: state.courseReducer.activeModule,
    activeLesson: state.courseReducer.activeLesson,
  }));
  const dispatch = useAppDispatch();

  return (
    <Accordion
      defaultIndex={[
        course.modules.findIndex(
          (module) => module.id === course.activeModule.id
        ),
      ]}
      allowMultiple
      as="aside"
      w={["100%", "25%"]}
      h="100%"
      position={["static", "fixed"]}
      right={0}
      top={0}
      zIndex={99}
      overflowY={["visible", "scroll"]}
    >
      {course.modules.map((module, index) => (
        <AccordionItem
          key={module.id}
          bgColor="#181818"
          color="#fff"
          borderTopWidth={index === 0 ? "0px" : "1px"}
        >
          <AccordionButton p={6} _focus={{ outline: "none" }}>
            <Heading size="md">{module.title}</Heading>
            <AccordionIcon ml="auto" />
          </AccordionButton>
          <Box as="ul" listStyleType="none">
            {module.lessons.map((lesson) => (
              <AccordionPanel
                as="li"
                key={lesson.id}
                cursor="pointer"
                bgColor={
                  course.activeLesson.title === lesson.title
                    ? "#181818"
                    : "#000000"
                }
                _hover={{ bgColor: "#181818" }}
                color="#fff"
                onClick={() =>
                  dispatch(
                    courseActions.toggleLesson({
                      moduleId: module.id,
                      lessonId: lesson.id,
                    })
                  )
                }
                p={4}
              >
                <Text>{lesson.title}</Text>
              </AccordionPanel>
            ))}
          </Box>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
