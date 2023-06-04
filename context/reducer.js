import { CURRENT_USER, GET_TICKETS, PAGE_LOADING } from "./types";

export const Reducer = (state, { type, payload }) => {
  switch (type) {
    case CURRENT_USER:
      return {
        ...state,
        user: payload || undefined,
      };
    case GET_TICKETS:
      return {
        ...state,
        getTickets: payload || undefined,
      };
    case PAGE_LOADING:
      return {
        ...state,
        pageLoading: payload || false,
      };

    default:
      return state;
  }
};
