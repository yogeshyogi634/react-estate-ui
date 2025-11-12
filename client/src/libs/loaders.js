import apiRequest from "./apiRequest";

export const SinglePageloader = async ({ request, params }) => {
  const res = await apiRequest("/posts/" + params.id);
  return res.data;
};

export const ListPageLoader = async ({ request, params }) => {
  const query = request.url.split("?")[1];
  const res = await apiRequest("/posts?" + query);
  return res.data;
};
export const ProfilePageLoader = async ({ request, params }) => {
  const postPromise = apiRequest("/users/profilePosts");
  return defer({
    postResponse: postPromise,
  });
};
