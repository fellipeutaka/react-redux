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

export default function Sidebar() {
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
      w="25%"
      h="100%"
    >
      {course.modules.map((module) => (
        <AccordionItem key={module.id} bgColor="#181818" color="#fff">
          <AccordionButton
            p={6}
            borderTop="1px solid #bbb"
            _focus={{ outline: "none" }}
          >
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
                  dispatch(courseActions.toggleLesson({ module, lesson }))
                }
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
