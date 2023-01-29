import { Lesson } from "./Lesson";

export type Module = {
  id: number;
  title: string;
  lessons: Lesson[];
};
