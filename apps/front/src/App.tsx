import { AIChatRender } from '@ai-nucl/web-react-chat';
import { HttpTransporter } from '@ai-nucl/web-ai';
import { addVChartTool } from '@ai-nucl/web-tool-vchart';
import { addArcoFormTool } from '@ai-nucl/web-tool-arco';
import '@ai-nucl/web-react-chat/style.css';

import './App.scss';

addVChartTool();
addArcoFormTool();

const baseUrl = 'http://localhost:3100';
const httpTransporter = new HttpTransporter({
  simpleChartRequestOptions: {
    url: `${baseUrl}/ai/generateText`,
    headers: {
      'Content-Type': 'application/json',
    },
  },
  startTaskRequestOptions: {
    url: `${baseUrl}/ai/task`,
    headers: {
      'Content-Type': 'application/json',
    },
  },
  reportFunctionCallResultRequestOptions: {
    url: `${baseUrl}/ai/functionCallResult`,
    headers: {
      'Content-Type': 'application/json',
    },
  },
});

function App() {
  return (
    <div
      style={{
        height: '100vh',
        maxWidth: '1024px',
        margin: '0 auto',
        paddingBottom: '1rem',
      }}
    >
      <AIChatRender transporter={httpTransporter} />
    </div>
  );
}

export default App;
