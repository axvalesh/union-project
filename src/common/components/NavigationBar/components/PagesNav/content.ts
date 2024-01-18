import AppColor from "@common/styles/variables-static";



type linkType = {
    title: string;
}
export type nav_categorys = {
    title: nav_var_categorys_titles,
    text: string
    image: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    index: number
    links:linkType[];
};

export type nav_var_categorys_titles = 'Dashboard' | 'Teams' | 'Subscriptions' | 'Messenger' | 'Community' | 'Team' | 'Settings';

export const nav_var_categorys:nav_categorys[] = [
    {
        title: "Dashboard",
        text: 'Your account center you progress',
        image: AppColor.dashboard,
        index: 0,
        links: [
            { title: 'home',  },
            { title: 'account',  },
            { title: 'missions',  },
            { title: 'rewards',  },
            { title: 'upgrades',  },
            { title: 'activity',  },
        ],
    },
    {
        title: "Teams",
        text: 'Build or join to existing team ',
        image: AppColor.teams,
        index: 1,
        links: [],
    },
    {
        title: "Subscriptions",
        text: 'Your new privileges',
        image: AppColor.subscriptions,
        index: 2,
        links: [
            {title: 'my subscriptions'}
        ],
    },
    {
        title: "Messenger",
        text: 'Stay in touch ',
        image: AppColor.messageIconRound,
        index: 3,
        links: [],
    },
    {
        title: "Community",
        text: 'Share yourself ',
        image: AppColor.community,
        index: 4,
        links:  [
            {title: 'posts'},
            {title: 'faq'}
        ],
    },
    {
        title: "Team",
        text: 'Share yourself ',
        image: AppColor.teams,
        index: 5,
        links: [
            {title: 'members'},
            {title: 'squads'}
        ],
    },
    {
        title: "Settings",
        text: 'Customise your profile',
        image: AppColor.settings,
        index: 6,
        links: [
            {title: 'profile'},
            {title: 'password & security'},
            {title: 'verification'},
            {title: 'notifications'}
        ],
    },
    
];