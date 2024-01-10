export interface Content {
  id: string;
  content: string;
  date: Date;
  profileImg: string;
}

export interface ChatCard {
  id: number;
  tag: string;
  title: string;
  people: number;
  content: string;
  contents: Content[];
  involved: string;
}
