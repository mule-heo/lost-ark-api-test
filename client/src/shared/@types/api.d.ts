// TODO: null 가능 여부 확인해서 타입 변경하기

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

// Characters

interface SiblingsReq {
  characterName: string;
}

interface CharacterInfo {
  ServerName: string;
  CharacterName: string;
  CharacterLevel: number;
  CharacterClassName: string;
  ItemAvgLevel: string; // string 주의
  ItemMaxLevel: string; // string 주의
}

// Armories

interface ArmoriesReq {
  characterName: string;
  filters: string; // 조회대상+조회대상 형태 string으로 표현
}

interface Armory {
  ArmoryProfile: ArmoryProfile;
  ArmoryEquipment: ArmoryEquipment[];
  ArmoryAvatars: ArmoryAvatar[];
  ArmorySkills: ArmorySkill[];
  ArmoryEngraving: ArmoryEngraving;
  ArmoryCard: ArmoryCard;
  ArmoryGem: ArmoryGem;
}
interface ArmoryProfile {
  CharacterImage: string;
  ExpeditionLevel: number;
  PvpGradeName: string;
  TownLevel: number;
  TownName: string | null;
  Title: string | null;
  GuildMemberGrade: string | null;
  GuildName: string | null;
  UsingSkillPoint: number;
  TotalSkillPoint: number;
  Stats: Stat[];
  Tendencies: Tendency[];
  ServerName: string;
  CharacterName: string;
  CharacterLevel: number;
  CharacterClassName: string;
  ItemAvgLevel: string;
  ItemMaxLevel: string;
}

interface Stat {
  Type: string; // 리터럴
  Value: string; // 타입 주의
  Tooltip: string[];
}

interface Tendency {
  Type: string; // 리터럴
  Point: number;
  MaxPoint: number;
}
interface ArmoryEquipment {
  Type: string; // 리터럴 타입 적용 가능
  Name: string;
  Icon: string;
  Grade: string; // 리터럴 타입 적용 가능
  Tooltip: string; // HTML 형식
}
interface ArmoryAvatar {
  Type: string; // 리터럴 타입 적용 가능
  Name: string;
  Icon: string;
  Grade: string; // 리터럴 타입 적용 가능
  IsSet: boolean;
  IsInner: boolean;
  Tooltip: string; // HTML 형식
}
interface ArmorySkill {
  Name: string;
  Icon: string;
  Level: number;
  Type: string;
  IsAwakening: boolean; // 각성기 여부로 추정
  Tripods: Tripod[];
  Rune: Rune;
  Tooltip: string;
}

interface Tripod {
  Tier: number;
  Slot: number;
  Name: string;
  Icon: string;
  Level: number;
  isSelected: boolean;
  Tooltip: string;
}

interface Rune {
  Name: string;
  Icon: string;
  Grade: string;
  Tooltip: string;
}

// 각인

interface ArmoryEngraving {
  // 장착중인 각인
  Engravings: Engraving[];
  Effects: EngravingEffect[];
}

interface Engraving {
  Slot: number;
  Name: string;
  Icon: string;
  Tooltip: string;
}

interface EngravingEffect {
  Name: string;
  Description: string;
}

// 카드

interface ArmoryCard {
  Cards: Card[];
  Effects: CardEffect[];
}

interface Card {
  Slot: number;
  Name: string;
  Icon: string;
  Awakecount: number;
  AwakeTotal: number;
  Grade: string;
  Tooltip: string;
}

interface CardEffect {
  Index: number;
  CardSlots: number[];
  Items: EngravingEffect[];
}

// 보석

interface ArmoryGem {
  Gems: Gem[];
  Effects: GemEffect[];
}

interface Gem {
  Slot: number;
  Name: string;
  Icon: string;
  Level: number;
  Grade: string;
  Tooltip: string;
}

interface GemEffect {
  GemSlot: number;
  Name: string;
  Description: string;
  Icon: string;
  Tooltip: string;
}

// 증명의 전장

interface ColosseumInfo {
  Rank: number;
  PreRank: number;
  Exp: number;
  Colosseums: Colosseum[];
}

interface Colosseum {
  SeasonName: string;
  Competitive: AggregationTeamDeathMatchRank | null;
  TeamDeathmatch: Aggregation | null;
  Deathmatch: Aggregation | null;
  TeamElimination: AggregationElimination | null;
  CoOpBattle: Aggregation | null;
}

interface Aggregation {
  PlayCount: number;
  VictoryCount: number;
  LoseCount: number;
  TieCount: number;
  KillCount: number;
  AceCount: number;
  DeathCount: number;
}

interface AggregationTeamDeathMatchRank extends Aggregation {
  Rank: number;
  RankName: string;
  RankIcon: string;
  RankLastMmr: number;
}

interface AggregationElimination extends Aggregation {
  FirstWinCount: number;
  SecondWinCount: number;
  ThirdWinCount: number;
  FirstPlayCount: number;
  SecondPlayCount: number;
  ThirdPlayCount: number;
  AllKillCount: number;
}

// 수집

