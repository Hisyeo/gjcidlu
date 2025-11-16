import { useState, useEffect } from 'react';
import { getQueue, addToQueue as aq, removeFromQueue as rq, clearQueue as cq } from './queue';
import { QueueAction } from './types';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export function useQueue() {
  const [queue, setQueue] = useState<QueueAction[]>(getQueue());

  useEffect(() => {
    const handleStorageChange = () => {
      setQueue(getQueue());
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const addToQueue = (action: Omit<QueueAction, 'id'>) => {
    aq(action);
    setQueue(getQueue());
  };

  const removeFromQueue = (actionId: string) => {
    rq(actionId);
    setQueue(getQueue());
  };

  const clearQueue = () => {
    cq();
    setQueue([]);
  };

  return { queue, addToQueue, removeFromQueue, clearQueue };
}
