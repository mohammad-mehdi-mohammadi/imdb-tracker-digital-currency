import instance from "./instance";
const ImdbTrackerService = {
    home: () => instance.get("?apikey=5adf7946&s=all"),
};
export default ImdbTrackerService;
