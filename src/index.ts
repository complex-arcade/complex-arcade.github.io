declare global {
  interface ExecutionContext {
    waitUntil(promise: Promise<any>): void;
  }
}

export interface Env {
  // Add any KV namespaces, D1 databases, or other bindings here
  // Example: MY_KV: KVNamespace;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    const pathname = url.pathname;

    try {
      // Handle API routes
      if (pathname.startsWith("/api/")) {
        if (pathname === "/api/hello") {
          return new Response(JSON.stringify({ message: "Hello from Complex Arcade!" }), {
            headers: { "Content-Type": "application/json" },
          });
        }
      }

      const staticResponse = await fetch(request);
      return staticResponse;

    } catch (error) {
      return new Response("Internal Server Error", { status: 500 });
    }
  },
};