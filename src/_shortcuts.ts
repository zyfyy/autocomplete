const completionSpec: Fig.Spec = {
  name: "_shortcuts",
  description: "Fig shortcuts",
  subcommands: [
    {
      name: "Good Morning! ☀️",
      icon: "☀️",
      description: "Say an inspirational quote",
      insertValue: "\b\bfortune | cowsay -n -r;\n",
    },
    {
      name: "Jump to My Fig!",
      description: 'Jump to the Fig folder to build',
      icon: "fig://icon?type=folder",
      insertValue: "\b\bcd /Users/qi/ghq/github.com/zyfyy/autocomplete\n",
    },
  ],
};
export default completionSpec;
