import { HStack, Image, useBreakpointValue } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";
import ColorModeSwitch from "./ColorModeSwitch";

interface Props {
  searchText: (searchText: string) => void;
}

const NavBar = ({ searchText }: Props) => {
  const shrink_searchBar = useBreakpointValue({ base: false, lg: true });
  return (
    <HStack spacing={shrink_searchBar ? 200 : 1} padding={2}>
      <Image src={logo} boxSize="60px" />
      <SearchInput searchText={searchText} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
