const esbuild = require("esbuild");

const watch = process.argv.includes('--watch');

const buildOptions = {
    entryPoints: ["app/javascript/application.js"],
    bundle: true,
    outfile: "dist/bundle.js",
    plugins: [require("esbuild-svelte")()],
    logLevel: "info",
};

if (watch) {
    esbuild.context(buildOptions).then(ctx => ctx.watch()).catch(() => process.exit(1));
} else {
    esbuild.build(buildOptions).catch(() => process.exit(1));
}