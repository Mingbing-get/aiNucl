import { createContext } from 'react';

import { Task } from '@ai-nucl/web-ai';

export const TaskContext = createContext<{
  task: Task;
}>({
  task: new Task(),
});
