const defaultConfig = {
  enableSeo: true,
  enablePerformance: true,
  enableBuild: true,
  enableRuntime: true,
  enableA11y: true,
  enableReporting: true,
  protected: process.env.NODE_ENV === "production",
  allowedHeaderKey: "x-next-tools",
  allowedHeaderValue: process.env.NEXT_TOOLS_SECRET || "dev-tools",
};

export function nextTools(userConfig = {}) {
  return { ...defaultConfig, ...userConfig };
}

export const toolsConfig = nextTools();
