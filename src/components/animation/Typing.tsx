import { TypeAnimation } from 'react-type-animation';

export default function Typing() {

  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'デザイナー',
        500,
        'マーケター',
        500,
        'クリエイター',
        500,
        'エンジニア',
        500
      ]}
      wrapper="span"
      speed={10}
      // Prevent layout shifts on initial load
      preRenderFirstString={true}
      style={{ marginLeft: '5px', fontSize: '1em', textAlign: 'left', color: "#84ffff", fontWeight: 'bold', display: 'inline-block', width: '38.5%' }}
      repeat={1}
    />
  );
};