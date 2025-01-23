import { Input } from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
  searchText: (searchText: string) => void;
}

const SearchInput = ({ searchText }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) searchText(ref.current.value);
      }}
    >
      <Input
        ref={ref}
        borderRadius={20}
        placeholder="Search games..."
        variant={"filled"}
      ></Input>
    </form>
  );
};

export default SearchInput;
