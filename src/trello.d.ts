/**
 * Contents of this file where created using http://json2ts.com
 *
 * You probably should extend this file. Whenever you call a new object from
 * Trellos API paste the JSON into json2ts and extend this Trello namespace.
 * */
export namespace Trello {
  export interface User {
    id: string;
    avatarHash: string;
    avatarUrl: string;
    bio: string;
    bioData: BioData;
    confirmed: boolean;
    fullName: string;
    idEnterprisesDeactivated: any[];
    idPremOrgsAdmin: any[];
    initials: string;
    memberType: string;
    products: any[];
    status: string;
    url: string;
    username: string;
    avatarSource: string;
    email: string;
    gravatarHash: string;
    idBoards: string[];
    idEnterprise?: any;
    idOrganizations: string[];
    idEnterprisesAdmin: any[];
    limits: Limits;
    loginTypes: string[];
    marketingOptIn: MarketingOptIn;
    messagesDismissed: any[];
    oneTimeMessagesDismissed: string[];
    prefs: Prefs;
    trophies: any[];
    uploadedAvatarHash: string;
    uploadedAvatarUrl: string;
    premiumFeatures: any[];
    idBoardsPinned?: any;
  }

  export interface Emoji {
  }

  export interface BioData {
    emoji: Emoji;
  }

  export interface TotalPerMember {
    status: string;
    disableAt: number;
    warnAt: number;
  }

  export interface Boards {
    id: string;
    name: string;
    totalPerMember?: TotalPerMember;
  }

  export interface Cards {
    id: string;
    name: string;
    badges: object;
    dueComplete: boolean;
    due?: string;
    desc: string;
    idMembers: object;
  }


  export interface TotalPerMember2 {
    status: string;
    disableAt: number;
    warnAt: number;
  }

  export interface Orgs {
    totalPerMember: TotalPerMember2;
  }

  export interface Limits {
    boards: Boards;
    orgs: Orgs;
  }

  export interface MarketingOptIn {
    optedIn: boolean;
    date: Date;
  }

  export interface Prefs {
    sendSummaries: boolean;
    minutesBetweenSummaries: number;
    minutesBeforeDeadlineToNotify: number;
    colorBlind: boolean;
    locale: string;
  }

  export interface InAndOutbox {
    0: object;
    1: comment[];
  }

  export interface comment {
    data: object;
    date: Date;
    id: string;
    idMemberCreator: string;
    type: string;
  }


}
