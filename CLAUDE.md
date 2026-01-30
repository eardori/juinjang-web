# 주식회사 인장 기업 홈페이지 리뉴얼 PRD

> 문서 ID: JUINJANG-PRD-001
> 상태: 개발중
> 작성일: 2026-01-26
> 최종수정: 2026-01-30
> 프로젝트: juinjang-web (신규)

---

## 1. 프로젝트 개요

### 1.1 배경
현재 주식회사 인장 홈페이지(juinjang.co.kr)는 Wix 기반으로 운영 중이며, 운영 중인 숙소 포트폴리오를 효과적으로 보여주지 못하고 있습니다. 세련된 기업 홈페이지로 리뉴얼하여 브랜드 가치를 높이고 파트너십 문의를 유도합니다.

### 1.2 목표
- 운영 중인 8개 글램독 숙소의 포트폴리오를 사진과 함께 효과적으로 전시
- 회사의 전문성과 신뢰성을 전달하는 세련된 디자인
- 파트너십 문의 전환율 향상
- glamdog_web 프로젝트의 300+ 이미지 자산 활용

### 1.3 타겟 사용자
- 시설 임대/투자 검토 중인 투자자
- 위탁운영 또는 제휴를 원하는 숙박업 관계자
- 회사 정보를 확인하려는 일반 방문자

---

## 2. 회사 정보 (수집 완료)

### 2.1 기본 정보
| 항목 | 내용 |
|------|------|
| 법인명 | (주)인장매니지먼트 |
| 브랜드명 | 주인장 |
| 대표자 | 노경표 |
| 주소 | 경기도 하남시 미사강변동로 72, 9층 915호 |
| 전화 | 031-791-2597 |
| 사업자번호 | 793-86-01745 |
| 현 도메인 | juinjang.co.kr |

### 2.2 핵심 메시지
- **슬로건**: "잠들어 있는 공간에 토탈 솔루션"
- **키워드**: REBIRTH;REVERSE
- **미션**: "빛을 보지 못한 공간의 가능성을 보는 통찰력"

### 2.3 사업 영역
| 영역 | 현황 |
|------|------|
| 숙박사업 | 7개 시설 운영 |
| F&B사업 | 2개 시설 운영 |
| 리테일사업 | 진행 중 |

### 2.4 파트너십 유형
1. **개발투자** - 직/간접 투자, 수익 쉐어
2. **위탁운영** - 경영/관리/운영 위탁
3. **브랜드 가맹** - 준비 중

---

## 3. 포트폴리오 (글램독 브랜드)

### 3.1 운영 중 (8개소)

| # | 지점명 | 지역 | 특징 | 이미지 현황 |
|---|--------|------|------|-------------|
| 1 | 글램독 가평점 | 경기 가평 | 야외 수영장, 잔디 운동장, BBQ | assets/가평 ✓ |
| 2 | 글램독 청평점 | 경기 가평 | 청평호 리버뷰, 오두막 바베큐장 | assets/청평 ✓ |
| 3 | 글램독 영흥점 | 인천 옹진 | 서해바다 오션뷰, 캠핑 감성 | assets/영흥도 ✓ |
| 4 | 글램독 경주점 | 경북 경주 | 넓은 운동장, 수영장, 옛 감성 | assets/경주 ✓ |
| 5 | 글램독 통영점 | 경남 통영 | 25m 3레인 실내 온수수영장 | assets/통영 ✓ |
| 6 | 글램독 양양점 | 강원 양양 | 서핑, 오션뷰, 글램포레스트 | assets/양양 ✓ |
| 7 | 글램독 거제점 | 경남 거제 | 오션뷰, 인피니티 풀, 미온수수영장 | Wix에서 추출 |
| 8 | 글램독 그라운드 파주점 | 경기 파주 | 플래그십, 대형 잔디운동장 | Wix에서 추출 |

### 3.2 운영 종료 (1개소) → 포트폴리오 제외
- 글램독 그라운드 삼성점 (서울 강남) - **포트폴리오에서 제외**

