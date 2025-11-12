import { QueueAction } from './types';

const QUEUE_STORAGE_KEY = 'submissionQueue';

export function getQueue(): QueueAction[] {
  if (typeof window === 'undefined') {
    return [];
  }
  const storedQueue = localStorage.getItem(QUEUE_STORAGE_KEY);
  return storedQueue ? JSON.parse(storedQueue) : [];
}

export function addToQueue(action: Omit<QueueAction, 'id'>) {
  const queue = getQueue();
  const newAction = { ...action, id: crypto.randomUUID() } as QueueAction;
  const updatedQueue = [...queue, newAction];
  localStorage.setItem(QUEUE_STORAGE_KEY, JSON.stringify(updatedQueue));
  window.dispatchEvent(new Event('storage')); // Notify other components of the change
}

export function removeFromQueue(actionId: string) {
  const queue = getQueue();
  const updatedQueue = queue.filter(action => action.id !== actionId);
  localStorage.setItem(QUEUE_STORAGE_KEY, JSON.stringify(updatedQueue));
  window.dispatchEvent(new Event('storage'));
}

export function clearQueue() {
  localStorage.removeItem(QUEUE_STORAGE_KEY);
  window.dispatchEvent(new Event('storage'));
}
