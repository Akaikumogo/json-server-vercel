const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router({});

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
    "/blog/:resource/:id/show": "/:resource/:id",
  })
);
server.use(router);

// Set up your routes
router.db = {
  task: [],
};

server.listen(3000, () => {
  console.log("JSON Server is running");
});

module.exports = server;
