import React, { useState, useEffect } from 'react';
import { Flex, SimpleGrid } from '@chakra-ui/react';
import Display from './Display';
import Keys from './Keys';

export default function Calculator() {
  const [value, setValue] = useState(null);
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [onHold, setOnHold] = useState(false);

  const resetState = () => {
    setValue(null);
    setDisplayValue('0');
    setOperator(null);
    setOnHold(false);
  };

  // Allowed operations and computations object.
  const compute = {
    '+': (prevValue, nextValue) => prevValue + nextValue,
    '-': (prevValue, nextValue) => prevValue - nextValue,
    '=': (prevValue, nextValue) => nextValue,
  };

  // Updating state in order to display typed/clicked values.
  const typeHandler = (key) => {
    if (onHold) {
      setDisplayValue(String(key));
      setOnHold(false);
    } else {
      setDisplayValue(displayValue === '0' ? String(key) : displayValue + key);
    }
  };

  // Updating state in order to display a dot at the left
  // of the current value.
  const dotHandler = () => {
    if (!/\./.test(displayValue)) {
      setDisplayValue(`${displayValue}.`);
      setOnHold(false);
    }
  };

  // Getting current value from state and computing with
  // last typed value.
  const play = (key) => {
    const inputKey = parseFloat(displayValue);

    if (value == null) {
      setValue(inputKey);
    } else if (operator) {
      const currentValue = value || 0;
      const newValue = compute[operator](currentValue, inputKey);

      setValue(newValue);
      setDisplayValue(String(newValue));
    }

    setOnHold(true);
    setOperator(key);
  };

  // Keyboard events handler
  const keyboardHandler = (event) => {
    let { key } = event;

    if (key === 'Enter') key = '=';
    // Setting state to display values.
    if (/\d/.test(key)) {
      event.preventDefault();
      typeHandler(parseInt(key, 10));
    }
    // Check for available operations and compute values
    else if (key in compute) {
      event.preventDefault();
      play(key);
    }
    // Adding dot at the right of a value.
    else if (key === '.') {
      event.preventDefault();
      dotHandler();
    }
    // Removing displayed values.
    else if (key === 'Clear') {
      event.preventDefault();
      if (displayValue !== '0') {
        setDisplayValue('0');
      } else {
        resetState();
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', keyboardHandler);
    return () => {
      document.removeEventListener('keydown', keyboardHandler);
    };
  });

  // Check state in order to show all clear or clear
  const isDisplayClear = displayValue !== '0';
  const displayResetText = isDisplayClear ? 'C' : 'AC';

  return (
    <>
      <Display value={displayValue} />
      <Flex columns={2}>
        <SimpleGrid flex="3" columns={3}>
          <Keys clickHandler={() => typeHandler(7)}>7</Keys>
          <Keys clickHandler={() => typeHandler(8)}>8</Keys>
          <Keys clickHandler={() => typeHandler(9)}>9</Keys>
          <Keys clickHandler={() => typeHandler(4)}>4</Keys>
          <Keys clickHandler={() => typeHandler(5)}>5</Keys>
          <Keys clickHandler={() => typeHandler(6)}>6</Keys>
          <Keys clickHandler={() => typeHandler(1)}>1</Keys>
          <Keys clickHandler={() => typeHandler(2)}>2</Keys>
          <Keys clickHandler={() => typeHandler(3)}>3</Keys>
          <Keys
            clickHandler={() =>
              isDisplayClear ? setDisplayValue('0') : resetState()
            }
          >
            {displayResetText}
          </Keys>
          <Keys clickHandler={() => typeHandler(0)}>0</Keys>
          <Keys clickHandler={() => dotHandler()}>.</Keys>
        </SimpleGrid>
        <SimpleGrid flex="1" columns={1}>
          <Keys clickHandler={() => play('+')}>+</Keys>
          <Keys clickHandler={() => play('-')}>−</Keys>
          <Keys clickHandler={() => play('=')}>=</Keys>
        </SimpleGrid>
      </Flex>
    </>
  );
}
