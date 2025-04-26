import Image from "next/image";
import {learning, skilledIn} from "@/data/techStackData";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-start gap-10 py-10 px-65 w-full">
        {/* 프로필 이미지 */}
        <ProfileImage/>
        {/* 본문 영역 */}
        <div className="flex-1 space-y-6 text-base text-gray-300 leading-relaxed">
          {/* 소개 */}
          <AboutMe/>
          <hr className="border-gray-600"/>
          {/* 기술 섹션 */}
          <TechStackSection/>
        </div>
      </div>
      <hr className="border-gray-600 my-6"/>
    </>
  );
}

const ProfileImage = () => {
  return (
    <div className="relative w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden">
      <Image
        src="/icons/myprofile-ghibli.png"
        alt="MyProfile image"
        className="object-cover"
        fill
      />
    </div>
  )
}

const AboutMe = () => {
  return (
    <section>
      <h2 className="text-xl text-gray-400 font-semibold mb-2">About Me</h2>
      <p>
        안녕하세요! 👋<br/>
        읽기 쉬운, 유지보수하기 좋은 코드를 지향하는
        <strong className="text-white"> 개발자 최준혁</strong>입니다.<br/>
        꾸준한 학습과 개선을 통해 더 나은 개발자가 되기 위해 노력하고 있어요.
      </p>
    </section>
  );
}

const TechStackSection = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row gap-4 mr-70">
        {/* 자신 있는 기술 */}
        <TechStackContainer title={"Skilled In"} contents={skilledIn}/>
        {/* 공부 중인 기술 */}
        <TechStackContainer title={"Learning"} contents={learning}/>
      </section>
    </>
  );
}

interface TechStackContainerProps {
  title: string;
  contents: TechStackProps[];
}

const TechStackContainer = (props: TechStackContainerProps) => {
  return (
    <>
      <div className="flex-1">
        <h2 className="text-xl text-gray-400 font-semibold mb-2">{props.title}</h2>
        <ul className="space-y-1">
          {props.contents.map((content) => (
            <TechStack key={content.content} src={content.src} content={content.content}/>
          ))}
        </ul>
      </div>
    </>
  );
}

export interface TechStackProps {
  content: string;
  src: string;
}

const TechStack = (props: TechStackProps) => {
  return (
    <>
      <li className="flex items-center gap-2">
        <span className="text-sm text-gray-500">●</span>
        <Image src={props.src} alt={props.content} width={16} height={16}/>
        <span>{props.content}</span>
      </li>
    </>
  );
}