### 3.3 이미지 자산 현황
```
glamdog_web/assets/
├── 가평 글램독 애견펜션/    (다수)
├── 청평 글램독 애견펜션/    (다수)
├── 영흥도 글램독 애견펜션/  (30+ 이미지)
├── 양양 글램독 애견펜션/    (다수)
├── 경주 글램독 애견펜션/    (다수)
├── 통영 글램독 애견펜션/    (다수)
└── 총 약 300개 이미지
```

---

## 4. 사이트 구조 (Information Architecture)

### 4.1 라우팅 구조 (i18n 적용)
```
juinjang.co.kr/
├── /[locale]/ (Home) - ko, en
│   ├── Hero Section (REBIRTH;REVERSE + CTA)
│   ├── 비전 소개 (잠들어있는 공간의 토탈 솔루션)
│   ├── 3가지 핵심 서비스 (운영컨설팅, 브랜드개발, 파트너십)
│   ├── Stats (8개 지점, 9개 시설 등)
│   └── 파트너십 CTA
│
├── /[locale]/brand (Brand - GLAM DOG)
│   ├── GLAM DOG 브랜드 소개
│   └── 지점 카드 리스트 (8개)
│       ├── 지점 이미지
│       ├── 지점명, 특징
│       ├── 주소, 연락처
│       └── 예약 링크 (외부)
│
├── /[locale]/partnership (Partnership)
│   ├── 파트너십 소개
│   ├── 1. 개발투자 설명
│   ├── 2. 위탁운영 설명
│   ├── 3. 브랜드 가맹 설명
│   └── 문의 CTA
│
├── /[locale]/reference (Reference - 포트폴리오)
│   ├── 전체 지점 그리드 (8개 운영중)
│   └── /[locale]/reference/[slug] (지점 상세) - 선택
│       ├── 대형 이미지 갤러리
│       └── 시설 정보
│
└── /[locale]/contact (Contact us)
    ├── 문의 안내
    ├── 문의 폼
    │   ├── 이름, 전화번호, 숙소이름
    │   ├── 문의 분야 (체크박스: 시설임대, 투자, 제휴, 기타)
    │   └── 메시지
    └── 회사 연락처
```

### 4.2 네비게이션 (영문 유지)
| 메뉴 | 경로 | 설명 |
|------|------|------|
| Home | /[locale] | 메인 페이지 |
| Brand | /[locale]/brand | GLAM DOG 브랜드 |
| Partnership | /[locale]/partnership | 파트너십 유형 |
| Reference | /[locale]/reference | 운영 시설 포트폴리오 |
| Contact us | /[locale]/contact | 문의하기 |

---

## 5. 핵심 기능 요구사항

### 5.1 필수 기능 (MVP)
| 기능 | 설명 | 우선순위 |
|------|------|----------|
| 포트폴리오 갤러리 | 대형 이미지 + 라이트박스 | P0 |
| 지점 상세 페이지 | 시설 정보, 객실, 위치 | P0 |
| 문의 폼 | 이메일 발송 또는 Notion 연동 | P0 |
| 반응형 디자인 | 모바일 최적화 | P0 |
| SEO 최적화 | 메타태그, JSON-LD | P1 |

### 5.2 선택 기능 (Post-MVP)
| 기능 | 설명 | 우선순위 |
|------|------|----------|
| 관리자 CMS | 포트폴리오 이미지 관리 | P2 |
| 블로그/뉴스 | 회사 소식 | P2 |
| 다국어(영어) | 해외 투자자 대응 | P3 |

---

## 6. 디자인 방향

