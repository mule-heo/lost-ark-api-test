export type Categories =
  | "news"
  | "characters"
  | "armories"
  | "auctions"
  | "guilds"
  | "markets"
  | "gameContents";

export interface Endpoint {
  method: "GET" | "POST";
  name: string;
  endpoint: string;
  description: string;
  parameters: Parameter[];
}
export interface Parameter {
  name: string;
  description: string;
  required?: boolean;
  type: "string" | "number" | null;
  isQueryParameter?: boolean;
  availableValues?: (string | number)[];
}

export type ApiMetadata = Pick<Endpoint, "method" | "endpoint" | "description">;

// News 카테고리 관련 정보
const news: Endpoint[] = [
  {
    method: "GET",
    name: "notices",
    endpoint: "/news/notices",
    description: "공지 목록을 반환합니다.",
    parameters: [
      {
        name: "searchText",
        description: "제목 검색 키워드",
        required: false,
        type: "string",
        isQueryParameter: true,
      },
      {
        name: "type",
        description: "공지 카테고리",
        required: false,
        type: "string",
        isQueryParameter: true,
        availableValues: ["공지", "점검", "상점", "이벤트"],
      },
    ],
  },
  {
    method: "GET",
    name: "events",
    endpoint: "/news/events",
    description: "진행중인 이벤트 목록을 반환합니다.",
    parameters: [],
  },
];

// Characters 카테고리 관련 정보
const characters: Endpoint[] = [
  {
    method: "GET",
    name: "siblings",
    endpoint: "/characters/{characterName}/siblings",
    description: "계정의 모든 캐릭터 프로필을 반환합니다.",
    parameters: [
      {
        name: "characterName",
        description: "캐릭터명",
        required: true,
        type: "string",
        isQueryParameter: false,
      },
    ],
  },
];

// Armories 카테고리 관련 정보
// TODO: "캐릭터명에 해당하는-" 번역이 어색하고 직관적이지 않으므로 자연스럽게 수정할 것
const armories: Endpoint[] = [
  {
    method: "GET",
    name: "summary",
    endpoint: "/armories/characters/{characterName}",
    description: "캐릭터명에 해당하는 프로필 정보의 개요를 반환합니다.",
    parameters: [
      {
        name: "characterName",
        description: "캐릭터명",
        required: true,
        type: "string",
        isQueryParameter: false,
      },
      {
        name: "filters",
        description:
          "데이터 필터링 (예시: profiles+equipment+avatars+combat-skills+engravings+cards+gems+colosseums+collectibles)",
        required: false,
        type: "string",
        isQueryParameter: true,
      },
    ],
  },
  {
    method: "GET",
    name: "profiles",
    endpoint: "/armories/characters/{characterName}/profiles",
    description: "캐릭터명에 해당하는 기본 능력치의 개요를 반환합니다.",
    parameters: [
      {
        name: "characterName",
        description: "캐릭터명",
        required: true,
        type: "string",
        isQueryParameter: false,
      },
    ],
  },
  {
    method: "GET",
    name: "equipment",
    endpoint: "/armories/characters/{characterName}/equipment",
    description: "캐릭터명에 해당하는 장비의 개요를 반환합니다.",
    parameters: [
      {
        name: "characterName",
        description: "캐릭터명",
        required: true,
        type: "string",
        isQueryParameter: false,
      },
    ],
  },
  {
    method: "GET",
    name: "avatars",
    endpoint: "/armories/characters/{characterName}/avatars",
    description: "캐릭터명에 해당하는 아바타의 개요를 반환합니다.",
    parameters: [
      {
        name: "characterName",
        description: "캐릭터명",
        required: true,
        type: "string",
        isQueryParameter: false,
      },
    ],
  },
  {
    method: "GET",
    name: "combat-skills",
    endpoint: "/armories/characters/{characterName}/combat-skills",
    description: "캐릭터명에 해당하는 전투 스킬의 개요를 반환합니다.",
    parameters: [
      {
        name: "characterName",
        description: "캐릭터명",
        required: true,
        type: "string",
        isQueryParameter: false,
      },
    ],
  },
  {
    method: "GET",
    name: "engravings",
    endpoint: "/armories/characters/{characterName}/engravings",
    description: "캐릭터명에 해당하는 각인의 개요를 반환합니다.",
    parameters: [
      {
        name: "characterName",
        description: "캐릭터명",
        required: true,
        type: "string",
        isQueryParameter: false,
      },
    ],
  },
  {
    method: "GET",
    name: "cards",
    endpoint: "/armories/characters/{characterName}/cards",
    description: "캐릭터명에 해당하는 카드의 개요를 반환합니다.",
    parameters: [
      {
        name: "characterName",
        description: "캐릭터명",
        required: true,
        type: "string",
        isQueryParameter: false,
      },
    ],
  },
  {
    method: "GET",
    name: "gems",
    endpoint: "/armories/characters/{characterName}/gems",
    description: "캐릭터명에 해당하는 보석의 개요를 반환합니다.",
    parameters: [
      {
        name: "characterName",
        description: "캐릭터명",
        required: true,
        type: "string",
        isQueryParameter: false,
      },
    ],
  },
  {
    method: "GET",
    name: "colosseums",
    endpoint: "/armories/characters/{characterName}/colosseums",
    description: "캐릭터명에 해당하는 증명의 전장의 개요를 반환합니다.",
    parameters: [
      {
        name: "characterName",
        description: "캐릭터명",
        required: true,
        type: "string",
        isQueryParameter: false,
      },
    ],
  },
  {
    method: "GET",
    name: "collectibles",
    endpoint: "/armories/characters/{characterName}/collectibles",
    description: "캐릭터명에 해당하는 수집품 콘텐츠의 개요를 반환합니다.",
    parameters: [
      {
        name: "characterName",
        description: "캐릭터명",
        required: true,
        type: "string",
        isQueryParameter: false,
      },
    ],
  },
];

