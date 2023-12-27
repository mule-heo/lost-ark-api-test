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

export const createIsQueryParameterBitmask = (parameters: Parameter[]) => {
  if (parameters.length > 31) {
    throw new Error("Cannot use bitmask over 31 parameters.");
  }
  let result = 0;
  for (let i = 0; i < parameters.length; i++) {
    const parameter = parameters[i];
    if (parameter.isQueryParameter) {
      result |= 1 << i;
    }
  }
  return result;
};
