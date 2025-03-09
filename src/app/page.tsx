import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

import { isMobile } from "@/function/utils";

import { Badge } from "@/components/Badge.component";
import { HighlightText } from "@/components/Highlight.component";
import { PDFModal } from "@/components/PDFModal.component";
import { TechCard } from "@/components/TechCard.component";

import Header from "./header/Header";

export default function Info() {
  return (
    <div className='min-h-screen bg-white'>
      <Header />
      <main className='container mx-auto py-8 pt-24'>
        <div className='flex flex-col md:flex-row gap-2 mb-2'>
          {/* 왼쪽 프로필 영역 */}
          <div className='md:w-1/4 flex flex-col items-center md:items-start'>
            <div className='rounded-xl overflow-hidden mb-6'>
              <Image src='/images/profile.jpg' alt='Dohyeong Lee' width={220} height={220} className='object-cover' />
            </div>
            <div className='flex space-x-4 mb-8'>
              <Link href='https://www.linkedin.com/in/leedohyeong/' target='_blank'>
                <div className='w-12 h-12 bg-gray-300 rounded-2xl flex items-center justify-center hover:bg-gray-200 transition-colors'>
                  <div className='w-6 h-6 text-gray-900'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='w-full h-full'>
                      <path
                        fill='currentColor'
                        d='M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z'
                      />
                    </svg>
                  </div>
                </div>
              </Link>
              <Link href='https://github.com/puretension' target='_blank'>
                <div className='w-12 h-12 bg-gray-300 rounded-2xl flex items-center justify-center hover:bg-gray-200 transition-colors'>
                  <div className='w-6 h-6 text-gray-900'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='w-full h-full'>
                      <path
                        fill='currentColor'
                        d='M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2'
                      />
                    </svg>
                  </div>
                </div>
              </Link>
              {/* TODO: 인스타 추가 시 주석 해제 */}
              {/* <Link href='https://instagram.com' target='_blank'>
                <div className='w-12 h-12 bg-gray-300 rounded-2xl flex items-center justify-center hover:bg-gray-200 transition-colors'>
                  <div className='w-6 h-6 text-gray-900'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='w-full h-full'>
                      <path
                        fill='currentColor'
                        d='M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3'
                      />
                    </svg>
                  </div>
                </div>
              </Link> */}
              <PDFModal pdfUrl='/resume-dohyeong.pdf' buttonText='Resume' />
            </div>
          </div>

          {/* 오른쪽 콘텐츠 영역 */}
          <div className='md:w-3/4'>
            <div className='flex items-center gap-2'>
              <span className='text-4xl font-Tossface'>🇰🇷</span>
              <h1 className='text-3xl font-bold'>Dohyeong Lee</h1>
            </div>

            {/* 영어 문단 모음 */}
            <div className='text-gray-700 mt-5 mb-4 leading-relaxed text-lg'>
              <p className='mb-2'>
                After military period, I switched from <HighlightText>economics</HighlightText> to{" "}
                <HighlightText>computer science</HighlightText>, maintaining{" "}
                <HighlightText>a high GPA (4.21/4.5)</HighlightText> with a <b>growth mindset</b>
              </p>

              <p className='mb-2'>
                I prioritize creating <b>real business impact</b> across various fields through development <br />
                As a <HighlightText>full-stack developer at a Pre-Series A startup</HighlightText> and{" "}
                <HighlightText>leader of the Google-sponsored GDGoC community</HighlightText>, <br />I strive to build
                both technical and communication skills
              </p>

              <p>
                Through building applications across domains, I developed a deep interest in <b>infrastructure</b> and
                now focus on <span className='font-semibold italic'>scalable, reliable infrastructure</span>
              </p>
            </div>

            {/* 한글 문단 모음 */}
            {/* <div className='text-gray-600 mb-8 leading-relaxed text-base'>
              <p className='mb-2'>
                저는 군 전역후 <HighlightText>경제학과</HighlightText>에서{" "}
                <HighlightText>컴퓨터 공학전공</HighlightText>으로 전과하여, <b>꾸준히 성장하는 마음</b>으로 Top
                GPA(4.21/4.5)를 유지하였습니다.
              </p>

              <p className='mb-2'>
                개발을 통해 다양한 분야에서 <b>실질적인 Busniess Impact</b>를 창출하는 것을 최우선으로 생각합니다.{" "}
                <HighlightText>Pre-Series A 스타트업의 풀스택 개발자</HighlightText>이자{" "}
                <HighlightText>Google 주관 GDGoC 커뮤니티의 리더</HighlightText>로서, 기술적 역량과 커뮤니케이션 스킬을
                모두 갖추고자 노력합니다.
              </p>

              <p>
                다양한 도메인에서 애플리케이션을 구축하면서 <b>Infrastructure</b>에 깊은 관심을 갖게 되었고, 현재는{" "}
                <span className='font-semibold italic'>확장 가능하고 안정적인 Infrastructure</span>에 집중하고 있습니다.
              </p>
            </div> */}
          </div>
        </div>

        {/* Skills 섹션 - 전체 너비 차지 */}
        <div className='mb-12'>
          {/* <h2 className='text-3xl font-bold mb-4 tracking-tight'>About Me</h2> */}
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
            {/* company-r2c-company */}
            <TechCard
              imageSrc='/images/r2c-company-logo.png'
              texts={["Pre-Series A Startup", "Managed 100,000+ MAU", "Selected by TIPS Program"]}
            />
            <TechCard
              imageSrc='/images/company-growth-helper.png'
              texts={["Founded Startup", "Secured $30,000 Revenue", "Full-Stack Development"]}
              imageSize={200}
            />

            <TechCard
              imageSrc='/images/poppin-logo.png'
              texts={["Released on Appstore", "Managed 5000+ users", "FrontEnd Lead Developer"]}
            />
            <TechCard
              imageSrc='/images/skill-react.png'
              texts={["React.JS, ReactNative", "JavaScript, Typescript", "Web/Mobile Development"]}
            />
            {/* <TechCard imageSrc='/images/skill-appsflyer.png' texts={["AppsFlyer", "Marketing Automation"]} /> */}
            <TechCard
              imageSrc='/images/skill-aws.png'
              texts={["Solution Architect Associate", "S3, Lambda, DynamoDB", "API Gateway, EC2, ECS"]}
            />
            <TechCard
              imageSrc='/images/skill-nestjs.png'
              texts={["NestJS", "Microservice Architecture", "Domain Driven Design"]}
            />
            <TechCard
              imageSrc='/images/skill-multi-language.png'
              texts={["Native Korean", "English(TOEIC 990/990)", "Japanese(JLPT N1 Certified)"]}
            />
            <TechCard
              imageSrcs={["/images/skill-mongodb.png", "/images/skill-postgresql.png", "/images/skill-rds.png"]}
              imageSize={40}
              texts={["NoSQL Database", "SQL Database", "Cloud Database"]}
            />
            <TechCard
              imageSrc='/images/skill-google.png'
              imageSize={60}
              texts={["GDGoC DGU Organizer", "Hosted 30+ Events", "Managed 30+ Members"]}
            />
            <TechCard
              imageSrcs={["/images/skill-git.png", "/images/skill-docker.png", "/images/skill-nginx.png"]}
              imageSize={40}
              texts={["Git Workflow", "Docker Containerization", "Nginx Reverse Proxy"]}
            />
            <TechCard
              imageSrcs={["/images/skill-flutter.png", "/images/skill-nextjs.png"]}
              texts={["Hybrid Web/App", "Recognized Improving SEO", "Prototyping"]}
              imageSize={40}
            />
            {/* <TechCard imageSrc='/images/skill-flutter.png' texts={["Hybrid Mobile Development", "Dart Flutter"]} /> */}
            <TechCard
              imageSrcs={["/images/skill-datadog.png", "/images/skill-appsflyer.png"]}
              texts={["Log Monitoring", "Analytics SaaS Platform", "Data Driven Decision-Making"]}
              imageSize={50}
            />
            {/* <TechCard imageSrc='/images/skill-linux.png' texts={["Linux", "Ubuntu", "MacOS"]} /> */}
          </div>
        </div>

        {/* Projects 섹션 - 전체 너비 차지 */}
        {/* <div className='mb-12'>
          <h2 className='text-3xl font-bold mb-6 tracking-tight'>Projects</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='border border-gray-200 rounded-lg overflow-hidden'>
              <Image
                src='/images/sample.png'
                alt='Project Sample'
                width={600}
                height={600}
                className='w-full object-cover'
              />
              <div className='p-4'>
                <h3 className='text-xl font-bold mb-2'>Project Title</h3>
                <p className='text-gray-700 mb-4'>
                  A brief description of the project and what technologies were used.
                </p>
                <div className='flex flex-wrap gap-2'>
                  <span className='bg-gray-200 px-2 py-1 rounded text-sm'>React</span>
                  <span className='bg-gray-200 px-2 py-1 rounded text-sm'>Node.js</span>
                  <span className='bg-gray-200 px-2 py-1 rounded text-sm'>MongoDB</span>
                </div>
              </div>
            </div>

            <div className='border border-gray-200 rounded-lg overflow-hidden'>
              <Image
                src='/images/sample.png'
                alt='Project Sample'
                width={800}
                height={400}
                className='w-full object-cover'
              />
              <div className='p-4'>
                <h3 className='text-xl font-bold mb-2'>Project Title</h3>
                <p className='text-gray-700 mb-4'>
                  A brief description of the project and what technologies were used.
                </p>
                <div className='flex flex-wrap gap-2'>
                  <span className='bg-gray-200 px-2 py-1 rounded text-sm'>React</span>
                  <span className='bg-gray-200 px-2 py-1 rounded text-sm'>Node.js</span>
                  <span className='bg-gray-200 px-2 py-1 rounded text-sm'>MongoDB</span>
                </div>
              </div>
            </div>

            <div className='border border-gray-200 rounded-lg overflow-hidden'>
              <Image
                src='/images/sample.png'
                alt='Project Sample'
                width={800}
                height={400}
                className='w-full object-cover'
              />
              <div className='p-4'>
                <h3 className='text-xl font-bold mb-2'>Project Title</h3>
                <p className='text-gray-700 mb-4'>
                  A brief description of the project and what technologies were used.
                </p>
                <div className='flex flex-wrap gap-2'>
                  <span className='bg-gray-200 px-2 py-1 rounded text-sm'>React</span>
                  <span className='bg-gray-200 px-2 py-1 rounded text-sm'>Node.js</span>
                  <span className='bg-gray-200 px-2 py-1 rounded text-sm'>MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </main>
    </div>
  );
}