// Auctions 카테고리 관련 정보
// TODO: POST 요청 파라미터 관리할 방법 고안하기(사전에 타입을 정의할 수 없음)
const auctions: Endpoint[] = [
  {
    method: "GET",
    name: "options",
    endpoint: "/auctions/options",
    description: "경매장 검색 옵션을 반환합니다.",
    parameters: [],
  },
  {
    method: "POST",
    name: "auctionItems",
    endpoint: "/markets/items",
    description: "검색 옵션에 해당하는 경매장 아이템을 반환합니다.",
    parameters: [],
  },
];

// Guilds 카테고리 관련 정보
const guilds: Endpoint[] = [
  {
    method: "GET",
    name: "rankings",
    endpoint: "/guilds/rankings",
    description: "길드 랭킹 목록을 반환합니다.",
    parameters: [
      {
        name: "serverName",
        description: "서버명",
        required: true,
        type: "string",
        isQueryParameter: true,
      },
    ],
  },
];

// Markets 카테고리 관련 정보
// TODO: POST 요청 파라미터 관리할 방법 고안하기(사전에 타입을 정의할 수 없음)
const markets: Endpoint[] = [
  {
    method: "GET",
    name: "options",
    endpoint: "/markets/options",
    description: "거래소 검색 옵션을 반환합니다.",
    parameters: [],
  },
  {
    method: "GET",
    name: "itemId",
    endpoint: "/markets/items/{itemId}",
    description: "아이템 ID에 해당하는 거래소 아이템을 반환합니다.",
    parameters: [
      {
        name: "itemId",
        description: "아이템 ID",
        required: true,
        type: "number",
        isQueryParameter: false,
      },
    ],
  },
  {
    method: "POST",
    name: "marketItems",
    endpoint: "/markets/items",
    description: "검색 옵션에 해당하는 거래소 아이템을 반환합니다.",
    parameters: [],
  },
];

// GameContents 카테고리 관련 정보
const gameContents: Endpoint[] = [
  {
    method: "GET",
    name: "challenge-abyss-dungeons",
    endpoint: "/gamecontents/challenge-abyss-dungeons",
    description: "이번주 도전 어비스 던전 목록을 반환합니다.",
    parameters: [],
  },
  {
    method: "GET",
    name: "challenge-guardian-raids",
    endpoint: "/gamecontents/challenge-guardian-raids",
    description: "이번주 도전 가디언 토벌 목록을 반환합니다.",
    parameters: [],
  },
  {
    method: "GET",
    name: "calendar",
    endpoint: "/gamecontents/calendar",
    description: "이번주 캘린더 목록을 반환합니다.",
    parameters: [],
  },
];

export const endpoints = {
  news,
  characters,
  armories,
  auctions,
  guilds,
  markets,
  gameContents,
};
