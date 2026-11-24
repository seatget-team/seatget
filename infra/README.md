# 인프라

팀원이 같은 조건으로 실행하는 데 필요한 로컬 구성과 배포 설정을 관리합니다. 환경 변수가 필요하면 이름과 예시를 공유하고 실제 값은 각 실행 환경에서 주입합니다.

`.env.example`을 `.env`로 복사하고 로컬용 `MYSQL_PASSWORD`와 `MYSQL_ROOT_PASSWORD`를 채우세요. 이 디렉터리에서 `docker compose up -d`를 실행하면 MySQL을 시작하고, `docker compose ps`에서 상태를 확인할 수 있습니다.
