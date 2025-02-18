import SocialMedia from "../ui/navigation/links/SocialMedia";

export default function Footer() {
  return (<footer className="flex flex-col items-center bg-gradient-to-r from-gradientRight to-gradientLeft">
    <img className="w-full h-44" src="/transitions/transition_grey.svg" alt="transition" />
    <div className="flex desktop:justify-center mobile:justify-center mobile:flex-wrap w-full text-white pt-8">
      <div className="flex flex-col text-3xl desktop:w-1/3 mobile:w-full mobile:justify-center mobile:mb-8 self-center text-center ">
        <span className="text-3xl font-bold px-2">即戦力の業務委託パートナー</span>
        <span className="text-lg">課題解決とビジネス成長を全力でサポート</span>
      </div>
    </div>
    <div className="pt-5 px-2">
      <SocialMedia size={35} />
    </div>
    <hr className="flex-grow" />
    <div className="flex text-white text-center p-5">&copy; {new Date().getFullYear()} Yushi Yamamoto. All rights reserved.</div>
  </footer>);
}