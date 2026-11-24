# ADR 0001 초기 기술 스택

- 날짜 2026-11-24
- 상태 채택
- 관련 범위 [첫 시연 범위](../mvp.md)

## 결정

| 영역 | 기술 |
| --- | --- |
| 백엔드 | Java 21, Spring Boot 4.2, Maven Wrapper |
| 프런트엔드 | React, TypeScript, Vite, npm |
| 데이터 | MySQL 8.4 InnoDB, Flyway 마이그레이션 |
| 검증 | JUnit, MySQL Testcontainers 통합 테스트, k6 부하 실험 |
| 로컬 실행 | Docker Compose |
| AI 컨텍스트 | Git 서브모듈, Markdown, Node.js 동기화 |
| 협업 | GitHub Free의 공개 저장소 두 개와 Wiki |

Flyway, 실제 DB 연동, 예매 통합 테스트, k6 시나리오는 좌석 모델과 API를 구현하는 단계에서 연결합니다.

## MySQL 선택 근거

팀은 MySQL을 사용해 본 경험이 있습니다. 회차별 좌석에 고유 키를 두고 같은 인덱스 키의 행을 대상으로 비관적 잠금과 조건부 갱신을 비교하면, 초기 실험을 MySQL에서 실행할 수 있습니다. 인덱스 및 격리 수준이 잠금 범위에 영향을 주므로 둘을 고정하고 실행 결과에 기록합니다. [MySQL InnoDB 잠금 문서](https://dev.mysql.com/doc/refman/8.4/en/innodb-locks-set.html)

PostgreSQL의 부분 고유 인덱스는 조건에 일치하는 행의 유일성을 보장합니다. 예를 들어 예약 이력과 활성 예약을 같은 테이블에 둘 때 활용할 수 있습니다. 첫 구현은 회차별 좌석 상태를 고유한 행으로 관리할 계획이므로 MySQL로 시작합니다. 조건부 유일성 제약이 핵심 요건이 되면 PostgreSQL을 다시 검토합니다. [PostgreSQL 부분 인덱스 문서](https://www.postgresql.org/docs/current/indexes-partial.html)
