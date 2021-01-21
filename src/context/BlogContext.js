import createContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  switch (action.type) {
    case `get_blogposts`:
      return action.payload;
    case `add_blogpost`:
      return [
        ...state,
        {
          title: action.payload.title,
          content: action.payload.content,
          id: Math.floor(Math.random() * 99999),
        },
      ];
    case `edit_blogpost`:
      return state.map((item) => {
        return item.id === action.payload.id ? action.payload : item;
      });
    case `delete_blogpost`:
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get(`/blogposts`);

    dispatch({
      type: `get_blogposts`,
      payload: response.data,
    });
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    await jsonServer.post(`/blogposts`, { title, content });
    // dispatch({
    //   type: `add_blogpost`,
    //   payload: {
    //     title,
    //     content,
    //   },
    // });
    callback();
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content });

    dispatch({
      type: `edit_blogpost`,
      payload: {
        id,
        title,
        content,
      },
    });
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({
      type: `delete_blogpost`,
      payload: { id },
    });
  };
};

export const { Context, Provider } = createContext(
  blogReducer,
  { addBlogPost, editBlogPost, deleteBlogPost, getBlogPosts },
  []
);