import type { Parameter } from "pages/api-page/endpoints";

export const createInitialState = (parameters: Parameter[]) => {
  const result: { [x: string]: string } = {};
  for (let i = 0; i < parameters.length; i++) {
    const parameter = parameters[i];
    if (parameter.availableValues !== undefined) {
      result[parameter.name] = parameter.availableValues[0];
    } else {
      result[parameter.name] = "";
    }
  }
  return result;
};
