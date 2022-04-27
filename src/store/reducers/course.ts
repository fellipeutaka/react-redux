import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Course } from "../../types/Course";
import { Lesson } from "../../types/Lesson";
import { Module } from "../../types/Module";

const initialState: Course = {
  activeModule: {
    id: 1,
    title: "Starting with React",
    lessons: [
      { id: 1, title: "Javascript" },
      { id: 2, title: "Components" },
      { id: 3, title: "Props" },
      { id: 4, title: "State" },
      { id: 5, title: "Hooks" },
      { id: 6, title: "Styling" },
    ],
  },
  activeLesson: { id: 5, title: "Hooks" },
  modules: [
    {
      id: 1,
      title: "Starting with React",
      lessons: [
        { id: 1, title: "Javascript" },
        { id: 2, title: "Components" },
        { id: 3, title: "Props" },
        { id: 4, title: "State" },
        { id: 5, title: "Hooks" },
        { id: 6, title: "Styling" },
      ],
    },
    {
      id: 2,
      title: "Learning Redux",
      lessons: [
        { id: 1, title: "Why use redux?" },
        { id: 2, title: "Store" },
        { id: 3, title: "Reducers" },
        { id: 4, title: "Actions" },
        { id: 5, title: "State" },
        { id: 6, title: "Dispatch" },
      ],
    },
    {
      id: 3,
      title: "Next.js",
      lessons: [
        { id: 1, title: "What is Next.js?" },
        { id: 2, title: "Routing" },
        { id: 3, title: "Data fetching" },
        { id: 4, title: "Images" },
        { id: 5, title: "API Routes" },
        { id: 6, title: "SSR: Server-side rendering" },
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
  },
});

export const courseReducer = courseSlice.reducer;
export const courseActions = courseSlice.actions;
