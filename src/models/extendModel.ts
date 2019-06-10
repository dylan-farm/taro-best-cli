export default function extendModel(...models:object[]):object {
  const base = {
    namespace: "",
    state: {},
    subscriptions: {},
    effects: {},
    reducers: {}
  };
  const baseKeys = Object.keys(base);
  return models.reduce((acc, extend) => {
    baseKeys.forEach(key => {
      const a = acc[key];
      const b = extend[key];
      const c = typeof a === "object" && typeof b === "object";
      if (c)
        acc[key] = {
          ...a,
          ...b
        };
    });
    return acc;
  }, base);
}
