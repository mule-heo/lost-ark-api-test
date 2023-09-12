import { apiInstance } from "./base";

type Key<T> = { [K in keyof T]: T[K] };

// TODO: 유틸 함수 별도 파일로 분리하기

const addQueryParameters = (
  url: string,
  parameters: { [key: string]: string | number },
) => {
  let count = 0;
  for (const key of Object.keys(parameters)) {
    if (count === 0) {
      url += `?${key}=${parameters[key]}`;
    } else {
      url += `&${key}=${parameters[key]}`;
    }
    count++;
  }
  return url;
};

// News 카테고리

export const getNotices = async (parameters: Key<NoticesReq>) => {
  const url = addQueryParameters("/news/notices", parameters);
  return await apiInstance<Notice[]>(url)
    .then(res => res.data)
    .catch(err => console.error(err));
};

export const getEvents = () =>
  apiInstance<LoaEvent[]>("/news/events")
    .then(res => res.data)
    .catch(err => console.error(err));

// Characters 카테고리

export const getCharacters = (characterName: string) =>
  apiInstance<CharacterInfo[]>(`/characters/${characterName}/siblings`)
    .then(res => res.data)
    .catch(err => console.error(err));

// Armories 카테고리

// url 필터 적용하기
export const getCharacterOverall = (characterName: string, filters?: string) =>
  apiInstance<Armory>(
    `/armories/characters/${characterName}${
      filters ? "?filters=" + filters : ""
    }`,
  )
    .then(res => res.data)
    .catch(err => console.error(err));

export const getCharacterProfile = (characterName: string) =>
  apiInstance<ArmoryProfile>(`/armories/characters/${characterName}/profiles`)
    .then(res => res.data)
    .catch(err => console.error(err));

export const getCharacterEquipment = (characterName: string) =>
  apiInstance<ArmoryEquipment[]>(
    `/armories/characters/${characterName}/equipment`,
  )
    .then(res => res.data)
    .catch(err => console.error(err));

export const getCharacterAvatars = (characterName: string) =>
  apiInstance<ArmoryAvatar[]>(`/armories/characters/${characterName}/avatars`)
    .then(res => res.data)
    .catch(err => console.error(err));

export const getCharacterSkills = (characterName: string) =>
  apiInstance<ArmorySkill[]>(
    `/armories/characters/${characterName}/combat-skills`,
  )
    .then(res => res.data)
    .catch(err => console.error(err));

export const getCharacterEngravings = (characterName: string) =>
  apiInstance<ArmoryEngraving[]>(
    `/armories/characters/${characterName}/engravings`,
  )
    .then(res => res.data)
    .catch(err => console.error(err));

export const getCharacterCards = (characterName: string) =>
  apiInstance<ArmoryCard[]>(`/armories/characters/${characterName}/cards`)
    .then(res => res.data)
    .catch(err => console.error(err));

export const getCharacterGems = (characterName: string) =>
  apiInstance<ArmoryGem[]>(`/armories/characters/${characterName}/gems`)
    .then(res => res.data)
    .catch(err => console.error(err));

export const getCharacterColosseums = (characterName: string) =>
  apiInstance<ColosseumInfo>(`/armories/characters/${characterName}/colosseums`)
    .then(res => res.data)
    .catch(err => console.error(err));

export const getCharacterCollectibles = (characterName: string) =>
  apiInstance<Collectible[]>(
    `/armories/characters/${characterName}/collectibles`,
  )
    .then(res => res.data)
    .catch(err => console.error(err));

// Auctions

export const getAuctionOptions = () =>
  apiInstance<Options>("/auctions/options")
    .then(res => res.data)
    .catch(err => console.error(err));

export const postAuctionItem = (requestActionItems: AuctionItemsReq) =>
  apiInstance
    .post<Auction>("/auctions/items", requestActionItems)
    .then(res => res.data)
    .catch(err => console.error(err));

// Guilds

export const getGuildRankings = () =>
  apiInstance<GuildRanking>("/guilds/rankings")
    .then(res => res.data)
    .catch(err => console.error(err));

// Markets

export const getMarketOptions = () =>
  apiInstance<Markets>("/markets/options")
    .then(res => res.data)
    .catch(err => console.error(err));

export const getMarketItemById = (itemId: number) =>
  apiInstance<MarketItemStat[]>(`/markets/items/${itemId}`)
    .then(res => res.data)
    .catch(err => console.error(err));

export const postMarketItem = (requestActionItems: MarketItemReq) =>
  apiInstance
    .post<MarketList>("/markets/items", requestActionItems)
    .then(res => res.data)
    .catch(err => console.error(err));

// GameContents

export const getChallengeAbyss = () =>
  apiInstance<ChallengeAbyssDungeons[]>(
    "/gamecontents/challenge-abyss-dungeons",
  )
    .then(res => res.data)
    .catch(err => console.error(err));

export const getChallengeGuardian = () =>
  apiInstance<ChallengeGuardianRaids[]>(
    "/gamecontents/challenge-guardian-raids",
  )
    .then(res => res.data)
    .catch(err => console.error(err));

export const getCalendar = () =>
  apiInstance<Schedule[]>("/gamecontents/calendar")
    .then(res => res.data)
    .catch(err => console.error(err));
