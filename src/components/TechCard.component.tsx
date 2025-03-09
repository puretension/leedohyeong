import Image from "next/image";
import React from "react";

export const TechCard = ({
  imageSrc,
  imageSrcs = [], // 여러 이미지 소스를 배열로 받음
  texts = [],
  leftTexts = [],
  rightTexts = [],
  layout = "standard", // 기본값은 표준 레이아웃
  className = "",
  imageAlt = "",
  imageSize = 80,
}: {
  imageSrc?: string;
  imageSrcs?: string[]; // 여러 이미지 소스 배열 추가
  texts: string[]; // 모든 텍스트를 배열로 받음
  leftTexts?: string[]; // 왼쪽에 표시할 텍스트
  rightTexts?: string[]; // 오른쪽에 표시할 텍스트
  layout?: "standard" | "split"; // 레이아웃 타입
  className?: string;
  imageAlt?: string;
  imageSize?: number; // 이미지 크기 prop 추가
}) => {
  if (layout === "standard") {
    return (
      <div className={`bg-gray-50 rounded-2xl shadow-sm p-4 flex flex-col items-center ${className}`}>
        <div className='mb-3 flex justify-center items-center h-24'>
          {imageSrcs && imageSrcs.length > 0 ? (
            // 여러 이미지 표시
            <div className='flex space-x-2'>
              {imageSrcs.map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`${imageAlt || texts[0] || ""} ${index + 1}`}
                  width={imageSize}
                  height={imageSize}
                  className='object-contain'
                />
              ))}
            </div>
          ) : imageSrc ? (
            // 단일 이미지 표시 (기존 코드)
            <Image
              src={imageSrc}
              alt={imageAlt || texts[0] || ""}
              width={imageSize}
              height={imageSize}
              className='object-contain'
            />
          ) : (
            // 이미지 없을 때 (기존 코드)
            <div className='w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center'>
              <span className='text-2xl font-bold text-gray-500'>{(texts[0] || "").charAt(0) || "?"}</span>
            </div>
          )}
        </div>
        <div className='text-center'>
          {texts.map((text, index) => (
            <p key={index} className='font-bold text-gray-600'>
              {text}
            </p>
          ))}
        </div>
      </div>
    );
  }

  // 분할 레이아웃 (왼쪽 텍스트, 가운데 이미지, 오른쪽 텍스트)
  return (
    <div className={`bg-gray-50 rounded-2xl shadow-sm p-4 flex items-center justify-between ${className}`}>
      {/* 왼쪽 텍스트 */}
      <div className='text-right flex-1'>
        {leftTexts.map((text, index) => (
          <p key={index} className='font-bold text-gray-800'>
            {text}
          </p>
        ))}
      </div>

      {/* 가운데 이미지 */}
      <div className='mx-4 flex justify-center items-center'>
        {imageSrc ? (
          <Image src={imageSrc} alt={imageAlt || ""} width={imageSize} height={imageSize} className='object-contain' />
        ) : (
          <div className='w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center'>
            <span className='text-2xl font-bold text-gray-500'>?</span>
          </div>
        )}
      </div>

      {/* 오른쪽 텍스트 */}
      <div className='text-left flex-1'>
        {rightTexts.map((text, index) => (
          <p key={index} className='font-bold text-gray-800'>
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};
