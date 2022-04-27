import { Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Video from "../components/Video";

export default function Home() {
  return (
    <Flex flexDir="column">
      <Header />
      <Flex>
        <Video />
        <Sidebar />
      </Flex>
    </Flex>
  );
}
