import { useEffect } from "react";
import { useAppSelector } from "../hooks/redux";

export default function Video() {
  const course = useAppSelector((state) => ({
    activeModule: state.courseReducer.activeModule,
    activeLesson: state.courseReducer.activeLesson,
  }));

  useEffect(() => {
    document.title = `${course.activeModule.title} | React Redux`;
  }, [course]);

  return (
    <div className="video">
      <h1>{course.activeModule.title}</h1>
      <span>{course.activeLesson.title}</span>
      <div
        className="player"
        style={{ width: "858px", height: "536px", backgroundColor: "#000" }}
      />
    </div>
  );
}
