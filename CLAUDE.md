# 주식회사 인장 기업 홈페이지 리뉴얼 PRD

> 문서 ID: JUINJANG-PRD-001
> 상태: 계획
> 작성일: 2026-01-26
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

```
juinjang.co.kr/
├── / (Home)
│   ├── Hero Section (슬로건 + CTA)
│   ├── 회사 소개 (간략)
│   ├── 사업 영역 (숙박/F&B/리테일)
│   ├── 포트폴리오 미리보기 (8개 지점 카드)
│   └── 파트너십 CTA
│
├── /about (회사 소개)
│   ├── 비전 & 미션
│   ├── 회사 연혁 (Timeline)
│   ├── 대표 인사말 (선택)
│   └── 사업 영역 상세
│
├── /portfolio (포트폴리오)
│   ├── 전체 지점 그리드
│   └── /portfolio/[slug] (지점 상세)
│       ├── 대형 이미지 갤러리
│       ├── 지점 정보 (위치, 시설, 특징)
│       ├── 객실 정보 (카드 형태)
│       └── 예약 링크 (네이버/글램독 연결)
│
├── /partnership (파트너십)
│   ├── 파트너십 유형 설명
│   │   ├── 개발투자
│   │   ├── 위탁운영
│   │   └── 브랜드 가맹
│   └── 문의 CTA
│
└── /contact (문의하기)
    ├── 문의 폼
    │   ├── 이름, 전화번호, 숙소명
    │   ├── 문의 분야 (체크박스)
    │   └── 메시지
    └── 회사 연락처
```

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
- **키워드**: 프리미엄, 신뢰, 전문성, 세련됨
- **컬러**:
  - Primary: 딥 레드 (#8B0000) - 현재 브랜드 컬러 유지
  - Secondary: 다크 그레이 (#1F2937)
  - Background: 화이트/라이트 그레이
- **타이포**: 고급스러운 세리프(제목) + 가독성 높은 산세리프(본문)

### 6.2 핵심 UI 컴포넌트
1. **Hero Section**: 풀스크린 영상/이미지 + 오버레이 텍스트
2. **Portfolio Grid**: Masonry 또는 균일 그리드, 호버 효과
3. **Image Gallery**: 전체화면 라이트박스, 썸네일 네비게이션
4. **Stats Counter**: 운영 시설 수, 총 객실 수 등 숫자 강조
5. **Contact Form**: 심플하고 깔끔한 폼 디자인

### 6.3 레퍼런스
- 프리미엄 부동산/호텔 그룹 사이트
- 투자사/자산운용사 기업 사이트

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

## 11. 결정된 사항 (2026-01-26 확정)

| 항목 | 결정 |
|------|------|
| 삼성점(운영종료) | **포트폴리오 제외** - 운영 중인 8개 지점만 표시 |
| 거제점/파주점 이미지 | **기존 Wix 사이트에서 추출** - juinjang.co.kr/properties에서 다운로드 |
| 문의 폼 처리 | **이메일 발송** - Resend API 사용 권장 |
| 도메인 | **juinjang.co.kr 유지** - DNS만 Vercel로 변경 |

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

### 2026-01-26
- **[완료]** 프로젝트 초기화
  - Git 저장소 생성
  - Next.js 15 + Tailwind CSS v4 설정
  - framer-motion 설치
  - 기본 페이지 구조 생성 (layout.tsx, page.tsx)
  - 문서화 규칙 설정

---

*이 문서는 별도 프로젝트(juinjang-web)의 PRD로 활용됩니다.*
