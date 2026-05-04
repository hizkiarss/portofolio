import React from 'react'
import BlurText from './animation/blurText'

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

type blurTextProps = {
    text: string;
    style: string;
};

const blurText = ({ text, style }: blurTextProps)=> {
  return (
    <BlurText
  text={text}
  delay={600}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className={style}
/>
  )
}

export default blurText
