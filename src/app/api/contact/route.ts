/**
 * Contact API Route - 문의 폼 제출 처리
 *
 * @description POST 요청으로 문의 데이터를 받아 Resend로 이메일 발송
 */

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  inquiryType: string;
  propertyName?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // 필수 필드 검증
    if (!data.name || !data.email || !data.inquiryType || !data.message) {
      return NextResponse.json(
        { success: false, error: "필수 항목을 모두 입력해주세요." },
        { status: 400 }
      );
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { success: false, error: "올바른 이메일 형식이 아닙니다." },
        { status: 400 }
      );
    }

    // Resend로 이메일 발송
    const { error } = await resend.emails.send({
      from: "문의접수 <onboarding@resend.dev>",
      to: ["contact@juinjang.co.kr"],
      subject: `[문의] ${data.inquiryType} - ${data.name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8a0000; border-bottom: 2px solid #8a0000; padding-bottom: 10px;">
            새로운 문의가 접수되었습니다
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">이름</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">이메일</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">
                <a href="mailto:${data.email}">${data.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">연락처</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.phone || "미입력"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">문의 유형</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.inquiryType}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">시설명/회사명</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.propertyName || "미입력"}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-radius: 8px;">
            <p style="font-weight: bold; margin-bottom: 10px;">문의 내용:</p>
            <p style="white-space: pre-wrap; line-height: 1.6;">${data.message}</p>
          </div>
          <p style="margin-top: 30px; font-size: 12px; color: #999;">
            이 이메일은 juinjang.co.kr 문의 폼을 통해 자동 발송되었습니다.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, error: "이메일 발송에 실패했습니다." },
        { status: 500 }
      );
    }

    // 로그 기록
    console.log("=== 새로운 문의 접수 ===");
    console.log("이름:", data.name);
    console.log("이메일:", data.email);
    console.log("문의 유형:", data.inquiryType);
    console.log("========================");

    return NextResponse.json({
      success: true,
      message: "문의가 정상적으로 접수되었습니다.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요." },
      { status: 500 }
    );
  }
}
