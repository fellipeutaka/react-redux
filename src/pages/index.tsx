import { Flex } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Video from "../components/Video";

export default function Home() {
  return (
    <>
      <Header />
      <Flex as="main" flexDir={["column", "row"]}>
        <Video />
        <Sidebar />
      </Flex>
      <Footer />
    </>
  );
}
