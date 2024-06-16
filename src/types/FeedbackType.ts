export type FeedbackType = {
  autorName: string;
  autorImg: string;
  rating: 1 | 2 | 3 | 4 | 5;
  ratingText: string | null;
  message: string;
};
