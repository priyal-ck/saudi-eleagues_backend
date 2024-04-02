const StatusEnum = {
  SUCCESS: 200,                   // OK
  NO_CONTENT: 204,                // No Content
  ALREADY_EXIST: 409,             // Conflict (Custom code for "Already Exists")
  NOT_FOUND: 404,                // Not Found
  INTERNAL_SERVER_ERROR: 500,     // Internal Server Error
  TOKEN_EXP: 401,
  USER_NOT_FOUND: 400,
  CREDENTIS_NOT_MATCHED: 423,                  // Unauthorized (Token Expired)
  PATTERN_NOT_MATCH: 422,
  BLOCKED_USER: 403
}
const StatusMessages = {
  SUCCESS: 'Success'
}

const Messages = {
}

