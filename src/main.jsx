import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss';
import AppRouter from './Routes/AppRouter.jsx'
import AnimatedCursor from 'react-animated-cursor'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
    <AnimatedCursor
      innerSize={7}
      outerSize={35}
      innerScale={1}
      outerScale={0.5}
      outerAlpha={0}
      innerAlpha = {0.5}
      hasBlendMode={true}
      innerStyle={{
        backgroundColor: 'var(--cursor-color)'
      }}
      outerStyle={{
        border: '3px solid var(--cursor-color)'
      }}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        {
          target: '.custom',
          options: {
            innerSize: 12,
            outerSize: 12,
            color: '255, 255, 255',
            outerAlpha: 0.3,
            innerScale: 0.7,
            outerScale: 5
          }
        }
      ]}
    />
  </React.StrictMode>,
)
