import React, { useEffect, useState } from "react";
import { styled } from "goober";
import useGetColor from "../hooks/useGetColor";
import SearchIcon from "../assets/search.svg";
import SpinnerIcon from "../assets/spinner.svg"
import CloseIcon from "../assets/close.svg";

const Select = () => {
  const DEFAULT_KEYWORD = "Select...";
  const MAX_OPTIONS = 3;

  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);
  const [selections, setSelections] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showClear, setShowClear] = useState(false);

  const handleChange = event => {
    setKeyword(event.target.value?.toLowerCase());
  }

  const handleClear = () => {
    // setSelections([]);
    setKeyword("");
  }

  const handleRemoveSelection = option => {
    let newSelections = selections.filter(selection => selection.hex !== option.hex);
    
    setSelections(newSelections);
  };

  const addToSelection = option => {
    if (selections.length > MAX_OPTIONS - 1) {
      console.log("Only 3 options allowed at the same time ");

      return;
    }

    let newOptions = new Set([...selections, option]);
    setSelections(Array.from(newOptions));
  }
  
  const findFuzzy = text => {
    let highlight, previousText, newIndex, lastIndex = 0, parts = [];
    let regex = new RegExp(keyword, "gi");

    while (highlight = regex.exec(text)) {
      newIndex = highlight.index;
      previousText = text.substring(lastIndex, newIndex); 
      lastIndex = newIndex + keyword.length;

      if (previousText.length > 0) parts.push(<b>{previousText}</b>);

      parts.push(
        <span style={{ backgroundColor: '#ffff0075' }}>
          {highlight[0]}
        </span>
      );
    }
    
    previousText = text.substring(lastIndex, text.length); 
    parts.push(<b>{previousText}</b>);
    
    return parts;
  };

  const handleKeyPress = event => {
    event.preventDefault();

    let key = event.key;

    switch (key) {
      case 'ArrowUp': 
        if (activeIndex > 0) setActiveIndex(activeIndex - 1); break;
      case 'ArrowDown': 
        if (activeIndex < results.length - 1) setActiveIndex(activeIndex + 1); break;
      case 'Tab': 
        setActiveIndex(0); break;
      case 'Enter': 
        results[activeIndex] && addToSelection(results[activeIndex]); break;
      case 'Escape': 
        handleClear(); break;

      default: break;
    }
  };

  const colorData = useGetColor({ query: keyword });

  const SelectionBox = props => {
    const [deleted, setDeleted] = useState(true);

    const handleCancel = () => {
      setDeleted(true);
      setTimeout(() => handleRemoveSelection(props.selection), 600);
    };

    useEffect(() => deleted && setDeleted(false), []);

    return (
      <SelectionItem
        color={props.selection.hex}
        className={deleted ? "delete-animate" : "add-animate"}>
        <>{props.selection.name}</>
        <CancelButton
          onClick={handleCancel}
          color={props.selection.hex}>
            x
        </CancelButton>
      </SelectionItem>
    )};

  useEffect(() => {
    let newResults = [];
    
    if (!colorData.loading) {
      let data = colorData.data;
      if (data && data.length > 0) {
        newResults = data.sort((a, b) => a.name.localeCompare(b.name));

        setResults(newResults);
      } else if (results.length > 0) {
        setResults([]);
      }
    } 
  }, [colorData]);

  return (
    <Wrapper>
      <SelectControl>
        {selections && selections.length === 0 
        ? <TextInputImage
            src={SearchIcon}
            styles={{ 
              'left': '5px', 
              'float': 'left',
              'margin-left': '10px',
              'margin-top': '8px'
            }} />
        : <SelectionList>
            {selections && selections.map(selection =>
              <SelectionBox selection={selection} />)}
          </SelectionList>
        }
        <TextInput 
          type="text"
          onChange={handleChange}         
          placeholder={DEFAULT_KEYWORD}
          value={keyword}
        />
        <TextInputImage
          src={CloseIcon}
          styles={{  
            'cursor': 'pointer',
            'float': 'right',
            'margin-top': '8px',
            'margin-right': '10px'
          }}
          onMouseOver={() => { setShowClear(true); console.log(showClear)}}
          onMouseOut={() => setShowClear(false)}
          onClick={handleClear} />
          {showClear && 
            <span 
              style={{ 
                fontSize: 9, 
                float: 'right', 
                marginTop: 8, 
                marginRight: 8
              }}>
                Clear
              </span>}
        {colorData.loading   
        ? <ResultList>
            <ResultItem>
              <TextInputImage
                src={SpinnerIcon}
                styles={{ top: '15px' }}/>
            </ResultItem>
          </ResultList>  
        : (results && results.length > 0) &&
          <ResultList onKeyUp={handleKeyPress}>
            {results.map((selection, key) => 
              <ResultItem
                onClick={() => addToSelection(selection)}
                color={selection.hex}
                className={key === activeIndex && "active"}
                styles={{
                  'text-align': 'left',
                  'padding-left': '5px'
                }}>
                {keyword && findFuzzy(selection.name)}
              </ResultItem>)}
          </ResultList>
        }
      </SelectControl>
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  margin: 0 auto;
  text-align: center;
`;

const SelectControl = styled("div")`
  position: relative;
  width: 500px;
  height: 30px;
  border-radius: 8px;
  background-color: #333333; 
  &:focus-within { background-color: #eeeeee; color: #000000; }
`;

const TextInput = styled("input")`
  color: black;
  float: left;
  margin-top: 5px;
  margin-left: 10px;
  outline: none;
  background-color: transparent;
`;

const TextInputImage = styled("img")(props => ({
  height: '15px',
  width: '15px',
  textColor: 'black',
  margin: '6px auto',
  ...props.styles
}));

const ResultList = styled("ul")`
  position: absolute;
  width: 500px;
  top: 45px;
  left: -1px;
  text-align: center;
  background-color: white;
  border-radius: 7px;
  padding-top: 3px;
  padding-bottom: 3px;  
`;

const ResultItem = styled("button")(props => `
  width: 97%;
  height: 35px;
  color: white;
  margin-top: 3px;
  margin-bottom: 3px;
  border-radius: 7px;
  background-color: ${props.color};
  
  &:hover, &.active {
    border: 5px solid #00000050;
    cursor: pointer;
  }
`);

const SelectionList = styled("div")`
  float: left;
  margin-top: 4px;
  margin-left: 3px;
`;

const SelectionItem = styled("div")(props => `
  padding: 0px;
  margin: 2px;
  padding-left: 7px;
  border-radius: 7px;
  float: left;
  background-color: ${props.color};
  color: white;
  font-weight: bold; 
  font-size: 9px; 
  padding: 3px;
  
  &.add-animate {
    opacity:1;
    transition: opacity 0.8s;
  }

  &.delete-animate {
    opacity:0;
    transition: opacity 0.8s;
  }

  &:hover {
    opacity: 0.8;
    box-shadow: inset 0px 1px 0px ${props.color};
  }
`);

const CancelButton = styled("button")(props => `
  font-size: 9px;
  font-family: sans-serif;
  font-weight:bold;
  border-radius: 20px;
  background: #ffffff90;
  height: 12px; 
  width: 12px;
  color: ${props.color};
  align: right;
  display: inline-block;
  margin-left: 10px;
  margin-top: 1px;
  
  &:hover {
    background: #ffffff99;
    cursor: pointer;
  }
`);

export default Select;
