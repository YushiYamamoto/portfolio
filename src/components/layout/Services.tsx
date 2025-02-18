import ContactBtn from "../ui/navigation/menu/elements/ContactBtn";
import Service from "../ui/content/Service";

export default function Services() {
  return (<div id="Services" className="flex h-fit text-white flex-col items-center bg-slate-800">

    <img className="w-full h-44" src="/transitions/transition_gradient.svg" alt="transition" />
    <p className="text-4xl mb-8 mt-8  text-white font-bold">サービス</p>
    <div className="flex desktop:flex-row mobile:flex-col flex-wrap mobile:items-center pb-8 justify-center text-center h-full">
      <Service hl="シングルページアプリケーション" desc="ポートフォリオ、ランディングページ、ダッシュボードなどのレスポンシブWebアプリの開発" img="/icons/SPA_Icon.svg" />
      <Service hl="API連携" desc="ダイナミックなコンテンツ配信のためのシームレスな統合" img="/icons/API_Icon.svg" />
      <Service hl="SEO最適化" desc="Webアプリの視認性と検索順位を向上" img="/icons/SEO_Icon.svg" />
    </div>
    <p className="desktop:text-[40px] mobile:text-[24px] font-bold my-4 text-center">お気軽にご連絡ください</p>
    <ContactBtn title={"お問い合わせ"} />
  </div>);
}