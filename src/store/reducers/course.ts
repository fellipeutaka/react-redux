import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Course } from "../../types/Course";
import { Lesson } from "../../types/Lesson";
import { Module } from "../../types/Module";

const initialState: Course = {
  activeModule: {
    id: 2,
    title: "Starting with React",
    lessons: [
      { id: 1, title: "Components", videoURL: "https://youtu.be/Y2hgEGPzTZY" },
      {
        id: 2,
        title: "Functional Components",
        videoURL: "https://youtu.be/Cla1WwguArA",
      },
      {
        id: 3,
        title: "Class Components",
        videoURL: "https://youtu.be/lnV34uLEzis",
      },
      { id: 4, title: "Props", videoURL: "https://youtu.be/m7OWXtbiXX8" },
      { id: 5, title: "State", videoURL: "https://youtu.be/4ORZ1GmjaMc" },
      { id: 6, title: "Hooks", videoURL: "https://youtu.be/cF2lQ_gZeA8" },
      { id: 7, title: "Styling", videoURL: "https://youtu.be/j5P9FHiBVNo" },
    ],
  },
  activeLesson: {
    id: 1,
    title: "Components",
    videoURL: "https://youtu.be/Y2hgEGPzTZY",
  },
  modules: [
    {
      id: 1,
      title: "ES6 and TypeScript",
      lessons: [
        {
          id: 1,
          title: "Transpiler",
          videoURL: "https://youtu.be/dVut_aE2XX8",
        },
        {
          id: 2,
          title: "var",
          videoURL: "https://youtu.be/izlLVx_dTH0",
        },
        {
          id: 3,
          title: "let",
          videoURL: "https://youtu.be/dvpKScnKOHw",
        },
        { id: 4, title: "const", videoURL: "https://youtu.be/QS-c5aQS_Mw" },
        {
          id: 5,
          title: "Arrow Functions",
          videoURL: "https://youtu.be/4N-L3Mmzu0Y",
        },
        { id: 6, title: "this", videoURL: "https://youtu.be/0T5M3agKEnk" },
        {
          id: 7,
          title: "Spread Operator",
          videoURL: "https://youtu.be/Fc6DPYx9aQU",
        },
        {
          id: 8,
          title: "Destructuring Array",
          videoURL: "https://youtu.be/ol5sgcMvONU",
        },
        {
          id: 9,
          title: "String Templates",
          videoURL: "https://youtu.be/001s2FJ10E8",
        },
        {
          id: 10,
          title: "Class",
          videoURL: "https://youtu.be/LfIoymnF6Mg",
        },
        {
          id: 11,
          title: "Type Inference",
          videoURL: "https://youtu.be/3ui_st7rtfA",
        },
        {
          id: 12,
          title: "Any Type",
          videoURL: "https://youtu.be/4dfxhQ3Y3N4",
        },
        {
          id: 13,
          title: "Enumeration",
          videoURL: "https://youtu.be/gTecM7FWe-I",
        },
        {
          id: 14,
          title: "Class Constructors",
          videoURL: "https://youtu.be/lrVPcQgNyeM",
        },
        {
          id: 15,
          title: "Interfaces",
          videoURL: "https://youtu.be/2yJu0kOIVr0",
        },
        {
          id: 16,
          title: "Decorators",
          videoURL: "https://youtu.be/8KQYogIzRq4",
        },
      ],
    },
    {
      id: 2,
      title: "Starting with React",
      lessons: [
        {
          id: 1,
          title: "Components",
          videoURL: "https://youtu.be/Y2hgEGPzTZY",
        },
        {
          id: 2,
          title: "Functional Components",
          videoURL: "https://youtu.be/Cla1WwguArA",
        },
        {
          id: 3,
          title: "Class Components",
          videoURL: "https://youtu.be/lnV34uLEzis",
        },
        { id: 4, title: "Props", videoURL: "https://youtu.be/m7OWXtbiXX8" },
        { id: 5, title: "State", videoURL: "https://youtu.be/4ORZ1GmjaMc" },
        { id: 6, title: "Hooks", videoURL: "https://youtu.be/cF2lQ_gZeA8" },
        { id: 7, title: "Styling", videoURL: "https://youtu.be/j5P9FHiBVNo" },
      ],
    },
    {
      id: 3,
      title: "React Hooks",
      lessons: [
        {
          id: 1,
          title: "useState",
          videoURL: "https://youtu.be/lAW1Jmmr9hc",
        },
        {
          id: 2,
          title: "useEffect",
          videoURL: "https://youtu.be/06Y6aJzTmXY",
        },
        {
          id: 3,
          title: "useReducer",
          videoURL: "https://youtu.be/cVYp4u1m6iA",
        },
        { id: 4, title: "useMemo", videoURL: "https://youtu.be/qySZIzZvZOY" },
        {
          id: 5,
          title: "useCallback",
          videoURL: "https://youtu.be/IL82CzlaCys",
        },
        { id: 6, title: "useRef", videoURL: "https://youtu.be/yCS2m01bQ6w" },
        {
          id: 7,
          title: "useContext",
          videoURL: "https://youtu.be/CI7EYWmRDJE",
        },
      ],
    },
    {
      id: 4,
      title: "Learning Redux",
      lessons: [
        {
          id: 1,
          title: "Why use redux?",
          videoURL: "https://youtu.be/0awA5Uw6SJE",
        },
        { id: 2, title: "Store", videoURL: "https://youtu.be/WDJ2eidE-b0" },
        { id: 3, title: "Reducers", videoURL: "https://youtu.be/fy2FHo-iXDE" },
        { id: 4, title: "Actions", videoURL: "https://youtu.be/ir0F2PeJugo" },
        {
          id: 5,
          title: "Combine Reducers",
          videoURL: "https://youtu.be/-1I-HpvUiBQ",
        },
        {
          id: 6,
          title: "Middleware",
          videoURL: "https://youtu.be/rRtM82jBQJo",
        },
      ],
    },
    {
      id: 5,
      title: "Next.js",
      lessons: [
        {
          id: 1,
          title: "What is Next.js?",
          videoURL: "https://youtu.be/9P8mASSREYM",
        },
        { id: 2, title: "Routing", videoURL: "https://youtu.be/hvYKrqnY8LM" },
        {
          id: 3,
          title: "Dynamic Routes",
          videoURL: "https://youtu.be/Ql5kyJaYbls",
        },
        {
          id: 4,
          title: "Data fetching",
          videoURL: "https://youtu.be/GOdu5C8JzL8",
        },
        { id: 5, title: "Images", videoURL: "https://youtu.be/ZRZngn_GdXY" },
        { id: 6, title: "Head", videoURL: "https://youtu.be/vWWd5ezQTic" },
        {
          id: 7,
          title: "API Routes",
          videoURL: "https://youtu.be/aZkZUduCauo",
        },
        {
          id: 8,
          title: "SSR: Server-side rendering",
          videoURL: "https://youtu.be/3eUZeuGXo_U",
        },
        {
          id: 9,
          title: "SSG: Static-site generation",
          videoURL: "https://youtu.be/7UouvxZ6OaM",
        },
        {
          id: 10,
          title: "ISR: Incremental Static Regeneration",
          videoURL: "https://youtu.be/d5unMDna5ng",
        },
        {
          id: 11,
          title: "Callbacks",
          videoURL: "https://youtu.be/TcnRPXPM68Q",
        },
        {
          id: 12,
          title: "TypeScript",
          videoURL: "https://youtu.be/2SLLvO9OK10",
        },
        {
          id: 13,
          title: "Deploy",
          videoURL: "https://youtu.be/KmxAH7ng8Qw",
        },
      ],
    },
  ],
};

