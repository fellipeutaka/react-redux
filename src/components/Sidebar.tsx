import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { courseActions } from "../store/reducers/course";

export default function Sidebar() {
  const course = useAppSelector((state) => ({
    modules: state.courseReducer.modules,
    activeLesson: state.courseReducer.activeLesson,
  }));
  const dispatch = useAppDispatch();

  return (
    <aside>
      {course.modules.map((module) => (
        <div key={module.id}>
          <strong
            style={{
              paddingBlock: "16px",
              paddingLeft: "8px",
              display: "block",
              backgroundColor: "#0066ff",
            }}
          >
            {module.title}
          </strong>
          <ul style={{ listStyle: "none" }}>
            {module.lessons.map((lesson) => (
              <li key={lesson.id} style={{ marginBlock: "16px" }}>
                <span>{lesson.title}</span>
                <button
                  onClick={() =>
                    dispatch(courseActions.toggleLesson({ module, lesson }))
                  }
                  disabled={course.activeLesson.title === lesson.title}
                >
                  {course.activeLesson.title === lesson.title
                    ? "Selected"
                    : "Select"}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}
