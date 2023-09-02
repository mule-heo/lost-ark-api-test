const getEnvVar = (key: string) => {
  if (process.env[key] === undefined) {
    throw new Error(`Env variable for ${key} is undefined.`);
  }
  return process.env[key] || "";
};

export const API_URL = getEnvVar("REACT_APP_API_URL");
export const TEMP_API_KEY = getEnvVar("REACT_APP_API_KEY");
