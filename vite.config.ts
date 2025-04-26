import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            // Root
            "@rsrc": resolve(__dirname, "src"),
            "@rtypes": resolve(__dirname, "src/types"),
            "@rstyles": resolve(__dirname, "src/styles"),
            "@rlibs": resolve(__dirname, "src/libs"),
            "@rdata": resolve(__dirname, "src/data"),

            // Ticket
            "@tsrc": resolve(__dirname, "ticket", "src"),
            "@tdata": resolve(__dirname, "ticket", "src/data"),
            "@tenums": resolve(__dirname, "ticket", "src/enums"),
            "@tstyles": resolve(__dirname, "ticket", "src/styles"),
            "@ttypes": resolve(__dirname, "ticket", "src/types"),
            "@tutils": resolve(__dirname, "ticket", "src/utils"),
        },
    },
    build: {
        rollupOptions: {
            input: {
                root: resolve(__dirname, "index.html"),
                admin: resolve(__dirname, "private/zconcert-admin/index.html"),
                // ticket: resolve(__dirname, "ticket/index.html"),
                scanner: resolve(__dirname, "private/qr-scanner/index.html"),
            },
        },
    },
});
