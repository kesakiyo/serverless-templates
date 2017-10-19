# aws-nodejs
aws-nodejs 템플릿 입니다.

## 초기 설정

> npm install을 해야만 정상적으로 서비스를 개발하거나 디플로이 할 수 있습니다. 만약 serverless가 peerDependency가 아니라면 직접 설치를 해 줘야 스크립트를 이용할 수 있습니다

```javascript
npm install
// npm install --save-dev serverless
```

## 사용 방법

```npm start```: local에서 테스트 할 수 있는 서버를 실행합니다. 기본적으로 포트는 3000번입니다.

```npm run deploy```: service를 aws에 디플로이합니다. 기본적으로 진행 과정을 전체를 보여주도록 설정되어 있습니다.
