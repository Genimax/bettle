import teamConfigFile from "@/config/teamConfig.json";

export const findConfigById = (id) => {
  return teamConfigFile.data.find((item) => item.competitionId === id);
};
export const extractCurrentConfig = () => {
  const currentId = teamConfigFile.currentCompetitionId;
  return findConfigById(currentId);
};
