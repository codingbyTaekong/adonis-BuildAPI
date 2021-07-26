커피페스타 adonis api 서버 구축


* 
.gitignore을 보면 알겠지만 github에서 fork & clone 할 때
.env / build / node_ modules / tmp는 빠져있습니다.

따라서 로컬에서 작동하기 위해서는

npm install을 하고 database를 사용하기 위해서는 

tmp 폴더를 추가적으로 생성 후 node ace migration:run 명령어를 통해 table을 생성 후 개발을 진행해야 합니다.

또한 .env 파일은 

github이 아닌 메신저를 통해 주고 받을 수 있도록 합니다.

