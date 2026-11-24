# 백엔드

좌석 조회, 선점과 만료, 예약 확정에 필요한 API와 도메인 코드를 관리합니다. 기능 구현과 함께 동일 좌석에 여러 요청이 들어와도 예매 상태가 일관적인지 검증합니다.

Java 21로 실행합니다. Windows PowerShell에서 `.\mvnw.cmd spring-boot:run`, macOS/Linux에서 `./mvnw spring-boot:run`을 실행하세요. [상태 확인 API](http://localhost:8080/actuator/health)에서 `UP`을 확인할 수 있습니다.

테스트는 Windows에서 `.\mvnw.cmd test`, macOS/Linux에서 `./mvnw test`를 실행합니다.
