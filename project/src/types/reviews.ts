
type User = {
    avatarUrl: string
    id: number
    isPro: boolean
    name: string
};

type Review = {
    comment: string
    rating: number
    date: string
    id: number
    user: User
};

type Reviews = Review[];

export type { Review, Reviews };
