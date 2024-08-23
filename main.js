// main.js

// 변수 정의
const correctPassword = '0507'; // 여기에 실제 비밀번호를 입력하세요
const loginContainer = document.getElementById('login-container');
const imageContainer = document.getElementById('image-container');
const passwordInput = document.getElementById('password-input');
const submitPasswordButton = document.getElementById('submit-password-button');

let currentIndex = 0; // 현재 이미지 인덱스
const photos = [        // 이미지 파일 경로 배열
    'photo1.png',   // 첫 번째 이미지
];

// 비밀번호 제출 버튼 클릭 시 호출되는 함수
submitPasswordButton.addEventListener('click', () => {
    const enteredPassword = passwordInput.value;
    if (enteredPassword === correctPassword) {
        // 비밀번호가 맞으면 로그인 컨테이너를 숨기고 이미지 컨테이너를 보이게 합니다
        loginContainer.classList.add('hidden');
        imageContainer.classList.remove('hidden');
        // 초기 이미지를 photo1로 설정
        document.getElementById('photo-display').src = photos[0];
        currentIndex = 0; // 이미지 인덱스 초기화
    } else {
        alert('잘못된 비밀번호입니다.');
    }
});
