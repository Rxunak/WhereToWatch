import React, { useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "../ui/input-group";
import { useNavigate } from "react-router";
import { SearchIcon } from "lucide-react";
import { cn } from "~/lib/utils";

type SearchInputProps = {
  className?: string;
  showButton?: boolean;
};

function SearchInput({ className, showButton = true }: SearchInputProps) {
  const [value, setValue] = useState("");
  let navigate = useNavigate();

  const handleValueChange = (e: any) => {
    setValue(e.target.value);
  };

  const handleSearch = () => {
    navigate(`/search?q=${encodeURIComponent(value)}`);
    setValue("");
  };

  return (
    <div>
      <InputGroup className={cn(className)}>
        <InputGroupInput
          placeholder="Search a film or series..."
          className="text-lg!"
          value={value}
          onChange={handleValueChange}
          onKeyDown={(e) => (e.key === "Enter" ? handleSearch() : null)}
        />
        <InputGroupAddon>
          <SearchIcon className="text-amber-700 size-5 mr-1" />
        </InputGroupAddon>
        {showButton && (
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              variant="outline"
              className="h-10 w-20 border-amber-700 text-amber-700 hover:bg-amber-700/8 hover:text-amber-700 cursor-pointer"
              onClick={handleSearch}
            >
              Search
            </InputGroupButton>
          </InputGroupAddon>
        )}
      </InputGroup>
    </div>
  );
}

export default SearchInput;
