import instance from './instance';

const ImdbTrackerService = {
  home: (page: number) => instance.get(`?apikey=5adf7946&s=all&page=${page}`),
};
export default ImdbTrackerService;
