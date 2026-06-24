import React from 'react'
import { useState } from 'react'
const Glassmorphic = () => {

    const [blur, setBlur] = useState(10);
    const [opacity, setOpacity] = useState(0.2);

    const cardStyle = {
        backdropFilter: `blur(${blur}px)`,
        backgroundColor: `rgba(255, 255, 255, ${opacity})`,
        border: '1px solid rgba(255, 255, 255, 0.3)',
  };
  const copyCSS = async () => {
    await navigator.clipboard.writeText(JSON.stringify(cardStyle));
    // console.log(state.hex);
  };


  return (
    <div className=" bg-[#0E0E0E] md:px-[3rem] px-[1rem] md:py-[2rem] py-[1rem] flex justify-center flex-col items-start">
        <div>
            <h1 className="text-3xl  p-[1rem] ">GLASSMORPHIC BACKGROUND GENERATOR</h1>
        </div>

       <div className=" w-full flex flex-row px-[6rem] mt-[3rem] text-center justify-evenly items-center gap-[20px] flex-wrap">
        
        

        
        <div className="glass-container">
      {/* This colorful circle sits BEHIND the card to show off the blur */}
      <div className="bg-glow"></div>

      <div className="glass-card" style={cardStyle}>
        
        
      


      </div>
        </div>
        <div>
            <p className="text-2xl">Adjust the sliders to see the frosted glass effect in real-time.</p>
                  <div className="controls">
          <label>Blur: {blur}px</label>
          <input 
            type="range" min="0" max="60" 
            value={blur} onChange={(e) => setBlur(e.target.value)} 
          />
          
          <label>Opacity: {opacity}</label>
          <input 
            type="range" min="0" max="0.3" step="0.01" 
            value={opacity} onChange={(e) => setOpacity(e.target.value)} 
          />
        </div>
        
        <button className="copy-btn" onClick={copyCSS}>COPY CSS</button>
        </div>
        

       </div>


    </div>
  )
}

export default Glassmorphic