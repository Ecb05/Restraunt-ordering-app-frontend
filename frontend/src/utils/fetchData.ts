export const fetchData = async (fileName: string) => {
  try {
    const response = await fetch(`/data/${fileName}.json`);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${fileName}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
export default fetchData;