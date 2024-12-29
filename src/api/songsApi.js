const url = "https://d3191cx8othwak.cloudfront.net/";

export const getSongs = async () => {
  try {
    const response = await fetch(url + 'metadata/songs.json');
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};