interface Collectible {
  Type: string;
  Icon: string;
  Point: number;
  MaxPoint: number;
  CollectiblePoints: CollectiblePoint[];
}

interface CollectiblePoint {
  PointName: string;
  Point: number;
  MaxPoint: number;
}

// Auctions

interface Options {
  MaxItemLevel: number;
  ItemGradeQualities: number[]; // 10 이상 90 이하 10 단위 증가
  SkillOptions: SkillOption[]; // 이 부분이 응답의 대부분을 차지함(2만 줄)
  EtcOptions: EtcOption[];
  Categories: Category[];
  // 고정 옵션이므로 튜플 타입으로 지정
  // TODO: 나중에 다른 인터페이스와 호환될 수 있게 타입을 따로 지정하는 방법 모색
  ItemGrades: [
    "일반",
    "고급",
    "희귀",
    "영웅",
    "전설",
    "유물",
    "고대",
    "에스더",
  ];
  ItemTiers: [1, 2, 3];
  Classes: [
    "버서커",
    "디스트로이어",
    "워로드",
    "홀리나이트",
    "슬레이어",
    "아르카나",
    "서머너",
    "바드",
    "소서리스",
    "배틀마스터",
    "인파이터",
    "기공사",
    "창술사",
    "스트라이커",
    "블레이드",
    "데모닉",
    "리퍼",
    "소울이터",
    "호크아이",
    "데빌헌터",
    "블래스터",
    "스카우터",
    "건슬링어",
    "도화가",
    "기상술사",
  ];
}

interface SkillOption {
  Value: number;
  Class: string;
  Text: string;
  IsSkillGroup: boolean; // 아이덴티티 기술 여부로 보임
  Tripods: Tripod[];
}

interface Tripod {
  Value: number;
  Text: string;
  IsGem: boolean;
}

interface EtcOption {
  Value: number;
  Text: string;
  EtcSubs: EtcSub[];
}

interface EtcSub {
  Value: number;
  Text: string;
  Class: string; // 빈 문자열이면 공용, 값이 있으면 특정 직업 전용
}

interface Category {
  Subs: CategoryItem[]; // 카테고리의 하위 분류
  Code: number;
  CodeName: string;
}

interface CategoryItem {
  Code: number;
  CodeName: string;
}

type Sort =
  | "BIDSTART_PRICE"
  | "BUY_PRICE"
  | "EXPIREDATE"
  | "ITEM_GRADE"
  | "ITEM_LEVEL"
  | "ITEM_QUALITY";

type SortCondition = "ASC" | "DESC";

interface SearchDetailOption {
  FirstOption: number | null;
  SecondOption: number | null;
  MinValue: number | null;
  MaxValue: number | null;
}
interface ItemsReq {
  requestAuctionItems: {
    ItemLevelMin: number;
    ItemLevelMax: number;
    ItemGradeQuality: number | null;
    SkillOptions: SearchDetailOption[];
    EtcOptions: SearchDetailOption[];
    Sort: Sort;
    CategoryCode: number;
    CharacterClass: string;
    ItemTier: 1 | 2 | 3 | null;
    ItemGrade: string;
    ItemName: string;
    PageNo: number;
    SortCondition: SortCondition;
  };
}

interface Auction {
  PageNo: number;
  PageSize: number;
  TotalCount: number;
  Items: AuctionItem[];
}

interface AuctionItem {
  Name: string;
  Grade: string;
  Tier: number;
  Level: number | null;
  Icon: string;
  GradeQuality: number | null;
  AuctionInfo: AuctionInfo;
  Options: AuctionItemOption[];
}

interface AuctionInfo {
  StartPrice: number;
  BuyPrice: number | null;
  BidPrice: number;
  EndDate: string;
  BidCount: number;
  BidStartPrice: number;
  IsCompetitive: boolean;
  TradeAllowCount: number;
}

interface AuctionItemOption {
  Type: AuctionItemOptionType;
  OptionName: string;
  OptionNameTripod: string;
  Value: number;
  IsPenalty: boolean;
  ClassName: string;
}

type AuctionItemOptionType =
  | "None"
  | "SKILL"
  | "STAT"
  | "ABILITY_ENGRAVE"
  | "BRACELET_SPECIAL_EFFECTS"
  | "GEM_SKILL_COOLDOWN_REDUCTION"
  | "GEM_SKILL_COOLDOWN_REDUCTION_IDENTITY"
  | "GEM_SKILL_DAMAGE"
  | "GEM_SKILL_DAMAGE_IDENTITY"
  | "BRACELET_RANDOM_SLOT";

// Guilds

type ServerName =
  | "루페온"
  | "실리안"
  | "아만"
  | "카마인"
  | "카제로스"
  | "아브렐슈드"
  | "카단"
  | "니나브";

interface guildRankingsReq {
  serverName: ServerName;
}

// body 자체가 아래 인터페이스를 요소로 하는 배열

interface GuildRanking {
  Rank: number;
  GuildName: string;
  GuildMessage: string;
  MasterName: string;
  Rating: number;
  MemberCount: number;
  MaxMemberCount: number;
  UpdatedDated: string;
}
