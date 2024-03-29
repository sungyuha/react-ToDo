# react-ToDo

2022.12.05 ~ 2022.12.20

### **개요**

- 리액트를 활용한 투두(할일) 프로젝트

## 정보

- React 기반 개인 프로젝트

## 기술 스택

**Front-End**

- HTML, CSS, JavaScript(ES6), React

**Tools**

- Github

### 담당한 부분

- 맡은 업무
    - 프론트엔드
- 전체 아이템들 보여주기
    - useState 사용해서 전체 아이템 리스트 구현
- 아이템 추가
    - 사용자가 입력 시 `useState` 상태 값이 공백, `onChange`로 데이터 넘겨줘서 text 작성하면 데이터 추가 구현
    - `trim`으로 앞 뒤 여백 삭제 후 등록 구현
- 아이템 삭제
    - event가 발생 시 `filter`로 특정 고유 값 id 삭제 구현
- 아이템 필터링
    - `filter` 사용해서 전체, 진행 중, 완료 필터링 기능 구현
- 다크 모드
    -  다크모드라면 `useEffect`로 변수에 저장해서 기억