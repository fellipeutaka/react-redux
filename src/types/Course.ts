import { Lesson } from "./Lesson";
import { Module } from "./Module";

export type Course = {
  activeModule: Module;
  activeLesson: Lesson;
  modules: Module[];
};
