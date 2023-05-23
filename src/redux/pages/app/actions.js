export const TITLE_PAGE = "TITLE_PAGE";

export const changeTitle = (title) => {
  return (dispatch) => {
    dispatch({
      type: TITLE_PAGE,
      payload: title
    });
  };
};
