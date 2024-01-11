export interface DetailPortfolio {
    id: number;
    image: string;
    category: string;
    title: string;
    content?: string;
    name: string;
    view: number;
    like: number;
  }

  export interface RespectRanking {
    id: number;
    category: string;
    title: string;
    name: string;
    view: number;
    like: number;
    spectrum: number;
  }
