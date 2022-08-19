type User = {
    avatarUrl: string
    id: number
    isPro: boolean
    name: string
};

type UserReview = {
    comment: string
    rating: number
};

type Review = {
    comment: string
    rating: number
    date: string
    id: number
    user: User
};

type Reviews = Review[];

export type { Review, UserReview, Reviews };
