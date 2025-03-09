"use client";

import React from "react";

import { prefix } from "@/constants/prefix";

import { PDFViewer } from "@/components/PDFView.component";

import Header from "../header/Header";

export default function ResumePage() {
  return (
    <div className='min-h-screen bg-white'>
      <Header />
      <main className='container mx-auto px-4 py-8 pt-24'>
        <PDFViewer pdfUrl={`${prefix}/resume-dohyeong.pdf`} title='이도형 이력서' />
      </main>
    </div>
  );
}
