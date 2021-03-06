const message = 'UserID Expired';

module.exports = class UserExpiredError extends Error {
  constructor() {
    super(message);
    this.title = message;
    this.status = 419;
    this.code = 'UserExpiredError';
    this.detail =
      'The token for the current user has expired or the user was removed from the system.';
  }
};
