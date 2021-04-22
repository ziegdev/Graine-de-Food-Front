export const SET_CODE_PROMO = 'SET_CODE_PROMO';

export const setCodePromo = (promoCodeSearched, event) => ({
  type: SET_CODE_PROMO,
  promoCodeSearched,
  event,
});

export const SEARCH_CODE_PROMO = 'SEARCH_CODE_PROMO';

export const searchCodePromo = (promoCodeSearched) => ({
  type: SEARCH_CODE_PROMO,
  promoCodeSearched,
});

export const MODIFY_CODE_PROMO = 'MODIFY_CODE_PROMO';

export const modifyCodePromo = (promoCode, promoPourcent, promoStartDate, promoEndDate,) => ({
  type: MODIFY_CODE_PROMO,
  promoCode,
  promoPourcent,
  promoStartDate,
  promoEndDate,
});
