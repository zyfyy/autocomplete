const generator: Fig.Generator = {
  script: "/Users/qi/.zinit/plugins/mfaerevaag---wd/wd.sh list",
  postProcess: (data: string) => {
    try {
      const filted = data
        .split("\n")
        .filter((line) => line.length > 0 && line.indexOf("->") > 0);
      const res = filted.map((line) => ({
        name: line.split("->")[0].trim(),
        icon: "fig://icon?type=folder",
        displayName: line.split("->")[0].trim(),
        description: line.split("->")[1].trim(),
      }));
      return res;
    } catch (e) {
      console.error(e);
      return [];
    }
  },
};

const completionSpec: Fig.Spec = {
  name: "wd",
  description: "Go to marked place",
  // Only uncomment if wd takes an argument
  subcommands: [
    {
      name: "add",
    },
  ],
  args: {
    name: "wd point",
    description: "Go to marked place",
    generators: generator,
  },
};
export default completionSpec;
