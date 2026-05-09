# Unknown Project: FitBuddy Connection 랜딩 페이지

![GitHub Repo Size](https://img.shields.io/github/repo-size/Nugu-ai/SWAI)
![GitHub Last Commit](https://img.shields.io/github/last-commit/Nugu-ai/SWAI)

## 프로젝트 소개

이 프로젝트는 'FitBuddy Connection' 서비스의 랜딩 페이지 역할을 수행합니다. 방문자에게 서비스의 목적과 주요 기능을 소개하고, 외부 MVP(Minimum Viable Product) 링크를 제공하여 실제 서비스로의 접근을 유도합니다. HTML, CSS, JavaScript 기반의 정적 웹사이트로 구현되었으며, 서버리스 Google Apps Script를 활용해 방문자 트래킹 및 피드백 수집 기능을 포함하고 있습니다.

-   **저장소 URL**: [https://github.com/Nugu-ai/SWAI](https://github.com/Nugu-ai/SWAI)
-   **한 줄 요약**: 'FitBuddy Connection' 서비스를 소개하고 사용자 참여를 유도하는 정적 랜딩 페이지.

## 주요 기능

명확한 프로젝트 기능 정의는 제공되지 않았지만, 분석된 파일들을 기반으로 다음과 같은 주요 기능을 추정할 수 있습니다.

*   **서비스 소개 및 홍보**: `FitBuddy Connection` 서비스의 목표와 핵심 가치를 방문자에게 전달합니다.
*   **외부 MVP 링크 제공**: 실제 서비스 또는 MVP 애플리케이션으로 이동할 수 있는 직접적인 링크를 제공합니다.
*   **방문자 정보 트래킹**: UTM 파라미터와 쿠키를 활용하여 방문자의 유입 경로 및 행동 데이터를 수집합니다.
*   **사용자 피드백 수집**: 간단한 문의 양식 등을 통해 사용자 의견을 수집하고 Google Sheets에 저장합니다.
*   **반응형 UI/UX**: 다양한 디바이스와 화면 크기에서 최적화된 사용자 경험을 제공합니다.
*   **동적인 시각 효과**: 캐러셀, 숫자 카운팅 애니메이션 등 시각적으로 매력적인 요소를 통해 사용자 참여를 유도합니다.

## 프로젝트 구조

프로젝트의 디렉토리 구조에 대한 명시적인 정보는 없으나, 핵심 파일 목록을 통해 다음과 같은 구조를 추정할 수 있습니다.

```
.
├── css/
│   └── style.css
│   └── (bootstrap.min.css 등 컴파일된 CSS 파일 추정)
├── js/
│   └── main.js
├── lib/
│   ├── owlcarousel/
│   │   └── owl.carousel.js
│   │   └── (관련 CSS/JS 파일 추정)
│   ├── (다른 라이브러리 폴더 추정)
├── scss/
│   └── bootstrap/
│   │   └── (Bootstrap SCSS 소스 파일들)
│   └── (프로젝트 고유 SCSS 파일 추정)
├── index.html
└── READ-ME.txt (내용 부재)
```

## 핵심 파일 설명

*   **`index.html`**: 프로젝트의 메인 랜딩 페이지입니다. 'FitBuddy Connection' 서비스의 목적, 주요 기능, 그리고 외부 MVP 링크를 포함한 핵심 정보를 담고 있습니다. `js/main.js` 스크립트를 연결하여 방문자 트래킹 및 피드백 수집 기능을 활성화하며, 기본적인 웹사이트 구조(내비게이션 바, 푸터 등)를 정의합니다.
*   **`css/style.css`**: 프로젝트의 전반적인 시각적 테마와 레이아웃을 정의하는 사용자 정의 스타일시트입니다. Bootstrap의 기본 스타일 위에 프로젝트 고유의 색상 변수, 폰트 설정, 내비게이션 바, 캐러셀, 팀 소개 섹션 등 다양한 UI 컴포넌트에 대한 스타일을 추가하여 디자인 일관성을 유지합니다.
*   **`js/main.js`**: 클라이언트 측의 핵심 비즈니스 로직과 상호작용을 담당하는 JavaScript 파일입니다. 'Back to top' 스크롤 기능, UTM 파라미터 및 쿠키를 이용한 방문자 정보 추적, `axios` 라이브러리를 활용한 Google Apps Script로의 비동기 데이터 전송, 그리고 사용자 피드백 제출 및 유효성 검사 로직을 구현합니다.
*   **`lib/owlcarousel/owl.carousel.js`**: jQuery 기반의 반응형 캐러셀(슬라이더) 플러그인입니다. 웹 페이지에 동적인 이미지 갤러리나 콘텐츠 슬라이드를 쉽게 추가할 수 있도록 하여 시각적 매력을 높이고 사용자 참여를 유도합니다. `css/style.css`에서 관련 스타일이 정의되어 있습니다.
*   **`scss/bootstrap/*.scss`**: Bootstrap 프레임워크를 커스터마이징하고 컴파일하기 위한 SCSS 소스 파일들입니다. 이를 통해 Bootstrap의 다양한 컴포넌트(버튼, 폼, 그리드 등)를 프로젝트의 디자인 가이드라인에 맞춰 수정하거나 확장할 수 있으며, 효율적인 CSS 관리가 가능합니다. (추정: 프로젝트의 SCSS 파일 개수로 미루어 보아 Bootstrap을 직접 커스터마이징하여 사용했을 가능성이 높습니다.)

## 기술 스택

*   **Frontend**:
    *   **HTML5**: 웹 페이지의 구조를 효과적으로 정의하고 의미론적인 마크업을 활용합니다.
    *   **CSS3**: 현대적인 웹 디자인과 반응형 레이아웃을 구현하여 시각적으로 매력적인 사용자 경험을 제공합니다.
    *   **SCSS**: CSS 코드를 구조화하고 재사용 가능한 스타일을 효율적으로 관리하여 대규모 프로젝트에서도 유지보수성을 높입니다.
    *   **JavaScript**: 동적인 웹 페이지와 사용자 인터랙션을 구현하여 풍부한 사용자 경험을 제공합니다.
    *   **Bootstrap 5**: 반응형 웹 디자인을 빠르고 효율적으로 구현하며 일관된 UI/UX를 제공하는 프레임워크로 활용됩니다.
    *   **jQuery**: DOM 조작 및 이벤트 처리를 간결하게 수행하여 웹 페이지의 동적 기능을 빠르게 개발합니다.
    *   **Axios**: 현대적인 JavaScript 환경에서 비동기 HTTP 요청을 효율적으로 처리하여 백엔드 API와 통신합니다.
    *   **Owl Carousel 2.2.1**: 시각적으로 매력적인 이미지 및 콘텐츠 슬라이더를 구현하여 사용자 참여도를 높입니다.
    *   **CounterUp.js**: 숫자 카운팅 애니메이션을 추가하여 웹사이트의 동적인 요소를 강화합니다.
    *   **jQuery Easing**: 다양한 애니메이션 효과를 적용하여 사용자 경험을 향상시킵니다.
    *   **Waypoints**: 스크롤 이벤트를 기반으로 특정 기능을 트리거하여 동적인 웹 페이지를 구현합니다.
    *   **Flaticon**: 아이콘 폰트를 사용하여 웹사이트의 시각적 요소를 풍부하게 하고 로딩 효율성을 높입니다.
    *   **Google Fonts**: 다양한 웹 폰트를 적용하여 웹사이트의 타이포그래피를 개선하고 브랜드 아이덴티티를 강화합니다.
*   **Backend**:
    *   **Google Apps Script**: 클라우드 기반의 서버리스 함수를 활용하여 간단한 백엔드 로직(예: 데이터 수집)을 구현합니다.
*   **Database**:
    *   **Google Sheets**: 비전문가도 쉽게 접근하고 관리할 수 있는 스프레드시트 기반의 데이터베이스를 활용합니다.
*   **DevOps**:
    *   **Static Site Hosting (Netlify, GitHub Pages 등)**: 웹 사이트를 효율적으로 배포하고 관리하여 높은 가용성과 빠른 로딩 속도를 제공합니다.
    *   **CDN (Content Delivery Network)**: 외부 라이브러리 및 리소스 로딩 속도를 최적화하여 사용자 경험을 향상시킵니다.

## 시스템 아키텍처

이 프로젝트는 HTML, CSS(SCSS 및 Bootstrap 포함), JavaScript(jQuery, 다양한 플러그인, Axios 사용)로 구성된 정적 웹사이트입니다. 사용자 방문 추적 및 간단한 문의 양식 제출과 같은 기본적인 데이터 수집을 위해 Google Apps Script를 서버리스 백엔드로 활용하며, 이 스크립트는 수집된 데이터를 Google Sheets에 저장합니다. 전체 프론트엔드 애플리케이션은 Netlify와 같은 정적 호스팅 서비스에 배포되어 높은 가용성과 빠른 응답 속도를 제공합니다.

```mermaid
graph TD
    classDef backend fill:#D4E6F1,stroke:#3498DB,stroke-width:2px;
    classDef external fill:#FADBD8,stroke:#E74C3C,stroke-width:2px;
    classDef storage fill:#D1F2EB,stroke:#2ECC71,stroke-width:2px;
    classDef user fill:#FCF3CF,stroke:#F1C40F,stroke-width:2px;

    A[사용자]:::user
    B[웹 브라우저]
    C[프론트엔드 애플리케이션 ("FitBuddy Connection" Landing Page)]
    D[Netlify/정적 호스팅]:::storage
    E[Google Apps Script]:::backend
    F[Google Sheets]:::storage
    G[CDN (Bootstrap, Icons, Fonts)]:::external

    A -- "웹 사이트 접속" --> B
    B -- "HTML/CSS/JS 요청" --> D
    D -- "정적 파일 제공" --> C
    C -- "외부 라이브러리 로딩" --> G
    C -- "방문자 정보/문의사항 전송 (Axios GET)" --> E
    E -- "데이터 저장/관리" --> F
    A -- "문의 양식 제출" --> C
    style C fill:#fff,stroke:#333,stroke-width:2px,color:#333
    style B fill:#fff,stroke:#333,stroke-width:2px,color:#333
```

## 실행 방법

추가 작성 필요: 프로젝트 실행 및 배포에 필요한 상세한 단계(예: 의존성 설치, 빌드 스크립트, 개발 서버 실행 등)가 현재 정보만으로는 명확하지 않습니다.

## 기술 선택 이유

*   **HTML5, CSS3, JavaScript**: 웹 표준 기술을 사용하여 브라우저 호환성을 확보하고, 웹 콘텐츠의 구조, 스타일, 동적인 기능을 유연하게 구현할 수 있습니다.
*   **SCSS**: CSS 전처리기인 SCSS를 사용하여 스타일 코드의 모듈화, 재사용성, 유지보수성을 향상시켜 효율적인 디자인 시스템 구축을 가능하게 합니다.
*   **Bootstrap 5**: 반응형 웹 디자인을 빠르고 효율적으로 구현하여 다양한 디바이스에서 일관된 사용자 경험을 제공하며, 개발 시간을 단축합니다.
*   **jQuery**: DOM 조작 및 이벤트 처리를 간결하고 쉽게 구현하여 웹 페이지에 동적인 요소를 빠르게 추가할 수 있습니다.
*   **Axios**: 비동기 HTTP 통신을 간편하게 처리하여 백엔드 API와의 데이터 교환을 효율적으로 관리할 수 있습니다.
*   **Google Apps Script & Google Sheets**: 별도의 서버 구축 없이 빠르고 저렴하게 간단한 백엔드 로직(데이터 수집)과 데이터베이스 기능을 구현하여 MVP 개발에 적합합니다.
*   **Static Site Hosting (Netlify 등)**: 정적 웹사이트를 빠르고 안정적으로 배포하여 사용자에게 높은 가용성과 우수한 성능을 제공하며, 운영 비용을 절감합니다.

## 개선 방향

1.  **프로젝트 범위 및 목적 명확화**: 현재 저장소가 `FitBuddy Connection` 서비스의 랜딩 페이지 역할을 하는 것으로 추정됩니다. `index.html` 외에 `GYMSTER` 템플릿의 잔재로 보이는 다른 `.html` 파일들을 정리하고, 이 저장소의 최종적인 역할(순수 랜딩 페이지, 또는 더 큰 프로젝트의 일부)을 `README.md`에 명확히 기술해야 합니다.
2.  **`READ-ME.txt` 파일 내용 작성**: 현재 비어있는 `READ-ME.txt` 파일에 프로젝트에 대한 상세 설명, 개발 환경 설정 방법, 빌드 및 배포 지침, 기여 가이드라인 등을 추가하여 신규 기여자나 유지보수 담당자가 쉽게 프로젝트를 이해하고 참여할 수 있도록 해야 합니다.
3.  **Google Apps Script 상세화**: Google Apps Script의 코드와 배포 URL, 그리고 데이터가 저장되는 Google Sheets의 구조(예: 시트 이름, 컬럼 헤더) 등을 문서화하여 백엔드 로직의 투명성을 높이고 유지보수를 용이하게 해야 합니다.
4.  **`ip` 변수 획득 방식 개선**: `main.js`에서 클라이언트 IP 주소를 전송하는 `ip` 변수의 획득 방식이 불분명합니다. 이는 보안 및 개인정보 보호 측면에서 중요한 부분이므로, 서버 사이드에서 안전하게 IP를 획득하거나, 클라이언트 측에서 IP 조회 서비스를 이용할 경우 그 방법을 명확히 하고 잠재적 위험을 분석해야 합니다.
5.  **보안 강화**: Google Apps Script를 통한 데이터 전송 시 CORS(Cross-Origin Resource Sharing) 설정 및 입력 데이터 유효성 검사, SQL Injection과 유사한 문제 방지 등을 고려하여 보안을 강화해야 합니다.
6.  **코드 모듈화 및 최신 JavaScript 문법 적용**: 현재 jQuery에 크게 의존하는 경향이 있으며, `main.js` 파일 하나의 비중이 높습니다. 향후 기능 확장을 고려하여 코드를 더 작은 모듈로 분리하고, ES6+ 문법 및 최신 프론트엔드 프레임워크(React, Vue, Angular 등) 도입을 검토하여 유지보수성과 확장성을 높일 수 있습니다.
7.  **빌드 프로세스 도입**: SCSS 파일을 컴파일하고 JavaScript를 번들링(Webpack, Vite 등)하는 빌드 프로세스를 도입하여 개발 효율성을 높이고, 프로덕션 환경에 최적화된 파일을 생성할 수 있습니다.
8.  **테스트 코드 작성**: 주요 기능(예: 피드백 제출, 방문자 트래킹 로직)에 대한 단위 테스트 또는 통합 테스트 코드를 작성하여 코드의 안정성을 확보해야 합니다.