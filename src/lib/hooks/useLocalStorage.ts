"use client";

import _ from "lodash";

import {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
  useCallback,
} from "react";

export default function useLocalStorage<T>(
  key: string,
  defaultValue: T
): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState(defaultValue);

  const getState = useCallback(
    (key: string): T => {
      try {
        const item = localStorage.getItem(key);

        if (!_.isNil(item)) {
          return JSON.parse(item);
        }

        localStorage.setItem(key, JSON.stringify(defaultValue));

        return defaultValue;
      } catch {
        return defaultValue;
      }
    },
    [defaultValue]
  );

  const updateState = useCallback(
    (value: SetStateAction<T>) => {
      try {
        const valueToStore =
          typeof value === "function"
            ? (value as (prevState: T) => T)(state)
            : value;

        setState(valueToStore);

        localStorage.setItem(key, JSON.stringify(valueToStore));

        return valueToStore;
      } catch (error) {
        console.error(error);
      }
    },
    [key, state]
  );

  useEffect(() => {
    setState(getState(key));
  }, [getState, key]);

  return [state, updateState];
}
