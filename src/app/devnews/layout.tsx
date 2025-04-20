import React, {ReactNode} from "react";
import Link from "next/link";

const Layout = async (
  {
    children,
  }: Readonly<{
    children: ReactNode;
  }>) => {

  return (
    <div className="flex flex-1 items-stretch">
      <PostNavBar/>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}

const PostNavBar = () => {
  return (
    <div className="w-[400px] border-r border-gray-500/30 px-4 py-6 [&>*]:px-2 [&>div]:py-4">
      <DropdownNavBar/>
      <ol
        className="list-decimal list-outside space-y-4 py-4 marker:text-lg marker:font-bold [&>li]:text-gray-400 mx-5 [&>li]:text-gray-400">
        <li><Link className={"hover:text-mypurple-100"} href={"/devnews/3"}>2025년 개발 트렌드</Link></li>
        <li className={"hover:text-mypurple-100"}>웹 개발을 변화시키는 AI: 코딩 보조 도구의 미래</li>
        <li className={"hover:text-mypurple-100"}>ES2024 초안 공개: JavaScript의 다음 단계는?</li>
        <li className={"hover:text-mypurple-100"}>Next.js 16 발표: 서버 렌더링과 CSR의 경계 허물기</li>
      </ol>
    </div>
  );
};
export default Layout;

const DropdownNavBar = () => {
  return (
    <>
      <select className={"text-white [&>option]:bg-myblack w-full border-gray-500/30 border-2 rounded-lg py-2"}>
        <option>2025년 4월</option>
        <option>2025년 3월</option>
        <option>2025년 2월</option>
        <option>2025년 1월</option>
      </select>
    </>
  );
}