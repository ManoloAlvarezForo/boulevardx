import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";

// Create Apollo Server (only once)
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Variable to control initialization
let url: string | undefined;
let isServerStarted = false;

// Function to start Apollo Server (called once when the API route is accessed)
const startApolloServer = async () => {
  if (isServerStarted) {
    return;
  }

  try {
    console.log("Starting Apollo Server...");
    const { url: serverUrl } = await startStandaloneServer(server, {
      context: async ({ req }) => {
        return { headers: req.headers };
      },
    });

    url = serverUrl;
    isServerStarted = true; // mark the server when it's ready
    console.log(`Apollo Server started at ${url}!`);
  } catch (error) {
    console.error("Error starting Apollo Server:", error);
    throw new Error("Failed to start Apollo Server");
  }
};

// Handler for POST requests
export const POST = async (req: Request) => {
  // Ensure Apollo Server is started before handling the request
  if (!isServerStarted) {
    await startApolloServer(); // Ensure the server is initialized before processing the request
  }

  if (!url) {
    return new Response("Server not initialized yet", { status: 500 });
  }

  try {
    const requestBody = await req.json();

    // Redirect the query to the Apollo server
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    // Get the data from the response
    const data = await response.json();

    // Return the data to the client
    return new Response(JSON.stringify(data), { status: response.status });
  } catch (error) {
    console.error("Error during the POST request:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};

// Handler for GET requests
export const GET = async () => {
  return new Response("GraphQL POST endpoint", { status: 200 });
};
