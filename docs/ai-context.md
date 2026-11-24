# AI 작업 환경

서비스에 적용하는 Brain 커밋은 `.brain` 서브모듈로 고정합니다. 처음 복제했거나 브랜치를 전환했다면 아래 명령을 서비스 루트에서 실행하세요. 두 저장소의 읽기 권한과 Node.js 22 이상이 필요합니다.

```sh
git submodule update --init -- .brain
node .brain/scripts/sync.mjs
node .brain/scripts/sync.mjs --check
```

공통 규칙 개선은 Brain에서 먼저 PR로 검토합니다. 서비스에 적용할 때 검증할 커밋을 선택하고, 생성 지침과 서브모듈 변경을 같은 PR에서 검토합니다. 이전 버전이 필요하면 해당 서비스 PR을 되돌리고 서브모듈을 다시 초기화합니다. 생성 명령과 도구별 사용법은 Brain의 `adapters/README.md`에서 확인하세요.
