import Image from 'next/image';
import BounceIn from 'src/components/animation/BounceIn';

export default function SocialMedia({ size }: { size: number }) {

  return (<div className="flex" style={{ pointerEvents: 'auto' }}>
    <BounceIn delay={0.2}>
    <a 
  className="flex bg-black bg-opacity-50 p-4 mr-1 my-1 rounded-full transition-all hover:scale-110 scale-100" 
  href="https://codepen.io/yamamotoyushi" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <Image src="/icons/codepen.svg" alt="Icon" width={size} height={size} />
</a>

<a 
  className="flex bg-black bg-opacity-50 p-4 mr-1 my-1 rounded-full transition-all hover:scale-110 scale-100" 
  href="https://github.com/YushiYamamoto" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <Image src="/icons/github.svg" alt="Icon" width={size} height={size} />
</a>

<a 
  className="flex bg-black bg-opacity-50 p-4 mr-1 my-1 rounded-full transition-all hover:scale-110 scale-100" 
  href="https://qiita.com/YushiYamamoto" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <Image src="/icons/qiita.svg" alt="Icon" width={size} height={size} />
</a>
    </BounceIn>
  </div>)
}