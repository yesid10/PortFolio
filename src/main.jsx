import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss';
import AppRouter from './Routes/AppRouter.jsx'
import AnimatedCursor from 'react-animated-cursor'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
    <AnimatedCursor
      hasBlendMode={true}
      innerSize={8}
      outerSize={30}
      innerScale={8}
      outerScale={
        0
      }
      outerAlpha={
        0
      }

      innerStyle={{
        backgroundColor: 'var(--cursor-color2)',
        
      }}
      outerStyle={{
        border: '2px solid var(--cursor-color)',

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
        'li',
        {
          target: '.li',
          options: {
            innerSize: 30,
            outerSize: 30,
            color: '255, 0, 0',
            outerAlpha: 1,
            innerScale: 5,
            outerScale: 5,
          }
          
        }
        
      ]}
    />
  </React.StrictMode>,
)
