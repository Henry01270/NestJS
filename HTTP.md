# HTTP

- HTTP
    클라이언트가 요청을 보내면 서버가 응답하는 형태
    요청과 응답의 구조화된 데이터를 보낼 때 일반적으로
    JSON 구조를  사용

- JSON
    JS의 객체, 여타 언어의 Map과 구조가 비슷하다.
    Key / Value 짝으로 이루어져 있고 콜론을 기준으로 나뉜다.
    Key는 String만 허용.

- HTTP 요청의 구성요소
    URL: 요청을 보내는 주소
    Method: 요청의 종류/타입 (GET/POST/PUT/PATCH/DELETE)
    Header: 요청의 메타데이타
    Body: 요청에 관련된 데이터


- URL의 구성 요소
https://blog.codefactory.ai/javascript?page=1

https : Scheme; HTTP 또는 HTTPS

blog.codefactory.ai : Host; 흔히 Domain이라고도 부르는 영역

javascript : Path; 요청하는 리소스

page=1 : Query Parameter; 요청하는 리소스에 대한 추가정보 
                          (일반적으로 필터링에 많이 사용됨)


# 요청

- Method
1. 같은 URL에 여러개의 Method가 존재할 수 있다.
    GET : https://blog.codefactory.ai/javascript
    POST : https://blog.codefactory.ai/javascript
    둘은 같은 URL에 요청하지만 완전 다른 요청이다.

2. GET 요청은 데이터를 조회할 때 사용한다.
    GET : https://blog.codefactory.ai/javascript
    javascript 관련 데이터를 사져오는 요청이라고 유추할 수 있음

3. POST 요청은 데이터를 생성할 때 사용한다.
    POST : https://blog.codefactory.ai/javascript
    javascript 관련 데이터를 생성하는 요청이라고 유추할 수 있음

4. PUT 요청은 데이터를 업데이트 또는 생성할 때 사용한다.
    PUT : https://blog.codefactory.ai/javascript
    javascript 관련 데이터를 업데이트 또는 생성하는 요청이라고 
    유추할 수 있다. (데이터가 존재X시 생성)

5. PATCH 요청은 데이터를 업데이트할 떄 사용한다.
    PATCH : https://blog.codefactory.ai/javascript
    관련 데이터를 업데이트하는 요청.
    (데이터가 존재X시 err)

6. DELETE 요청은 데이터를 삭제할 때 사용한다.
    DELETE : https://blog.codefactory.ai/javascript
    관련 데이터를 삭제하는 요청

7. 이외에도 많은 Method가 존재하지만 잘 사용X
    HEAD / CONNECT / OPTIONS 등

8. Method는 정해진 목적대로 사용해야하지만 개발자가 마음대로 기능을 정의할 수 있기 때문에 강제되는 부분은 아니다.
    DELETE 메소드를 실행하면 데이터가 생성되도록 코드를 정의할 수 
    있다.
    굉장히 큰 혼란을 야기할 수 있으니 절대 금지.



- Header란?
    메타데이터를 정의한다.
    메타데이터는 데이터에 대한 데이터 즉, 요청에 대한 정보를 정의.
    Cookie, 인증 토큰, 요청의 바이트 길이, 요청/응답을 보낸 Host,
    요청할 때 사용된 클라이언트 타입과 버전등...

- Body란?
    Body는 요청에 대한 로직 수행에 직접적으로 필요한 정보를 정의.
    만약에 새로운 블로그 글을 생성하는 POST 요청을 한다면, 이 글을
    생성할 때 필요한 제목, 내용등의 데이터가 Body에 입력됨.
    일반적으로 JSON 구조를 사용.



# 응답

- HTTP 응답의 구성 요소
    Status Code: 응답의 종류 (number)
        Status Code는 응답의 상태를 분류.
        100~199 - Informational Response (정보 응답)
        200~299 - Successful Response (성공 응답)
        300~399 - Redirection Message (리다이렉션 메세지)
        400~499 - Client Error Response (클라이언트 에러 응답)
        500~599 - Server Error Response (서버 에러 응답)
    Header: 응답의 메타데이터 (Metadata)
    Body: 응답에 관련된 데이터 (json)

- 주요 Status Code 정리
    200 (OK) - 문제없이 요청이 잘 실행됨
    201 (Created) - 문제없이 데이터 생성이 잘 됨
    301 (Moved Permanently) - 리소스가 영구적으로 이동됨
    400 (Bad Request) - 요청이 잘못됨 (필수 값 부족 등)
    401 (Unauthorized) - 인증 토큰/키가 잘못됨
    403 (Forbidden) - 접근 불가능한 리소스. 401과 달리 인증은 됨.
    404 (Not Found) - 존재하지 않는 리소스.
    405 (Method Not Allowed) - 허가되지 않은 요청 Method
    500 (Internal Server Error) - 알 수 없는 서버 에러