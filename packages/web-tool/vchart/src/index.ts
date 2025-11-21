import { toolManager } from '@butler/web-ai';
import RenderChart from './render';

import '@butler/web-react-chat';

export { RenderChart };

declare module '@butler/web-ai' {
  namespace AIChat {
    export namespace FunctionTool {
      export interface PluginMap {
        vChart: {};
      }
    }
  }
}

export function addVChartTool() {
  toolManager.add(
    {
      name: 'vChart',
      description: 'Render a chart using VChart',
      parameters: {
        type: 'object',
        properties: {
          spec: {
            type: 'object',
            description: 'The VChart spec',
            properties: {
              type: {
                type: 'string',
                description: 'The chart type',
                enum: ['line', 'bar', 'area'],
              },
              xField: {
                type: 'string',
                description: 'The field name for x-axis',
              },
              yField: {
                type: 'string',
                description: 'The field name for y-axis',
              },
              data: {
                type: 'object',
                description: 'The data for the chart',
                properties: {
                  values: {
                    type: 'array',
                    description: 'The data values',
                  },
                },
                required: ['values'],
              },
            },
            required: ['type', 'xField', 'yField', 'data'],
            example: {
              type: 'line',
              xField: 'x',
              yField: 'y',
              data: {
                values: [
                  { x: 'A', y: 5 },
                  { x: 'B', y: 2 },
                  { x: 'C', y: 4 },
                ],
              },
            },
          },
        },
        required: ['spec'],
      },
    },
    {
      type: 'function-render',
      render: RenderChart,
    }
  );
}
