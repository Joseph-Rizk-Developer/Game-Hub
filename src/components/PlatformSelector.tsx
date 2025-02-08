import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../entities/Platform";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../gameQuery/store";

const PlatformSelector = () => {
  const { data, error, isLoading } = usePlatforms();
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const SelectedPlatform = usePlatform(selectedPlatformId);
  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {SelectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setSelectedPlatformId(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
