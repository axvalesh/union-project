export interface user {
    name: string;
    image: string;
    roles: user_roles;
    country: string;
    statistic: user_statistic;
};

type user_roles = 'Customer' | 'Admin' | 'Sponsor';
type user_statistic = {
    sponsorship_count: number;
    comments_count: number;
    rating: number;
    responses_count: number;
}