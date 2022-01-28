const commonCode = {
  A: {
    A01: "관리자",
    A02: "학교 관리자",
    A03: "선생님",
    A04: "학생",
  },
  B: {
    B01: "재학",
    B02: "전학",
    B03: "중퇴",
    B04: "졸업",
  },
  C: {
    C01: "미출석",
    C02: "출석",
    C03: "결석",
    C04: "조퇴",
  },
  D: {
    D01: "초등학교",
    D02: "중학교",
    D03: "고등학교",
    D04: "대학교",
  },
  E: {
    E01: "1학년",
    E02: "2학년",
    E03: "3학년",
    E04: "4학년",
    E05: "5학년",
    E06: "6학년",
  },
  F: {
    F01: "1반",
    F02: "2반",
    F03: "3반",
    F04: "4반",
    F05: "5반",
    F06: "6반",
    F07: "7반",
    F08: "8반",
    F09: "9반",
    F10: "10반",
    F11: "11반",
    F12: "12반",
    F13: "13반",
    F14: "14반",
    F15: "15반",
  },
  G: {
    G01: {
      G0100: "국어",
      G0101: "화법과 작문",
      G0102: "독서",
      G0103: "언어와 매체",
      G0104: "문학",
      G0105: "실용 국어",
      G0106: "심화 국어",
      G0107: "고전 읽기",
    },
    G02: {
      G0200: "수학",
      G0201: "수학1",
      G0202: "수학2",
      G0203: "미적분",
      G0204: "확률과 통계",
      G0205: "실용 수학",
      G0206: "기하",
      G0207: "경제 수학",
      G0208: "수학과제 탐구",
    },
    G03: {
      G0300: "영어",
      G0301: "영어 회화",
      G0302: "영어1",
      G0303: "영어2",
      G0304: "영어 독해와 작문",
      G0305: "실용 영어",
      G0306: "영어권 문화",
      G0307: "진로 영어",
      G0308: "영미 문학 읽기",
    },
    G04: {
      G0400: "한국사",
    },
    G05: {
      G0500: "사회",
      G0501: "한국지리",
      G0502: "세계지리",
      G0503: "세계사",
      G0504: "동아시아",
      G0505: "경제",
      G0506: "정치와 법",
      G0507: "사회 문화",
      G0508: "생활과 윤리",
      G0509: "윤리와 사상",
      G0510: "여행지리",
      G0511: "사회문제 탐구",
      G0512: "고전과 윤리",
    },
    G06: {
      G0600: "과학",
      G0601: "물리학 1",
      G0602: "화학 1",
      G0603: "생명과학 1",
      G0604: "지구과학 1",
      G0605: "물리학 2",
      G0606: "화학 2",
      G0607: "생명과학 2",
      G0608: "지구과학 2",
      G0609: "과학사",
      G0610: "생활과 과학",
      G0611: "융합 과학",
    },
    G07: {
      G0700: "체육",
      G0701: "운동과 건강",
      G0702: "스포츠 생활",
      G0703: "체육 탐구",
    },
    G08: {
      G0801: "음악",
      G0802: "미술",
      G0803: "연극",
      G0804: "음악 연주",
      G0805: "음악 감상과 비평",
      G0806: "미술 창작",
      G0807: "미술 감상과 비평",
    },
    G09: {
      G0900: "기가",
      G0901: "정보",
      G0902: "농업 생명 과학",
      G0903: "공학 일반",
      G0904: "창의 경영",
      G0905: "해양 문화와 기술",
      G0906: "가정과학",
      G0907: "지식 재산 일반",
    },
    G10: {
      G1001: "독일어 1",
      G1002: "일본어 1",
      G1003: "프랑스어 1",
      G1004: "러시아어 1",
      G1005: "스페인어 1",
      G1006: "아랍어 1",
      G1007: "중국어 1",
      G1008: "베트남어 1",
      G1009: "독일어 2",
      G1010: "일본어 2",
      G1011: "프랑스어 2",
      G1012: "러시아어 2",
      G1013: "스페인어 2",
      G1014: "아랍어 2",
      G1015: "중국어 2",
      G1016: "베트남어 2",
    },
    G11: {
      G1100: "한문",
      G1101: "한문 1",
      G1102: "한문 2",
    },
    G12: {
      G1201: "철학",
      G1202: "논리학",
      G1203: "심리학",
      G1204: "교육학",
      G1205: "종교학",
      G1206: "진로와 직업",
      G1207: "보건",
      G1208: "환경",
      G1209: "실용 경제",
      G1210: "논술",
    },
  },
  H: {
    H01: "월요일",
    H02: "화요일",
    H03: "수요일",
    H04: "목요일",
    H05: "금요일",
  },
  I: {
    I00: "출석 가능 시간",
    I01: "1교시",
    I02: "2교시",
    I03: "3교시",
    I04: "4교시",
    I05: "5교시",
    I06: "6교시",
    I07: "7교시",
    I08: "8교시",
    I09: "9교시",
  },
  J: {
    J01: "입학식",
    J02: "졸업식",
    J03: "방학식",
    J04: "개학식",
    J05: "개교기념일",
    J06: "운동회",
    J07: "수학여행",
    J08: "수련회",
    J09: "종업식",
    J10: {
      J1001: "1학기 중간고사",
      J1002: "1학기 기말고사",
      J1003: "2학기 중간고사",
      J1004: "2학기 기말고사",
      J1005: "전국연합학력평가",
      J1006: "대학수학능력시험",
    },
    J11: "기타",
  },
  K: {
    K01: "전체",
    K02: "학년",
    K03: "반",
  },
  L: {
    L01: "고민",
    L02: "유머",
    L03: "자유",
    L04: "정보",
    L05: "질문",
    L06: "기타",
  },
  M: {
    M01: "오늘의 수업",
    M02: "학사일정",
    M03: "체크리스트",
    M04: "메모",
    M05: "성적추이",
    M06: "오늘의 공부시간",
    M07: "시간표",
  },
  N: {
    N01: "승인",
    N02: "미승인",
  },
  O: {
    O01: "1학기",
    O02: "2학기",
  },
};

export default commonCode;