type ToggleLessonPayload = {
  module: Module;
  lesson: Lesson;
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    toggleLesson: (state, action: PayloadAction<ToggleLessonPayload>) => {
      return {
        ...state,
        activeModule: action.payload.module,
        activeLesson: action.payload.lesson,
      };
    },
    navigateToNextVideo: (
      state,
      action: PayloadAction<ToggleLessonPayload>
    ) => {
      const activeModuleIndex = state.modules.findIndex(
        (module) => module.id === action.payload.module.id
      );
      const activeLessonIndex = state.modules[
        activeModuleIndex
      ].lessons.findIndex((lesson) => lesson.id === action.payload.lesson.id);

      const activeModule =
        state.modules[activeModuleIndex].lessons.length > activeLessonIndex + 1
          ? state.modules[activeModuleIndex]
          : state.modules.length > activeModuleIndex + 1
          ? state.modules[activeModuleIndex + 1]
          : state.modules[0];

      const activeLesson =
        state.modules[activeModuleIndex].lessons.length > activeLessonIndex + 1
          ? activeModule.lessons[activeLessonIndex + 1]
          : state.modules.length > activeModuleIndex + 1
          ? activeModule.lessons[0]
          : activeModule.lessons[0];

      return {
        ...state,
        activeModule,
        activeLesson,
      };
    },
  },
});

export const courseReducer = courseSlice.reducer;
export const courseActions = courseSlice.actions;
