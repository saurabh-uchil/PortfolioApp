export const getVisibleCards = (width: number) => {
  if (width < 640) {
    return 1;
  }

  if (width < 1024) {
    return 2;
  }

  return 3;
};

export const getMaxStartIndex = (
  totalCards: number,
  visibleCards: number,
) => Math.max(totalCards - visibleCards, 0);

export const getCardWidth = (visibleCards: number) => {
  return 100 / visibleCards;
};