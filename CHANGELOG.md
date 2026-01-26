# Changelog

이 프로젝트의 모든 주요 변경사항을 기록합니다.
형식은 [Keep a Changelog](https://keepachangelog.com/ko/1.0.0/)를 따릅니다.

---

## [Unreleased]

### Added
- 프로젝트 초기 설정

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
