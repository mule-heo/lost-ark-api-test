# 라카테스 - Lost Ark API Test

<div align="center">
  <img src="" alt="로고"/>
</div>

<br>

## 배포 링크

[라카테스](https://lakates.netlify.app/)

<br>

## 사이트 이용 주의사항

본 사이트는 공식 API 문서에 안내된 방법에 따라 요청을 수행하고 응답을 확인할 뿐 요청에 필요한 API 키 발급과 관련된 기능은 수행하지 않습니다. 사이트를 이용해 보기 위해서는 개별적으로 [Lostark OpenAPI Developer Portal](https://developer-lostark.game.onstove.com/) 사이트를 방문하여 클라이언트를 등록하는 과정을 거쳐야만 합니다.

API의 소유권 및 모든 권한은 Smilegate RPG 사에 있습니다. 이 페이지를 통하여 API를 활용하고자 하더라도 Smilegate RPG 사의 이용 약관을 준수하여야 합니다.

<br>

## 프로젝트 추진 배경

- API 문서에서 제공하는 정보는 API를 활용하고자 하는 이용자에게 요청 방법, 응답 본문 등 충분한 정보를 제공
- 하지만 이미지 파일의 링크와 같은 내용도 전부 문자열로만 제공되는 것을 확인
- 이미지 링크와 같은 데이터는 미리보기를 제공하는 등 시각화해 보면 어떨까? 하는 생각에서 프로젝트를 기획

- 추가로 향후 해당 API를 활용할 계획이 있어 해당 API가 어떠한 데이터를 제공하는지 숙지하는 기회로 활용

<br>

## 활용 대상 API

[Lostark OpenAPI Developer Portal](https://developer-lostark.game.onstove.com/)

<br>

## 프로젝트 추진 목적

### 프로젝트 목표

- 이미지 url과 같은 string 타입의 데이터는 미리보기를 제공하는 식으로 시각화함으로써 응답 데이터를 사용자 친화적으로 표현
- 추후 관련 프로젝트 진행 시 재사용할 수 있는 컴포넌트를 구현

### 개인 목표

- 타입스크립트 타입 활용 숙달
- API 데이터 처리 숙달

<br>

## 문서

### [와이어프레임(Figma) - 지속적으로 업데이트 예정](https://www.figma.com/file/PJI2X3qNCd40go1vROfjvT/%EB%A1%9C%EC%8A%A4%ED%8A%B8%EC%95%84%ED%81%ACAPI%EC%8B%9C%EA%B0%81%ED%99%94?type=design&node-id=0%3A1&mode=design&t=LmzWxID6Gf2FnDDF-1)

<br>

## 주요 기능

- API 요청 본문 입력 폼 제공
- API 요청 응답 확인
- 미리보기 컴포넌트 라이브러리로써의 기능

<br>

## 버전 정보

0.1.0 ('23.09.02.) - 프로젝트 초기 설정

## 기술 스택

### dependencies

<table>
<tr>
<th align="center">
<img width="150" height="1">
<p> 
react
</p>
</th>
<th align="center">
<img width="150" height="1">
<p> 
react-router-dom
</p>
</th>
<th align="center">
<img width="150" height="1">
<p> 
styled-components
</p>
</th>
<th align="center">
<img width="150" height="1">
<p> 
axios
</p>
</th>
<th align="center">
<img width="150" height="1">
<p> 
react-query
</p>
</th>
</tr>
<tr>
<td align="center">
<img src="https://techstack-generator.vercel.app/react-icon.svg" alt="icon" width="65" height="65" />
</td>
<td align="center">
<img src="https://github.com/mule-heo/lost-ark-api-test/assets/83588163/030dc889-82ee-4ac4-8a89-c11b35a0b11a" alt="icon" width="65" height="65" />
</td>
<td align="center">
<img src="https://github.com/mule-heo/lost-ark-api-test/assets/83588163/b5086124-91d5-4406-9f40-bb40dc6a8914" alt="icon" color="white" width="65" height="65" />
</td>
<td align="center">
<img src="https://github.com/mule-heo/lost-ark-api-test/assets/83588163/a8ecbe50-7753-43cc-92e3-66b0ba2b979f" alt="icon" color="white" width="65" height="65" />
</td>
<td align="center">
<img src="https://github.com/mule-heo/lost-ark-api-test/assets/83588163/6ba40e0e-67fd-4873-936d-a8903ae2e036" alt="icon" color="white" width="65" height="65" />
</td>
</tr>
</table>

### dev-dependencies

<table>
<tr>
<th align="center">
<img width="150" height="1">
<p> 
typescript
</p>
</th>
<th align="center">
<img width="150" height="1">
<p> 
eslint
</p>
</th>
<th align="center">
<img width="150" height="1">
<p> 
prettier
</p>
</th>
</tr>
<tr>
<td align="center">
<img src="https://techstack-generator.vercel.app/ts-icon.svg" alt="icon" width="65" height="65" />
</td>
<td align="center">
<img src="https://techstack-generator.vercel.app/eslint-icon.svg" alt="icon" width="65" height="65" />
</td>
<td align="center">
<img src="https://techstack-generator.vercel.app/prettier-icon.svg" alt="icon" width="65" height="65" />
</td>
</tr>
</table>

<br>

## 라이선스

[MIT License](./LICENSE)

