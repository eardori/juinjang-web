/**
 * Contact API Route - 문의 폼 제출 처리
 *
 * @description POST 요청으로 문의 데이터를 받아 Resend로 이메일 발송
 */

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// 문의 유형 라벨 매핑
const inquiryTypeLabels: Record<string, string> = {
  facility: "시설임대문의",
  investment: "투자문의",
  partnership: "제휴문의",
  other: "기타문의",
};

interface ContactFormData {
  name: string;
  phone: string;
  facilityName?: string;
  inquiryTypes: string[];
  message?: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // 필수 필드 검증
    if (!data.name || !data.phone || !data.inquiryTypes || data.inquiryTypes.length === 0) {
      return NextResponse.json(
        { success: false, error: "필수 항목을 모두 입력해주세요." },
        { status: 400 }
      );
    }

    // 전화번호 형식 간단 검증 (숫자, 하이픈만 허용)
    const phoneRegex = /^[\d\-]+$/;
    if (!phoneRegex.test(data.phone.replace(/\s/g, ""))) {
      return NextResponse.json(
        { success: false, error: "올바른 전화번호 형식이 아닙니다." },
        { status: 400 }
      );
    }

    // 문의 유형 라벨로 변환
    const inquiryTypeLabelsText = data.inquiryTypes
      .map((type) => inquiryTypeLabels[type] || type)
      .join(", ");

    // Resend로 이메일 발송
    const { error } = await resend.emails.send({
      from: "주인장 문의접수 <onboarding@resend.dev>",
      to: ["eardori@gmail.com"], // TODO: 실제 운영 시 contact@juinjang.co.kr로 변경
      subject: `[주인장 문의] ${inquiryTypeLabelsText} - ${data.name}`,
      html: `
        <div style="font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #8B0000 0%, #6B0000 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: #C5A47E; margin: 0; font-size: 24px; letter-spacing: 2px;">주인장</h1>
            <p style="color: #fff; margin: 10px 0 0; opacity: 0.9; font-size: 14px;">새로운 문의가 접수되었습니다</p>
          </div>

          <div style="background: #fff; padding: 30px; border: 1px solid #eee; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 15px 10px; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #333; width: 120px; vertical-align: top;">
                  <span style="color: #8B0000;">●</span> 이름
                </td>
                <td style="padding: 15px 10px; border-bottom: 1px solid #f0f0f0; color: #555;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 15px 10px; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #333; vertical-align: top;">
                  <span style="color: #8B0000;">●</span> 연락처
                </td>
                <td style="padding: 15px 10px; border-bottom: 1px solid #f0f0f0; color: #555;">
                  <a href="tel:${data.phone}" style="color: #8B0000; text-decoration: none;">${data.phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 15px 10px; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #333; vertical-align: top;">
                  <span style="color: #8B0000;">●</span> 숙소/시설명
                </td>
                <td style="padding: 15px 10px; border-bottom: 1px solid #f0f0f0; color: #555;">${data.facilityName || "미입력"}</td>
              </tr>
              <tr>
                <td style="padding: 15px 10px; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #333; vertical-align: top;">
                  <span style="color: #8B0000;">●</span> 문의 유형
                </td>
                <td style="padding: 15px 10px; border-bottom: 1px solid #f0f0f0;">
                  ${data.inquiryTypes
                    .map(
                      (type) =>
                        `<span style="display: inline-block; background: #fcfaf8; border: 1px solid #C5A47E; color: #8B0000; padding: 4px 12px; border-radius: 4px; margin: 2px 4px 2px 0; font-size: 13px;">${inquiryTypeLabels[type] || type}</span>`
                    )
                    .join("")}
                </td>
              </tr>
            </table>

            ${
              data.message
                ? `
            <div style="margin-top: 25px; padding: 20px; background: #fcfaf8; border-radius: 8px; border-left: 4px solid #C5A47E;">
              <p style="font-weight: bold; margin: 0 0 12px; color: #333; font-size: 14px;">💬 문의 내용</p>
              <p style="white-space: pre-wrap; line-height: 1.8; color: #555; margin: 0; font-size: 14px;">${data.message}</p>
            </div>
            `
                : ""
            }
          </div>

          <div style="background: #f9f9f9; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; border: 1px solid #eee; border-top: none;">
            <p style="margin: 0; font-size: 12px; color: #999;">
              이 이메일은 <a href="https://juinjang.co.kr" style="color: #8B0000;">juinjang.co.kr</a> 문의 폼을 통해 자동 발송되었습니다.
            </p>
            <p style="margin: 8px 0 0; font-size: 11px; color: #bbb;">
              (주)인장매니지먼트 | 031-791-2597
            </p>
          </div>
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
    console.log("연락처:", data.phone);
    console.log("숙소명:", data.facilityName || "미입력");
    console.log("문의 유형:", inquiryTypeLabelsText);
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
