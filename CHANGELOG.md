# Changelog

이 프로젝트의 모든 주요 변경사항을 기록합니다.
형식은 [Keep a Changelog](https://keepachangelog.com/ko/1.0.0/)를 따릅니다.

---

## [Unreleased]

---

## [0.2.0] - 2026-01-26

### Added
- 디자인 시스템 문서화 (CLAUDE.md 섹션 17)
  - 색상, 타이포그래피, 간격, Border Radius 정의
  - 컴포넌트 스타일 가이드
  - 반응형 브레이크포인트 문서화
- 글로벌 CSS 업데이트 (Tailwind v4 @theme 적용)
  - 커스텀 색상 토큰
  - 커스텀 폰트 패밀리
  - 애니메이션 키프레임
- Layout 컴포넌트
  - `src/components/layout/Header.tsx`: 반응형 헤더, 모바일 메뉴
  - `src/components/layout/Footer.tsx`: 4컬럼 푸터, 회사 정보
- Home 페이지 컴포넌트
  - `src/components/home/HeroSection.tsx`: 히어로 섹션 (framer-motion)
  - `src/components/home/StatsSection.tsx`: 통계 섹션
  - `src/components/home/PortfolioCarousel.tsx`: 포트폴리오 캐러셀
  - `src/components/home/CTASection.tsx`: CTA 섹션
- Portfolio 페이지
  - `src/app/portfolio/page.tsx`: 4컬럼 그리드 포트폴리오
  - `src/components/portfolio/PortfolioCard.tsx`: 포트폴리오 카드
- Partnership 페이지
  - `src/app/partnership/page.tsx`: 파트너십 안내 (위탁운영/개발투자/가맹)
- Contact 페이지
  - `src/app/contact/page.tsx`: 문의 양식 및 회사 연락처

### Changed
- `src/app/layout.tsx`: Manrope, Playfair Display 폰트 적용
- `src/app/page.tsx`: 홈 페이지 컴포넌트 조합으로 변경
- `src/app/globals.css`: Tailwind v4 디자인 토큰 적용

---

## [0.1.0] - 2026-01-26

### Added
- Next.js 15 + Tailwind CSS v4 프로젝트 초기화
- Git 저장소 설정
- framer-motion 패키지 추가
- 기본 레이아웃 및 홈 페이지 구조
  - `src/app/layout.tsx`: 루트 레이아웃 (한국어 설정, 메타데이터)
  - `src/app/page.tsx`: 홈 페이지 (임시)
  - `src/app/globals.css`: 글로벌 스타일 (브랜드 컬러 변수)
- PRD 문서 작성 (CLAUDE.md)
- 개발 규칙 및 문서화 가이드라인 설정
- 이미지 자산 복사 (가평, 청평 등 6개 지점)

### Changed
- package.json 프로젝트명 `juinjang-web`으로 변경

---

## 버전 관리 규칙

- **Major (x.0.0)**: 대규모 기능 변경, 하위 호환성 깨짐
- **Minor (0.x.0)**: 새 기능 추가, 하위 호환성 유지
- **Patch (0.0.x)**: 버그 수정, 작은 개선
