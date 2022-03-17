export interface IGuildContext {
  guild?: PartialGuild;
  setGuild: (guild: PartialGuild) => void;
}

export interface PartialGuild {
  id: string;
  name: string;
  icon?: string | null;
}

export interface Track {
  /** The base64 encoded track. */
  readonly track: string;
  /** The title of the track. */
  readonly title: string;
  /** The identifier of the track. */
  readonly identifier: string;
  /** The author of the track. */
  readonly author: string;
  /** The duration of the track. */
  readonly duration: number;
  /** If the track is seekable. */
  readonly isSeekable: boolean;
  /** If the track is a stream.. */
  readonly isStream: boolean;
  /** The uri of the track. */
  readonly uri: string;
  /** The thumbnail of the track or null if it's a unsupported source. */
  readonly thumbnail: string | null;
  /** The user that requested the track. */
  readonly requester: unknown | null;

  readonly position: number;

  /** Displays the track thumbnail with optional size or null if it's a unsupported source. */
  displayThumbnail(size?: Sizes): string;
}

type Sizes =
  | '0'
  | '1'
  | '2'
  | '3'
  | 'default'
  | 'mqdefault'
  | 'hqdefault'
  | 'maxresdefault';

export interface SearchProps {
  query: string;
}

export interface MusicCardProps {
  track: Track;
}

// Generated by https://quicktype.io

export interface YoutubeVideo {
  type: Type;
  title: string;
  id: string;
  url: string;
  bestThumbnail: BestThumbnail;
  thumbnails: BestThumbnail[];
  isUpcoming: boolean;
  upcoming: null;
  isLive: boolean;
  badges: string[];
  author: Author;
  description: null;
  views: number;
  duration: string;
  uploadedAt: string;
}

export interface Author {
  name: string;
  channelID: string;
  url: string;
  bestAvatar: BestThumbnail;
  avatars: BestThumbnail[];
  ownerBadges: string[];
  verified: boolean;
}

export interface BestThumbnail {
  url: string;
  width: number;
  height: number;
}

export enum Type {
  Video = 'video',
}

export interface SocketData extends Track {
  player: boolean;
  defaultVolume: number | null;
}

export interface ControllerProps {
  data?: SocketData;
  playback: () => void;
  skip: () => void;
  previous: () => void;
  shuffle: () => void;
}

export interface MenuProps {
  guilds:
    | {
        __typename?: 'GraphqlMutualGuilds' | undefined;
        id: string;
        name: string;
        icon?: string | null | undefined;
        exclude?: boolean | null | undefined;
      }[]
    | undefined;
}
