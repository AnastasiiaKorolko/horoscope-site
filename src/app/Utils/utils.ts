export const fetchCatFact = async (avgHealth: number): Promise<string> => {
  const response = await fetch("https://catfact.ninja/fact");
  const data = await response.json();
  return data.fact;
};
