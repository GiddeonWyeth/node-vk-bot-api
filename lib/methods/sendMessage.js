const toArray = require('../utils/toArray');

module.exports = function (userId, message, extra) {
  const { attachment, keyboard, sticker, randomId } = extra;

  if (Array.isArray(userId) && userId.length > 100) {
    throw new Error('Message can\'t be sent to more than 100 recipients.');
  }

  return this.execute(
    'messages.send',
    Object.assign(
      Array.isArray(userId)
        ? { user_ids: userId.join(',') }
        : { peer_id: userId },
        {
          message,
          attachment: toArray(attachment).join(','),
          sticker_id: sticker,
          keyboard: keyboard ? JSON.stringify(keyboard): undefined,
          random_id: randomId || Date.now(),
        },
    ),
  );
};
