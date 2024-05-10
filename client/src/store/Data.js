const postList = [
  {
    "no": 1,
    "title": "[공지사항] 썬라이즈팀 기본 수칙",
    "content": "기본수칙 내용입니다.",
    "createDate": "2023-10-25",
    "readCount": 36
  },
  {
    "no": 2,
    "title": "[공지사항] 회비관련 안내",
    "content": "회비관련 안내입니다.",
    "createDate": "2024-1-25",
    "readCount": 77
  },
  {
    "no": 3,
    "title": "[공지사항] 구장 안내",
    "content": "구장 안내입니다.",
    "createDate": "2023-8-25",
    "readCount": 14
  },
  {
    "no": 4,
    "title": "[공지사항] 정규멤버 안내",
    "content": "정규멤버 안내입니다.",
    "createDate": "2023-10-25",
    "readCount": 3
  },
];

const getPostByNo = no => {
  const array = postList.filter( e => e.no === no);
  if (array.length === 1) {
    return array[0];
  }
  return null;
}

export {
  postList,
  getPostByNo
};