# SeatGet

SeatGet은 좌석 예매를 구현하며 동시성 제어, 데이터 정합성, 부하 측정을 학습하는 팀 프로젝트입니다.

| 경로 | 내용 |
| --- | --- |
| [backend/](backend/README.md) | 예매 API와 데이터 정합성 검증 |
| [frontend/](frontend/README.md) | 좌석 조회와 예매 흐름 |
| [infra/](infra/README.md) | 로컬 실행 및 배포 구성 |
| [experiments/](experiments/README.md) | 부하 조건, 실행 방법, 측정 결과 |
| [docs/](docs/README.md) | 기능 요구사항, API, ERD, 기술 결정 |

처음 참여한다면 [첫 시연 범위](docs/mvp.md)와 [초기 기술 스택](docs/adr/0001-initial-stack.md)을 확인하세요. [백엔드](backend/README.md), [프런트엔드](frontend/README.md), [MySQL](infra/README.md)의 로컬 실행 방법은 각 디렉터리에서 확인할 수 있습니다.

팀 공통 AI 지침과 CS 학습은 `seatget-brain`에서 관리합니다. Brain을 쓰는 이유와 적용 전후 실험은 [Brain 팀 안내서](https://seatget-team.github.io/seatget-brain/), 서비스 적용 명령은 [AI 작업 환경](docs/ai-context.md)에서 확인할 수 있습니다.
