class Context {
  constructor({ type, object: update, user }, bot) {
    if (update.message) {
      this.message = { ...update.message, type };
      this.client_info = update.client_info;
    } else {
      this.message = { ...update, type };
    }
    this.user = user;
    this.bot = bot;
  }

  reply(message, extra) {
    return this.bot.sendMessage(this.message.peer_id || this.message.user_id, message, extra);
  }
}

module.exports = Context;