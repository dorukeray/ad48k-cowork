const server = Bun.serve({
  port: 5500,
  async fetch(req) {
    const url = new URL(req.url);
    let path = url.pathname;

    // Serve index.html by default
    if (path === "/") {
      path = "/index.html";
    }

    // Attempt to load the file
    const file = Bun.file("." + path);
    const exists = await file.exists();

    if (!exists) {
      return new Response("404 Not Found", { status: 404 });
    }

    // Serve the file directly
    return new Response(file);
  },
});

console.log(`🚀 Server started!\nHosting directory: ${process.cwd()}\nListening on: http://localhost:${server.port}`);
