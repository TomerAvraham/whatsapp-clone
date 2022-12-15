require("dotenv").config();
const express = require("express");
const app = express();
const { createServer } = require("http");
const { Server } = require("socket.io");
const initialMongoConnection = require("./database/initialConnection");
const socketMain = require("./socket.io/socketMain");
const cors = require("cors");

const httpServer = createServer(app);
initialMongoConnection();

app.use(cors());
app.use(express.json());

const routes = require("./routes/index");
app.use(routes);

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", socketMain);

const port = process.env.PORT || 9000;

httpServer.listen(port);

// const User = require("./models/user.model");
// const Conversation = require("./models/conversation.model");
// const Message = require("./models/message.model");

// async function emitReceivedDataFromDb(user, socket) {
//   try {
//     const users = await User.find({});
//     sockets.push({ userId: user._id, socket });

//     const conversations = await Conversation.find({ userIds: user._id });
//     const conversationId = conversations.map((c) => c._id);
//     if (conversations.length == 0) {
//       socket.emit("receive-data-from-db", {
//         conversations: null,
//         messages: null,
//         userlist: users,
//         user,
//       });
//     } else {
//       const messages = await Message.find({
//         conversationId: { $in: conversationId },
//       });
//       socket.emit("receive-data-from-db", {
//         conversations,
//         user,
//         userlist: users,
//         messages,
//       });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// module.exports = emitReceivedDataFromDb;
