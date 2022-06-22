import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DebounceInput } from "react-debounce-input";

const Search = ({ value, onChangeValue }) => {
  const navigate = useNavigate();
  console.log(value);

//-------------------------------------there syncronize our url with UI - depending on the word introduced----------------//
  useEffect(() => {

    const params = new URLSearchParams();
    if (value) {
      params.append("s", value);
    } else {
      params.delete("s");
    }
    navigate(`?s=${value}`);
  }, [value, navigate]);

//-------------------------use debounce for input-in case we receive the data on the server,do not flood it----------------//
  return (
    <DebounceInput
      placeholder="Search"
      minLength={2}
      value={value}
      debounceTimeout={900}
      onChange={onChangeValue}
    />
  );
};

export default Search;
