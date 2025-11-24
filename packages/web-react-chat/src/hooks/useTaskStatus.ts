import { useEffect, useState } from 'react';

import type { AIChat } from '@ai-nucl/web-ai';
import useTask from './useTask';

export default function useStaskStatus() {
  const task = useTask();
  const [status, setStatus] = useState<AIChat.Task.Status>(task.getStatus());

  useEffect(() => {
    const unsubscribe = task.on('change-status', (event) => {
      setStatus(event.status);
    });

    setStatus(task.getStatus());

    return () => {
      unsubscribe();
    };
  }, []);

  return status;
}
