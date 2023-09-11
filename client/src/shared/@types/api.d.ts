// News

type NoticeType = "공지" | "점검" | "상점" | "이벤트";

/** 파라미터 생략 시 필터링없이 전체 검색됩니다. */
interface NoticesReq {
  searchText?: string;
  type?: NoticeType;
}

interface Notice {
  Title: string;
  Date: string; // ISO 형식으로 표시된 데이터
  Link: string;
  Type: NoticeType;
}

interface Event {
  Title: string;
  Thumbnail: string;
  Link: string;
  StartDate: string; // ISO 형식으로 표시된 데이터
  EndDate: string; // ISO 형식으로 표시된 데이터
  RewardDate: string | null; // 이벤트 종료 이후 보상 수령 가능 기간
}
