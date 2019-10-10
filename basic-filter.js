function getShortMessages(messages) {
    return messages.filter(x => x.message.length < 50).map(y => y.message);
  }

  module.exports = getShortMessages