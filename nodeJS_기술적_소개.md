# NestJS

- Compiled 언어
프로그램을 실행하기 전에 기계어로 전부 변환을 한 다음 실행
실행과정을 빠르지만 매번 전체 컴파일해야한다.

- Interpreted 언어
프로그램을 실행하는 도중에 각 코드를 줄별로 변환해서 실행
실행이 비교적 느리지만 매번 전체 컴파일할 필요가 없다.

- Just In Time Compilation (JIT)
JIT은 Compile 방식과 Interpret 방식의 장점을 모아둔 형태이다.
Chrome의 V8엔진 또한 JIT Compilation을 사용.

- Byte Code vs Machine Code
    Byte Code: 
        Cpu가 바로 읽을 수 있는 코드가 아니다.
        중간에 가상환경이나 또다른 프로그램(Interpreter)이 실행을  중재한다.
        High Level 코드이다.
        실행이 상대적으로 느리다.
        컴파일이 빠르다.

    Machine Code:
        Cpu가 바로 읽을 수 있는 코드이다.
        Low Level 코드이다.
        실행이 상대적으로 빠르다.
        컴파일이 느리다.




blocking 요청
    - 네트워크, 서버 요청등 시간이 오래걸리는 요청

non-blocking 요청
    - 시간이 오래걸리지 않는 단순한 요청

nodeJS 싱글 쓰레드 모델
    non-blocking, blocking 요청을 Event Queue에 쌓아두고 
    씽글 쓰레드인 Event Loop이 요청을 하나씩 처리한다.
    만약 Event Loop에서 처리할 요청이 non-blocking이면, 
    Event Loop에서 빠르게 빼서 client에 응답한다.

    하지만, blocking 요청일 경우, Event Loop에서 
    워커 쓰레드중 남는 쓰레드에 넘긴다.