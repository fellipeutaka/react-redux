import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Course } from "../../types/Course";
import { Lesson } from "../../types/Lesson";
import { Module } from "../../types/Module";

const initialState: Course = {
  activeModule: {
    id: 1,
    title: "Starting with React",
    lessons: [
      { id: 1, title: "First lesson" },
      { id: 2, title: "Second lesson" },
    ],
  },
  activeLesson: { id: 1, title: "First lesson" },
  modules: [
    {
      id: 1,
      title: "Starting with React",
      lessons: [
        { id: 1, title: "First lesson" },
        { id: 2, title: "Second lesson" },
      ],
    },
    {
      id: 2,
      title: "Learning Redux",
      lessons: [
        { id: 1, title: "Third lesson" },
        { id: 2, title: "Fourth lesson" },
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
