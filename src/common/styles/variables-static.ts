/// <reference types="vite-plugin-svgr/client" />

import { ReactComponent as chevronLeft } from '@assets/svg/chevron-left.svg';
import { ReactComponent as chevronRight } from '@assets/svg/chevron-right.svg';
import { ReactComponent as home} from '@assets/svg/home.svg';
import { ReactComponent as cookies} from '@assets/svg/cookies.svg';
import { ReactComponent as chevronTop} from '@assets/svg/chevron-top.svg';
import { ReactComponent as chevronBottom} from '@assets/svg/chevron-bottom.svg';

import { ReactComponent as DisplayIcon} from '@assets/svg/display-icon.svg';
import { ReactComponent as atSign} from '@assets/svg/at_sing-icon.svg';
import { ReactComponent as colorFlag} from '@assets/svg/color-flag.svg';
import { ReactComponent as pigCoins} from '@assets/svg/pig-coins.svg';
import { ReactComponent as singTrue} from '@assets/svg/sing-true.svg';

import { ReactComponent as messageIconRound} from '@assets/svg/message-icon-round.svg';
import { ReactComponent as community} from '@assets/svg/community.svg';
import { ReactComponent as dashboard} from '@assets/svg/dashboard.svg';
import { ReactComponent as teams} from '@assets/svg/teams.svg';
import { ReactComponent as subscriptions} from '@assets/svg/subscriptions.svg';

import { ReactComponent as wallet} from '@assets/svg/balance-wallet.svg';
import { ReactComponent as caseIcon} from '@assets/svg/case-icon.svg';
import { ReactComponent as moneyRed} from '@assets/svg/money-red.svg';
import { ReactComponent as moneyGreen} from '@assets/svg/money-green.svg';

import { ReactComponent as orders} from '@assets/svg/orders.svg';
import { ReactComponent as ordersWhite} from '@assets/svg/orders-white.svg';
import { ReactComponent as caseWhite} from '@assets/svg/case-icon-white.svg';

import { ReactComponent as cart} from '@assets/svg/cart.svg';
import { ReactComponent as freelancer} from '@assets/svg/freelancer.svg';
import { ReactComponent as managers} from '@assets/svg/managers.svg';
import { ReactComponent as searchIconLines} from '@assets/svg/search-icon-lines.svg';

import { ReactComponent as freelancerWhite} from '@assets/svg/freelancer-white.svg';
import { ReactComponent as managersWhite} from '@assets/svg/managers-white.svg';
class AppColor {

    static displayIcon = DisplayIcon;
    static atSing = atSign;
    static pigCoins = pigCoins;
    static colorFlag = colorFlag;
    static singTrue = singTrue;
    static cart = cart;
    static ordersWhite = ordersWhite;

    static managersWhite = managersWhite;

    static freelancerWhite = freelancerWhite;
    static searchIconLines = searchIconLines;
    static caseWhite = caseWhite;

    static orders = orders;
    static freelancer = freelancer;
    static managers = managers;

    static wallet = wallet;
    static caseIcon = caseIcon;
    static moneyRed = moneyRed;
    static moneyGreen = moneyGreen;
    static messageIconRound = messageIconRound;
    static community = community;
    static dashboard = dashboard;
    static teams = teams;
    static subscriptions = subscriptions;

    static chevronLeft = chevronLeft;
    static chevronRight = chevronRight;
    static chevronTop = chevronTop;
    static chevronBottom = chevronBottom;
    static home = home;
    static cookies = cookies;

    static orange = '#F4A72A';
    static white = '#F5F5F5';
    static text = '#515151';
    static chevronColor = '#A8A8AD';
    static green = '#219653';
    static red = '#EB5757';
    static transparentBlack = 'rgba(0, 0, 0, 0.5)';
    static tabletSize = 768;

    static colorWithOpacityRgb = (color: string, opacity: number): string => {
        const rgbaColor = color.replace('rgb', 'rgba').replace(')', `, ${opacity})`);
        return rgbaColor;
    };

    static hexToRgb = (hex: string): string => {
        // Expand shorthand form (e.g., "03F") to full form (e.g., "0033FF")
        const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        const fullHex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
        
        // Parse the hex values to decimal
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
        if (!result) {
            throw new Error('Invalid hex color');
        }
    
        const rgb = `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
        return rgb;
    };
    
    static colorWithOpacity = (color: string, opacity: number): string => {
        const rgbColor = AppColor.hexToRgb(color);
        const rgbaColor = `rgba(${rgbColor}, ${opacity})`;
        return rgbaColor;
        };
}
export default AppColor;
