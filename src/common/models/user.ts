import { countries } from "./constants";
import fakeUserImage from '@assets/images/user-fake.png';
export interface userModel {
    name: string;
    image: string | null;
    roles: user_roles;
    country: countries;
    statistic?: user_statistic;
    activeAgo?: string;
    isActive: boolean;
    lvl: string;
};

type user_roles = 'Customer' | 'Admin' | 'Sponsor';
type user_statistic = {
    sponsorship_count: number;
    comments_count: number;
    rating: number;
    responses_count: number;
}

export const fakeUserConstant: userModel = {
    name: "John Doe",
    image: fakeUserImage,
    roles: 'Customer',
    country: 'Ukraine',
    activeAgo: '1 min ago',
    isActive: true,
    lvl: '100',
    statistic: {
        sponsorship_count: 0,
        comments_count: 0,
        rating: 0,
        responses_count: 0,
    }
};