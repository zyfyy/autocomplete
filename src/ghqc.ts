const generator: Fig.Generator = {
  script: "ghq list",
  postProcess: (data: string) => {
    try {
      const res = data.split("\n").map((line) => ({
        name: line,
        icon: "fig://icon?type=folder",
        displayName: line.split("/").splice(-2).join('/'),
        description: line,
      }));
      return res;
    } catch (e) {
      return [{ name: "none" }];
    }
  },
};

const completionSpec: Fig.Spec = {
  name: "ghqc",
  args: {
    name: "code place",
    description: "Go to code base",
    generators: generator,
  },
};
export default completionSpec;
