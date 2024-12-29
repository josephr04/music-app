const url = "https://d3191cx8othwak.cloudfront.net/";

export const getMixes = async () => {
  try {
    const response = await fetch(url + 'metadata/mixes.json');
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

