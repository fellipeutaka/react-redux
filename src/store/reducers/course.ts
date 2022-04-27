import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Course } from "../../types/Course";
import { Lesson } from "../../types/Lesson";
import { Module } from "../../types/Module";

const initialState: Course = {
  activeModule: {
    id: 1,
    title: "Starting with React",
    lessons: [
      { id: 1, title: "Javascript", videoURL: "https://youtu.be/PkZNo7MFNFg" },
      { id: 2, title: "Components", videoURL: "https://youtu.be/Y2hgEGPzTZY" },
      { id: 3, title: "Props", videoURL: "https://youtu.be/m7OWXtbiXX8" },
      { id: 4, title: "State", videoURL: "https://youtu.be/4ORZ1GmjaMc" },
      { id: 5, title: "Hooks", videoURL: "https://youtu.be/cF2lQ_gZeA8" },
      { id: 6, title: "Styling", videoURL: "https://youtu.be/j5P9FHiBVNo" },
    ],
  },
  activeLesson: {
    id: 2,
    title: "Components",
    videoURL: "https://youtu.be/Y2hgEGPzTZY",
  },
  modules: [
    {
      id: 1,
      title: "Starting with React",
      lessons: [
        {
          id: 1,
          title: "Javascript",
          videoURL: "https://youtu.be/PkZNo7MFNFg",
        },
        {
          id: 2,
          title: "Components",
          videoURL: "https://youtu.be/Y2hgEGPzTZY",
        },
        { id: 3, title: "Props", videoURL: "https://youtu.be/m7OWXtbiXX8" },
        { id: 4, title: "State", videoURL: "https://youtu.be/4ORZ1GmjaMc" },
        { id: 5, title: "Hooks", videoURL: "https://youtu.be/cF2lQ_gZeA8" },
        { id: 6, title: "Styling", videoURL: "https://youtu.be/j5P9FHiBVNo" },
      ],
    },
    {
      id: 2,
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
      id: 3,
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
          title: "Data fetching",
          videoURL: "https://youtu.be/GOdu5C8JzL8",
        },
        { id: 4, title: "Images", videoURL: "https://youtu.be/ZRZngn_GdXY" },
        {
          id: 5,
          title: "API Routes",
          videoURL: "https://youtu.be/aZkZUduCauo",
        },
        {
          id: 6,
          title: "SSR: Server-side rendering",
          videoURL: "https://youtu.be/3eUZeuGXo_U",
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
