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
