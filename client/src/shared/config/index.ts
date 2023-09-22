const getEnvVar = (key: string) => {
  if (process.env[key] === undefined) {
    console.error(`Env variable for ${key} is undefined.`);
  }
  return process.env[key] || "";
};

export const API_URL = getEnvVar("REACT_APP_API_URL");