### 6.1 톤 & 매너
- **키워드**: 프리미엄, 럭셔리, 신뢰, 전문성, 세련됨
- **컬러** (v2 골드/베이지 스타일):
  - Primary: 골드 (#C5A47E) - 럭셔리 강조
  - Secondary: 슬레이트 (#1e293b, #64748b)
  - Background: 웜 화이트 (#fcfaf8)
  - Dark: 블랙 (#000000) - 푸터, 다크 섹션
- **타이포**: Noto Serif KR(제목) + Pretendard(본문)

### 6.2 핵심 UI 컴포넌트
1. **Hero Section**: 풀스크린 이미지 + 오버레이 텍스트 (REBIRTH;REVERSE)
2. **Service Cards**: 3개 핵심 서비스 카드 (운영컨설팅, 브랜드개발, 파트너십)
3. **Stats Section**: 다크 배경 + 골드 숫자 강조
4. **Portfolio Grid**: 3x3 균일 그리드, 운영/종료 상태 표시
5. **Partnership Cards**: 3가지 파트너십 유형 상세 설명
6. **Contact Form**: 문의 분야 체크박스 포함 폼

### 6.3 레퍼런스
- 프리미엄 호텔 그룹 사이트
- 부동산 투자/자산운용사 기업 사이트
- v2 GLAM DOG 디자인 시안 (현재 구현됨)

---

## 7. 기술 스택 (권장)

### 7.1 프론트엔드
| 기술 | 이유 |
|------|------|
| Next.js 15+ (App Router) | glamdog_web과 동일, SSG/ISR 지원 |
| Tailwind CSS v4 | 빠른 스타일링, 일관성 |
| Framer Motion | 부드러운 애니메이션 |
| next-intl (선택) | 추후 다국어 대응 |

### 7.2 백엔드/인프라
| 기술 | 이유 |
|------|------|
| Vercel | 쉬운 배포, glamdog_web과 동일 |
| **Resend** | 문의 폼 이메일 발송 (API 방식, 무료 티어 제공) |
| Cloudinary (선택) | 이미지 최적화 CDN |

### 7.3 데이터 관리
- **초기**: JSON 파일 기반 (glamdog_web 패턴 재사용)
- **확장**: Notion API 또는 Headless CMS (Sanity, Contentful)

---

## 8. 데이터 마이그레이션

### 8.1 glamdog_web에서 재사용 가능한 데이터
```typescript
// src/lib/data/mockLocations.ts 에서 추출
interface PortfolioLocation {
  name: string;          // "글램독 가평점"
  slug: string;          // "gapyeong"
  description: string;   // 한글 설명
  address: string;       // 주소
  phone: string;         // 연락처
  coordinates: { lat, lng };
  images: string[];      // 이미지 경로
  facilities: Facility[];
  rooms: Room[];
}
```

### 8.2 Wix 사이트에서 추출할 데이터
```
juinjang.co.kr/properties에서 추출:
├── 글램독 거제점 이미지 (다수)
├── 글램독 그라운드 파주점 이미지 (다수)
└── 각 지점 대표 이미지
```

### 8.3 추가 수집 필요 데이터 (선택)
- 회사 연혁 자료 (타임라인용)
- 대표자 인사말

---

## 9. 프로젝트 구조 (예상)

```
juinjang-web/
├── public/
│   └── images/
│       └── portfolio/
│           ├── gapyeong/
│           ├── cheongpyeong/
│           └── ... (8개 지점)
├── src/
│   ├── app/
│   │   ├── page.tsx           # Home
│   │   ├── about/
│   │   ├── portfolio/
│   │   │   ├── page.tsx       # Grid
│   │   │   └── [slug]/
│   │   ├── partnership/
│   │   └── contact/
│   ├── components/
│   │   ├── layout/            # Header, Footer
│   │   ├── home/              # Hero, Stats
│   │   ├── portfolio/         # Gallery, Card
│   │   └── ui/                # Button, Form
│   └── lib/
│       └── data/
│           └── portfolio.ts   # 지점 데이터
├── docs/
│   └── prd.md                 # 이 문서
└── package.json
```

---

## 10. 이미지 자산 활용 계획

### 10.1 이미지 복사 전략
```bash
# glamdog_web/assets → juinjang-web/public/images/portfolio
cp -r glamdog_web/assets/가평\ 글램독\ 애견펜션/* juinjang-web/public/images/portfolio/gapyeong/
cp -r glamdog_web/assets/청평\ 글램독\ 애견펜션/* juinjang-web/public/images/portfolio/cheongpyeong/
# ... 6개 지점
```

### 10.2 이미지 최적화
- Next.js Image 컴포넌트 사용 (자동 최적화)
- WebP 변환
- 반응형 srcset

---

## 11. 결정된 사항

### 2026-01-26 확정
| 항목 | 결정 |
|------|------|
| 삼성점(운영종료) | **포트폴리오 제외** - 운영 중인 8개 지점만 표시 |
| 거제점/파주점 이미지 | **기존 Wix 사이트에서 추출** - juinjang.co.kr/properties에서 다운로드 |
| 문의 폼 처리 | **이메일 발송** - Resend API 사용 권장 |
| 도메인 | **juinjang.co.kr 유지** - DNS만 Vercel로 변경 |

### 2026-01-30 확정
| 항목 | 결정 |
|------|------|
| 브랜드 방향 | **주인장 중심 (B2B)** - 파트너십/투자 문의 유도 |
| 디자인 컬러 | **골드/베이지 유지** - v2 GLAM DOG 럭셔리 스타일 |
| 메뉴 언어 | **영문 유지** - Home, Brand, Partnership, Reference, Contact us |
| i18n | **next-intl 적용** - /ko, /en 디렉토리 기반 라우팅 |
| 콘텐츠 소스 | **Wix 사이트 콘텐츠 마이그레이션** - docs/wix-site-analysis.md 참조 |

---

## 12. 검증 방법

### 12.1 개발 중 검증
- `npm run dev` 로컬 확인
- Lighthouse 성능/접근성 점수 90+ 목표
- 모바일 반응형 테스트

### 12.2 배포 후 검증
- 실제 문의 폼 발송 테스트
- Google Search Console 등록
- 페이지 로딩 속도 측정

---

## 13. 요약

| 항목 | 내용 |
|------|------|
| 프로젝트명 | juinjang-web |
| 기술 스택 | Next.js 15 + Tailwind CSS v4 |
| 핵심 기능 | 포트폴리오 갤러리, 문의 폼 |
| 재사용 자산 | glamdog_web 이미지 300+ |
| 예상 페이지 | 5개 (Home, About, Portfolio, Partnership, Contact) |
| 포트폴리오 지점 | 8개 (운영 중) |

---

## 14. 구현 단계 (Implementation Roadmap)

### Phase 1: 프로젝트 초기화
```bash
# 1. 새 프로젝트 생성
npx create-next-app@latest juinjang-web --typescript --tailwind --app

# 2. 필수 패키지 설치
npm install framer-motion resend @react-email/components

# 3. glamdog_web에서 이미지 복사
cp -r glamdog_web/assets/* juinjang-web/public/images/portfolio/
```

### Phase 2: Wix 이미지 추출
1. juinjang.co.kr/properties 페이지 접속
2. 개발자 도구 → Network 탭 → 이미지 URL 추출
3. 거제점, 파주점 이미지 다운로드
4. `public/images/portfolio/geoje/`, `public/images/portfolio/paju/` 저장

### Phase 3: 핵심 페이지 개발
1. **Layout**: Header, Footer 컴포넌트
2. **Home**: Hero, Stats, Portfolio Preview
3. **Portfolio**: Grid, Detail 페이지
4. **Contact**: 문의 폼 + Resend API Route

### Phase 4: 배포
1. Vercel 연결
2. juinjang.co.kr DNS 변경 (기존 Wix → Vercel)
3. 환경 변수 설정 (RESEND_API_KEY)

---

## 15. 개발 규칙 및 문서화 (Development Guidelines)

### 15.1 커밋 컨벤션 (Commit Convention)

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Type:**
- `feat`: 새로운 기능 추가
- `fix`: 버그 수정
- `docs`: 문서 변경
- `style`: 코드 포맷팅 (기능 변경 없음)
- `refactor`: 코드 리팩토링
- `perf`: 성능 개선
- `test`: 테스트 추가/수정
- `chore`: 빌드/설정 변경
- `design`: UI/UX 변경

**Scope (선택):**
- `home`, `about`, `portfolio`, `partnership`, `contact`
- `layout`, `ui`, `api`, `data`

**예시:**
```
feat(portfolio): 지점 상세 페이지 갤러리 구현
fix(contact): 폼 유효성 검사 오류 수정
docs: CHANGELOG 업데이트
```

### 15.2 CHANGELOG 규칙

모든 의미 있는 변경사항은 `CHANGELOG.md`에 기록합니다.

**형식:**
```markdown
## [버전] - YYYY-MM-DD

### Added (추가)
- 새로운 기능

### Changed (변경)
- 기존 기능 수정

### Fixed (수정)
- 버그 수정

### Removed (삭제)
- 제거된 기능
```

### 15.3 컴포넌트 문서화

주요 컴포넌트는 파일 상단에 JSDoc 주석으로 문서화합니다.

```tsx
/**
 * PortfolioCard - 포트폴리오 지점 카드 컴포넌트
 *
 * @description 글램독 지점을 카드 형태로 표시
 * @example
 * <PortfolioCard location={gapyeongData} />
 */
```

### 15.4 폴더 구조 규칙

```
src/
├── app/                    # Next.js App Router 페이지
│   ├── (routes)/          # 라우트 그룹
│   └── api/               # API Routes
├── components/
│   ├── layout/            # Header, Footer 등 레이아웃
│   ├── home/              # 홈페이지 전용 컴포넌트
│   ├── portfolio/         # 포트폴리오 관련
│   ├── ui/                # 재사용 UI (Button, Card 등)
│   └── shared/            # 공통 컴포넌트
├── lib/
│   ├── data/              # 정적 데이터 (JSON)
│   ├── utils/             # 유틸리티 함수
│   └── hooks/             # 커스텀 훅
├── types/                 # TypeScript 타입 정의
└── styles/                # 전역 스타일
```

### 15.5 작업 진행 기록

작업 시작/완료 시 CLAUDE.md의 "작업 로그" 섹션에 기록합니다.

---

## 16. 작업 로그 (Work Log)

### 2026-01-30
- **[완료]** v2 디자인 구현 (GLAM DOG 럭셔리 스타일)
  - 골드/베이지 컬러 팔레트 적용
  - Pretendard + Noto Serif KR 폰트
  - Remix Icons 아이콘 시스템
  - Hero, Services, Testimonials, Franchise 섹션
- **[완료]** i18n 구현 (next-intl)
  - 한국어/영어 번역 파일 생성 (messages/ko.json, messages/en.json)
  - [locale] 디렉토리 기반 라우팅
  - 브라우저 언어 자동 감지 미들웨어
  - Header/Footer 컴포넌트 번역 적용
- **[완료]** Wix 사이트 분석
  - juinjang.co.kr 전체 구조 분석
  - 5개 페이지 콘텐츠 추출 (Home, Brand, Partnership, Reference, Contact)
  - docs/wix-site-analysis.md 문서화
- **[완료]** PRD 업데이트
  - 브랜드 방향 결정: B2B (주인장 중심)
  - 디자인 컬러 결정: 골드/베이지 유지
  - 메뉴 언어 결정: 영문 유지
  - 사이트 구조 업데이트

### 2026-01-26
- **[완료]** 프로젝트 초기화
  - Git 저장소 생성
  - Next.js 15 + Tailwind CSS v4 설정
  - framer-motion 설치
  - 기본 페이지 구조 생성 (layout.tsx, page.tsx)
  - 문서화 규칙 설정
- **[완료]** 디자인 시스템 구현 (v0.2.0)
  - Google Stitch 디자인 시안 기반 구현
  - CLAUDE.md 섹션 17에 디자인 시스템 문서화
  - Tailwind v4 @theme 디자인 토큰 적용
  - Manrope, Playfair Display 폰트 설정
- **[완료]** 핵심 페이지 구현
  - Home 페이지 (Hero, Stats, Carousel, CTA)
  - Portfolio 페이지 (4컬럼 그리드)
  - Partnership 페이지 (위탁운영, 개발투자, 가맹)
  - Contact 페이지 (문의 양식, 연락처)
  - 빌드 성공 확인

---

## 17. 디자인 시스템 (Design System) - v2 골드/베이지

### 17.1 색상 (Colors)

| Token | Value | 용도 |
|-------|-------|------|
| `gold` | `#C5A47E` | 프라이머리, CTA 버튼, 강조, 아이콘 |
| `gold-light` | `#D4B896` | 호버 상태 |
| `gold-dark` | `#A68B5B` | 액티브 상태 |
| `background` | `#fcfaf8` | 페이지 배경 (웜 화이트) |
| `surface` | `#ffffff` | 카드, 컨테이너 |
| `dark` | `#000000` | 푸터, 다크 섹션 |
| `slate-900` | `#0f172a` | 다크 텍스트, 버튼 |
| `slate-600` | `#64748b` | 보조 텍스트 |
| `slate-500` | `#64748b` | 설명 텍스트 |

**텍스트 색상 가이드라인:**
- 주요 텍스트: `text-slate-900` 또는 `text-slate-800`
- 보조 텍스트: `text-slate-600`
- 설명 텍스트: `text-slate-500`
- 다크 배경 위: `text-white`, `text-gray-400`
- 골드 강조: `text-[#C5A47E]`

### 17.2 타이포그래피 (Typography)

| Font | 용도 | 적용 |
|------|------|------|
| **Pretendard** | 본문, UI 텍스트, 네비게이션 | 기본 sans-serif |
| **Noto Serif KR** | 제목, 강조 | `font-serif` |

**크기 체계:**
- Hero 제목: `text-5xl md:text-7xl font-serif`
- 섹션 제목: `text-4xl md:text-5xl font-serif`
- 카드 제목: `text-xl font-serif`
- 본문: `text-base` 또는 `text-lg`
- 캡션: `text-sm`
- 메뉴: `text-sm uppercase tracking-widest font-semibold`

### 17.3 간격 & 레이아웃 (Spacing & Layout)

| 요소 | 값 |
|------|-----|
| 최대 너비 | `max-w-[1200px]` |
| 페이지 패딩 | `px-6 lg:px-10` |
| 섹션 패딩 | `py-20` ~ `py-24` |
| 헤더 높이 | `72px` (py-4 + 콘텐츠) |
| 히어로 높이 | `h-[85vh]` |

### 17.4 Border Radius

| Token | Value |
|-------|-------|
| DEFAULT | `0.25rem` (4px) |
| lg | `0.5rem` (8px) |
| xl | `0.75rem` (12px) |
| full | `9999px` |

### 17.5 컴포넌트 스타일

#### Header
```css
fixed top-0 w-full z-50
bg-white/95 backdrop-blur-sm
border-b border-gray-100 shadow-sm
max-w-[1400px] mx-auto px-8 h-24
```

#### Hero Section
```css
relative h-[900px] flex items-center justify-center pt-24
/* 배경 이미지 + 오버레이 */
bg-cover bg-center
bg-black/40 overlay
```

#### Service Card
```css
bg-[#fcfaf8] p-8 text-center
border border-gray-100
group hover:border-[#C5A47E]
/* 아이콘 원형 */
w-16 h-16 mx-auto bg-white rounded-full
group-hover:bg-[#C5A47E] transition-colors
```

#### Stats Card (다크 섹션)
```css
bg-white/10 backdrop-blur-md p-8 rounded-lg
border border-white/10
/* 숫자 */
text-4xl font-bold text-[#C5A47E]
```

#### Portfolio Card
```css
/* 이미지 + 오버레이 카드 */
aspect-[16/10] rounded-sm
shadow-lg overflow-hidden
/* 상태 뱃지 */
bg-red-600 text-white text-xs px-2 py-1
```

#### CTA Button (Primary - 골드)
```css
bg-[#C5A47E] text-white
px-10 py-4 uppercase text-sm tracking-widest
hover:bg-white hover:text-black transition-colors
```

#### CTA Button (Secondary - 아웃라인)
```css
border border-white text-white
px-10 py-4 uppercase text-sm tracking-widest
hover:bg-white hover:text-black transition-colors
```

#### CTA Button (Dark)
```css
bg-black text-white
px-8 py-3 uppercase text-xs tracking-widest
hover:bg-[#C5A47E] transition-colors
```

### 17.6 아이콘 (Icons)

**Remix Icons** 사용 (CDN)
```html
<link href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.min.css" rel="stylesheet" />
```

주요 아이콘:
- `ri-paw-fill` - 로고 (발바닥)
- `ri-map-pin-line` - 위치
- `ri-phone-line` - 전화
- `ri-mail-line` - 이메일
- `ri-checkbox-circle-fill` - 체크 (골드)
- `ri-hotel-bed-fill` - 숙박
- `ri-water-flash-fill` - 수영장
- `ri-heart-pulse-fill` - 웰니스
- `ri-football-fill` - 운동장
- `ri-fire-fill` - BBQ
- `ri-facebook-fill`, `ri-instagram-line`, `ri-twitter-x-line` - 소셜

### 17.7 애니메이션

| 효과 | 클래스 |
|------|--------|
| 기본 전환 | `transition-colors duration-300` |
| 호버 스케일 | `active:scale-95` |
| 그림자 전환 | `transition-shadow` |
| 배경 전환 | `transition-all` |

### 17.8 다크 모드

`class` 기반 다크 모드 (`darkMode: "class"`)
- HTML 요소에 `class="dark"` 추가로 전환
- 모든 컬러는 `dark:` 접두사로 오버라이드

### 17.9 반응형 브레이크포인트

| 브레이크포인트 | 적용 |
|---------------|------|
| `sm` (640px) | 버튼 가로 배치 |
| `md` (768px) | 네비게이션 표시, 그리드 3열 |
| `lg` (1024px) | 더 넓은 패딩 |

### 17.10 디자인 파일 참조

```
assets/stitch_juinjang_home_page/
├── juinjang_home_page/code.html          # 홈 페이지
├── juinjang_portfolio_grid/code.html     # 포트폴리오 그리드
├── juinjang_partnership_&_investment/    # 파트너십 페이지
└── juinjang_contact_&_inquiry/           # 문의 페이지
```

---

## 18. i18n 설정 (Internationalization)

### 18.1 파일 구조
```
src/
├── i18n/
│   ├── routing.ts          # 라우팅 설정 (locales, defaultLocale)
│   └── request.ts          # 서버 컴포넌트 설정
├── middleware.ts           # 언어 감지 미들웨어
└── app/
    └── [locale]/           # 로케일별 페이지
        ├── layout.tsx
        └── page.tsx

messages/
├── ko.json                 # 한국어 번역
└── en.json                 # 영어 번역
```

### 18.2 지원 언어
| 코드 | 언어 | 기본 |
|------|------|------|
| `ko` | 한국어 | ✓ (기본값) |
| `en` | 영어 | - |

### 18.3 번역 키 구조
```json
{
  "meta": { "title", "description" },
  "nav": { "services", "story", "franchise", "contact", "bookNow" },
  "hero": { "title1", "title2", "description", "ctaServices", "ctaFranchise" },
  "services": { "subtitle", "title", "items[]" },
  "testimonials": { "subtitle", "title", "reviews[]" },
  "stats": { "experience", "sessions", "satisfaction", "locations" },
  "franchise": { "subtitle", "title", "description", "benefits[]", "cta" },
  "footer": { "brand", "description", "quickLinks", "links", "newsletter", ... },
  "contact": { "title", "subtitle", "form" }
}
```

---

## 19. Wix 사이트 콘텐츠 참조

> 상세 분석: [docs/wix-site-analysis.md](docs/wix-site-analysis.md)

### 19.1 마이그레이션 필요 콘텐츠

#### 홈페이지
- 슬로건: "REBIRTH;REVERSE"
- 비전: "잠들어있는 공간의 토탈 솔루션"
- 미션: "빛을 보지 못한 공간의 가능성을 보는 통찰력"
- 3가지 핵심 서비스 설명

#### Brand (GLAM DOG)
- 브랜드 소개 텍스트
- 8개 지점 정보 (이름, 특징, 주소, 연락처, 예약링크)

#### Partnership
- 개발투자 설명
- 위탁운영 설명
- 브랜드 가맹 설명

#### Reference
- 8개 운영중 지점 카드 (이미지, 주소)
- 1개 운영종료 지점 (삼성점 - 제외)

#### Contact
- 문의 분야: 시설임대, 투자, 제휴, 기타
- 폼 필드: 이름, 전화번호, 숙소이름, 메시지

### 19.2 이미지 자산
```
# glamdog_web에서 복사 가능
가평, 청평, 영흥도, 경주, 통영, 양양 (6개 지점)

# Wix에서 추출 필요
거제점, 파주점 (2개 지점)
```

---

*이 문서는 별도 프로젝트(juinjang-web)의 PRD로 활용됩니다.*
