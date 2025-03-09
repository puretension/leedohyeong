/** Intermission */
import { Product } from "@/types/products";

/** intermission */
import Intermission1 from "@public/images/portfolio/intermission/intermission_1.png";
import Intermission2 from "@public/images/portfolio/intermission/intermission_2.png";
import IntermissionThumbnail from "@public/images/portfolio/intermission/intermission_thumbnail.png";

/** pickply */
import Pickply1 from "@public/images/portfolio/pickply/pickply_1.png";
import Pickply2 from "@public/images/portfolio/pickply/pickply_2.png";
import Pickply3 from "@public/images/portfolio/pickply/pickply_3.png";
import Pickply4 from "@public/images/portfolio/pickply/pickply_4.png";
import Pickply5 from "@public/images/portfolio/pickply/pickply_5.png";
import PickplyThumbnail from "@public/images/portfolio/pickply/pickply_thumbnail.png";

/** poppin */
import Poppin1 from "@public/images/portfolio/poppin/poppin_1.png";
import Poppin2 from "@public/images/portfolio/poppin/poppin_2.png";
import Poppin3 from "@public/images/portfolio/poppin/poppin_3.png";
import Poppin4 from "@public/images/portfolio/poppin/poppin_4.png";
import Poppin5 from "@public/images/portfolio/poppin/poppin_5.png";
import Poppin6 from "@public/images/portfolio/poppin/poppin_6.png";
import PoppinThumbnail from "@public/images/portfolio/poppin/poppin_thumbnail.png";

import { HighlightText } from "@/components/Highlight.component";

