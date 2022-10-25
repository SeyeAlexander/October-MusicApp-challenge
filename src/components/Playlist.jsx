import { Box, Flex } from "@chakra-ui/react";
import SideBar from "./SideBar";
import TunesBanner from "./TunesBanner";
import TunesList from "./TunesList";

const Playlist = () => {
  return (
    <Box>
      <Box
        ml={{ base: "0", md: "2" }}
        pt={{ base: "5", md: "80px" }}
        mb={{ base: "2", md: "6" }}
        color='#EFEEE0'
      >
        <Flex pb='50px'>
          <SideBar />
          <TunesBanner />
        </Flex>
      </Box>

      <Box pb={{ base: "20px", md: "120px" }}>
        <TunesList />
      </Box>
    </Box>
  );
};

export default Playlist;
