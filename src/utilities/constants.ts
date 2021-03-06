export const BASE_URL = 'https://api.podberu.su/api/v1';

export const API_URL = {
  LOGIN: `${BASE_URL}/auth/login`,
  SEND_CODE: `${BASE_URL}/auth/send_code`,
  CLIENT: {
    APPLICATIONS: `${BASE_URL}/clients/orders`,
    INN: `${BASE_URL}/clients/inn`,
    PASSPORT: `${BASE_URL}/clients/passport`,
    PERSONAL_INFO: `${BASE_URL}/clients/personal-info`,
    SNILS: `${BASE_URL}/clients/snils`,
  },
  AGENT: {
    APPLICATIONS: `${BASE_URL}/agents/order`,
    WITHDRAW: `${BASE_URL}/agents/withdrawals`,
    REFERRAL: `${BASE_URL}/agents/referral`,
  },
  OFFERS: {
    ROOT: `${BASE_URL}/offers`,
    TYPES: `${BASE_URL}/offers/types`,
  },
};

export const STORAGE = {
  USER: 'pick-up-user',
  TOKEN: 'pick-up-token',
};

export const ROUTES = {
  HOME: { path: '/', meta: { title: 'Home' } },
  ACCOUNT: { path: '/account', meta: { title: 'Account' } },
  OFFERS_BY_TYPE: { path: '/offers/:offerType' },
  ALL_OFFERS: { path: '/offers' },
  CREDIT: { path: '/credit', meta: { title: 'Credit' } },
  REGISTER: { path: '/register/:offerType/:bankName', meta: { title: 'Register' } },
  LANDING: { path: '/landing', meta: { title: 'Landing' } },
  SIGN_IN: { path: '/auth/signin', showHeader: true, showFooter: true, meta: { title: 'Sign In' } },
  SIGN_UP: { path: '/auth/signup', meta: { title: 'Sign Up' } },
  DASHBOARD: { path: '/dashboard', meta: { title: 'Dashboard' } },
  NOT_FOUND: { path: '/404', meta: { title: 'Not Found' } },
};

export const ROLES = {
  AGENT: 'agent',
  CLIENT: 'client',
};

export const DEFAULTS = {
  pageSize: 10,
  page: 1,
};

export const ORDER_TYPES = {
  RKO: 'rko',
  MFO: 'mfo',
  CREDIT: 'credit',
  DEBIT: 'debit',
  BUSINESS_CREDIT: 'business_credit',
};

export const getDefaultCard = (onClick: () => void) => ({
  title: 'Альфа-банк',
  subtitle: 'Описание предложенного бренда.',
  body: [
    'Преимущества:',
    '•бесплатное обслуживание;',
    '•до 100 дней без процентов;',
    '•0% за снятие наличных;',
    '•бесплатное пополнение с ',
    'карт любых банков.',
  ],
  icon: 'typography',
  button: {
    value: 'Подробнее',
    size: 'md',
    onClick,
    margin: [24, 0, 0, 0],
    padding: [0, 24],
  },
});

export const getTitle = (offerType: string) => {
  switch (offerType) {
    case 'rko':
      return 'РКО';
    case 'mfo':
      return 'Микрозаймы';
    case 'credit':
      return 'Кредиты';
    case 'debit':
      return 'Дебетовые карты';
    case 'business_credit':
      return 'Кредит для бизнеса';
    default:
      return 'Все предложения';
  }
};