export const products: Product[] = [
  // Pickply - R2C Company
  {
    href: "https://pickply.com/guide/customer",
    title: "Pickply - R2C Company",
    created_at: "2025-03-29 00:00:00",
    modified_at: "2025-03-29 00:00:00",
    description: `누구나 설문을 올리고, 참여자는 정당한 보상을 받는 플랫폼`,
    thumbnail: PickplyThumbnail,
    images: [PickplyThumbnail, Pickply1, Pickply2, Pickply3, Pickply4, Pickply5],
    stack: [
      "reactNative",
      "react.js",
      "nestjs",
      "nextjs",
      "nextjs",
      "aws",
      "appsflyer",
      "docker",
      "mongodb",
      "typescript",
      "javascript",
      "thirdparty library",
      "zustand",
      "styled-components",
      "Google Analytics",
      "GTM",
      "firebase",
      "sentry",
    ],
    organizationName: "R2C Company",
    organizationType: "Company",
    slug: "pickply",
    experiencePeriod: "2024.07 ~ Present",
    contentKo: (
      <div className='text-gray-600 mb-8 leading-relaxed text-base'>
        <ul className='space-y-4 list-disc'>
          <li>
            <p>
              <HighlightText>MAU</HighlightText>를 <b>700% 증가</b>(10K → 80K)시키고 앱 다운로드를 <b>50% 향상</b>
              시켰습니다.
              <HighlightText>OneLink</HighlightText> 공유 시스템 개발을 주도하여 추천 기반 사용자 획득 및 참여를
              최적화했습니다.
            </p>
          </li>
          <li>
            <p>
              <HighlightText>Firebase Dynamic Links</HighlightText>를 <HighlightText>Appsflyer OneLink</HighlightText>로
              대체하여 <b>6개월간 지속되던 기술 부채</b>를 해결하고 데이터 기반 의사 결정을 위한 향상된 사용자 추적
              분석을 가능하게 했습니다. 이를 통해 선물하기 기능을 만들어 웹/앱/채팅방 등 어떤 퍼널에 상관없이 프로젝트
              참여 접근을 <b>1depth</b>로 가능하게 기여했습니다.
            </p>
          </li>
          <li>
            <p>
              이전에 버려지던 사용자 데이터를 수집하여 사용자 프로파일링을 강화하고, 고유 키 자동 입력으로{" "}
              <HighlightText>WebView</HighlightText> 임베딩을 자동화하며,
              <HighlightText>Tally 웹훅</HighlightText>을 통해 <HighlightText>MongoDB</HighlightText> 업데이트를
              트리거했습니다. <b>53,000명</b>의 사용자를 위한 설문조사 추천을 최적화하여 데이터 활용을 극대화했습니다.
            </p>
          </li>
          <li>
            <p>
              <HighlightText>API Gateway + VPC</HighlightText> 구현으로 비공개 API를 보호하고,{" "}
              <HighlightText>WAF</HighlightText>로 <HighlightText>S3</HighlightText> 보호를 강화하며,
              <HighlightText>MongoDB IP 화이트리스팅</HighlightText>을 적용하여 무단 접근을 방지했습니다.
            </p>
          </li>
          <li>
            <p>
              <HighlightText>GitHub Actions</HighlightText>와 <HighlightText>Fastlane</HighlightText>을 구성하여 앱 배포
              워크플로우를 간소화했습니다. iOS/Android 릴리스를 자동화하여 배포당 <b>30분</b>을 절약하고 프로덕션
              릴리스의 인적 오류를 최소화했습니다.
            </p>
          </li>
          <li>
            <p>
              크론 작업을 <HighlightText>EC2</HighlightText>에서 <HighlightText>AWS Lambda</HighlightText>로
              마이그레이션하여 비용을 절감하고, <b>서버리스 아키텍처</b>를 활용하여 필요할 때만 작업을 트리거함으로써
              유휴 서버 비용을 제거했습니다.
            </p>
          </li>
        </ul>
      </div>
    ),
    contentEn: (
      <div className='text-gray-700 mt-5 mb-4 leading-relaxed text-lg'>
        <ul className='space-y-4 list-disc'>
          <li>
            <p>
              Achieved a <b>700% increase</b> in Monthly Active Users (MAU) (10K → 80K) and boosted app downloads by{" "}
              <b>50%</b> by leading the development of the <HighlightText>OneLink</HighlightText> sharing system,
              optimizing referral-based user acquisition and engagement.
            </p>
          </li>
          <li>
            <p>
              Replaced <HighlightText>Firebase Dynamic Links</HighlightText> with{" "}
              <HighlightText>Appsflyer OneLink</HighlightText>, resolving a <b>6-month-long technical debt</b> and
              enabling enhanced user tracking analytics for data-driven decision-making. Developed a seamless
              gift-sharing feature that <b>reduced user journey depth to 1</b>, streamlining project participation
              across web, app, and chat platforms.
            </p>
          </li>
          <li>
            <p>
              Collected previously discarded user data to enhance profiling, automated{" "}
              <HighlightText>WebView</HighlightText> embedding using unique key auto-input, and triggered{" "}
              <HighlightText>MongoDB</HighlightText> updates through
              <HighlightText>Tally Webhooks</HighlightText>. Optimized survey recommendations for over 53,000 users,
              maximizing data utilization.
            </p>
          </li>
          <li>
            <p>
              Strengthened API security by implementing <HighlightText>API Gateway + VPC</HighlightText> for private API
              protection, enhanced <HighlightText>S3</HighlightText> security using <HighlightText>WAF</HighlightText>,
              and prevented unauthorized access through <HighlightText>MongoDB IP whitelisting</HighlightText>.
            </p>
          </li>
          <li>
            <p>
              Streamlined app deployment workflows by setting up <HighlightText>GitHub Actions</HighlightText> and
              <HighlightText>Fastlane</HighlightText>. Automated iOS/Android releases, saving{" "}
              <b>30 minutes per deployment</b> and minimizing human errors in production releases.
            </p>
          </li>
          <li>
            <p>
              Migrated cron jobs from <HighlightText>EC2</HighlightText> to <HighlightText>AWS Lambda</HighlightText>,
              reducing costs by adopting a <b>serverless architecture</b>, eliminating idle server expenses by
              triggering tasks only when necessary.
            </p>
          </li>
        </ul>
      </div>
    ),
  },
  // Intermission - GrowthHelper
  {
    href: "https://growthhelper.kr",
    title: "Intermission - GrowthHelper",
    created_at: "2024-08-25 00:00:00",
    modified_at: "2024-08-25 00:00:00",
    description: "합리적인 가격 & 전문적인 인터뷰/설문조사 대행 서비스",
    experiencePeriod: "2023.08 ~ 2024.07",
    thumbnail: IntermissionThumbnail,
    images: [Intermission1, Intermission2],
    stack: ["Flutter", "Spring Boot", "Firebase", "Dart", "Java", "React.js", "Github CI/CD", "AWS"],
    organizationName: "GrowthHelper",
    organizationType: "Company",
    slug: "intermission",
    singleRow: true,
    contentKo: (
      <div className='text-gray-600 mb-8 leading-relaxed text-base'>
        <ul className='space-y-4 list-disc'>
          <li>
            <p>
              <HighlightText>Flutter</HighlightText>로 구축된 B2B/B2C 설문조사 플랫폼 인터미션 앱을 설립하고 출시하여
              인터뷰 대상자와 클라이언트를 연결했습니다.
            </p>
          </li>
          <li>
            <p>
              총 <b>$30,000</b>의 매출을 확보하고, 퍼포먼스 마케팅을 통해 <b>1,000명 이상</b>의 활성 사용자 규모로
              확장했습니다.
            </p>
          </li>
          <li>
            <p>
              <HighlightText>GitHub Actions</HighlightText>로 앱 릴리스를 자동화하고 <HighlightText>AWS</HighlightText>
              (EC2, S3), <HighlightText>MySQL</HighlightText>, <HighlightText>Firebase</HighlightText>,{" "}
              <HighlightText>Redis</HighlightText>, <HighlightText>Docker</HighlightText>를 활용하여 확장성과 원활한
              성능을 위한 인프라와 배포를 최적화했습니다.
            </p>
          </li>
          <li>
            <p>우수 창업 동아리로 선정되어 동국대학교 총장상(최우수상) 을 수상했습니다.</p>
          </li>
        </ul>
      </div>
    ),
    contentEn: (
      <div className='text-gray-700 mt-5 mb-4 leading-relaxed text-lg'>
        <ul className='space-y-4 list-disc'>
          <li>
            <p>
              Founded and launched App Intermission, a B2B/B2C survey platform matching interviewee with clients, built
              with <HighlightText>Flutter</HighlightText>
            </p>
          </li>
          <li>
            <p>
              Secured <b>$30,000</b> in total revenue, scaling active users from <b>1000+</b> actively using performance
              marketing
            </p>
          </li>
          <li>
            <p>
              Optimized infrastructure and deployment by automating app releases with{" "}
              <HighlightText>GitHub Actions</HighlightText> and leveraging <HighlightText>AWS</HighlightText> (EC2, S3),{" "}
              <HighlightText>MySQL</HighlightText>, <HighlightText>Firebase</HighlightText>,{" "}
              <HighlightText>Redis</HighlightText>, and <HighlightText>Docker</HighlightText> for scalability and
              seamless performance
            </p>
          </li>
          <li>
            <p>
              Awarded Recognized with Dongguk University President's Excellence Award for Outstanding Entrepreneurship
              Club
            </p>
          </li>
        </ul>
      </div>
    ),
  },
  // Poppin - Bubble
  {
    href: "https://apps.apple.com/kr/app/팝핀-맞춤형-팝업-스토어-추천/id6482994685",
    title: "Poppin - Customized Popup Store Recommendation",
    created_at: "2025-03-09 00:00:00",
    modified_at: "2025-03-09 00:00:00",
    description: "팝핀: 소비자 맞춤형 큐레이팅 팝업스토어 추천 어플리케이션",
    experiencePeriod: "2024.02 ~ 2025.02",
    thumbnail: PoppinThumbnail,
    images: [Poppin1, Poppin2, Poppin3, Poppin4, Poppin5, Poppin6],
    stack: [
      "ReactNative",
      "React.js",
      "Typescript",
      "AWS",
      "Github CI/CD",
      "Session-Based Tracking System",
      "Google Analytics",
      "Appsflyer",
      "Firebase",
      "zustand",
      "styled-components",
      "sentry",
    ],
    organizationName: "Bubble",
    organizationType: "Project",
    slug: "poppin",
    contentKo: (
      <div className='text-gray-600 mb-8 leading-relaxed text-base'>
        <ul className='space-y-4 list-disc'>
          <li>
            <p>
              <HighlightText>ReactNative</HighlightText> 애플리케이션 개발팀을 이끌고 유기적 사용자 획득을 통해 활성
              사용자를 <b>5,000명 이상</b>으로 확장했습니다.
            </p>
          </li>
          <li>
            <p>
              <b>80개 이상의 API</b>와 <b>30개 이상의 화면</b>을 <HighlightText>React Native</HighlightText>로 홀로
              개발했으며, 2024년 7월 성공적으로 릴리즈했습니다. 초기에는 <HighlightText>커스텀 훅</HighlightText>과{" "}
              <HighlightText>Redux</HighlightText>를 사용했으나, 사용자 경험 개선을 위해{" "}
              <HighlightText>Zustand</HighlightText>와 <HighlightText>useContext</HighlightText>로 마이그레이션하여
              불필요한 리렌더링을 최소화하고 메모리 사용량을 <b>30% 감소</b>시켜 앱 성능을 크게 향상시켰습니다.
            </p>
          </li>
          <li>
            <p>
              개발, 스테이징, 프로덕션 환경을 분리하는 멀티 환경 배포 파이프라인을 구축했습니다. 클라우드 프라이빗
              네트워크와 <HighlightText>Github Actions</HighlightText> 및 <HighlightText>Bastion Host</HighlightText>를
              통한 CI/CD 자동화로 배포 효율성을 향상시키고 프로덕션 장애를 최소화했습니다.
            </p>
          </li>
          <li>
            <p>
              <HighlightText>sessionCode</HighlightText>와 <HighlightText>appState</HighlightText>를 활용한 세션 기반
              추적 시스템을 구축하여 활성 세션 동안 사용자 상호작용을 캡처하고 유지했습니다. 분석 데이터를 저장하고{" "}
              <HighlightText>GA 태깅</HighlightText>을 통합하여 사용자 행동에 대한 인사이트를 향상시켰습니다.
            </p>
          </li>
        </ul>
      </div>
    ),
    contentEn: (
      <div className='text-gray-700 mt-5 mb-4 leading-relaxed text-lg'>
        <ul className='space-y-4 list-disc'>
          <li>
            <p>
              Single-handedly developed <b>over 80 APIs</b> and <b>more than 30 screens</b> using{" "}
              <HighlightText>React Native</HighlightText>, successfully releasing in July 2024. Initially implemented
              with <HighlightText>custom hooks</HighlightText> and <HighlightText>Redux</HighlightText>, later
              refactored to <HighlightText>Zustand</HighlightText> and <HighlightText>useContext</HighlightText> to
              enhance user experience by minimizing re-renders and reducing memory usage by <b>30%</b>, significantly
              improving app performance
            </p>
          </li>
          <li>
            <p>
              Built a multi-environment deployment pipeline segmenting Dev, Staging, and Prod with cloud private
              networks, and automating CI/CD via <HighlightText>Github Actions</HighlightText> and{" "}
              <HighlightText>Bastion Host</HighlightText>, improving deployment efficiency and minimizing production
              failures
            </p>
          </li>
          <li>
            <p>
              Built a session-based tracking system, leveraging <HighlightText>sessionCode</HighlightText> and{" "}
              <HighlightText>appState</HighlightText> to capture and persist user interaction during active sessions,
              storing analytics and integrating <HighlightText>GA tagging</HighlightText>, resulting in enhanced user
              behavior insights
            </p>
          </li>
        </ul>
      </div>
    ),
  },
];
