import { useEffect, useState, useRef } from 'react'

const PREFIX = 'chat-feature-'
const localStorageStub = {
  getItem: () => null,
  setItem: () => null,
  isStub: true,
};

export default function useLocalStorage(key, initialValue) {
  let localStorageProxy = useRef(localStorageStub);
  useEffect(() => {
    localStorageProxy.current = typeof window === 'undefined'
    ? localStorageStub
    : localStorage;
  }, [localStorageProxy])

  const prefixedKey = PREFIX + key
  const [value, setValue] = useState(initialValue);

  // run once to hydrate value with localStorage value from browser
  useEffect(() => {
    const jsonValue = localStorageProxy.current.getItem(prefixedKey);
    if (jsonValue) {
      setValue(JSON.parse(jsonValue));
    }
  }, [prefixedKey]);

  useEffect(() => {
    const jsonValue = localStorageProxy.current.getItem(prefixedKey);
    // if something exists in localStorage, do not overwrite
    if (value === initialValue && jsonValue) {
      return;
    }
    localStorageProxy.current.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value, initialValue]);

  return [value, setValue]
}
