/**
 * The request has succeeded.
 * @type {number}
 */
export const OK = 200;

/**
 * The request has succeeded and a new resource has been created as a result.
 * @type {number}
 */
export const Created = 201;

/**
 * The request has been received but not yet acted upon.
 * @type {number}
 */
export const Accepted = 202;

/**
 * The request has succeeded, but that the client doesn't need to go away from its current page.
 * @type {number}
 */
export const NoContent = 204;

/**
 * The request has succeeded, with partial response.
 * @type {number}
 */
export const PartialContent = 206;

/**
 * The server could not understand the request due to invalid syntax.
 * @type {number}
 */
export const BadRequest = 400;

/**
 * Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated".
 * @type {number}
 */
export const Unauthorized = 401;

/**
 * The server can not find requested resource.
 * @type {number}
 */
export const NotFound = 404;

/**
 * Conflict
 * @type {number}
 */
export const Conflict = 409;

/**
 * Unprocessable Entity
 * @type {number}
 */
export const UnprocessableEntity = 422;

/**
 * The server has encountered a situation it doesn't know how to handle.
 * @type {number}
 */
export const InternalServerError = 500;

/**
 * The server has encountered a situation it doesn't know how to handle.
 * @type {number}
 */
export const ServerError = 503;

const statusCodes = {
  OK,
  Created,
  Accepted,
  NoContent,
  BadRequest,
  Unauthorized,
  NotFound,
  Conflict,
  UnprocessableEntity,
  InternalServerError,
  ServerError,
};

export default statusCodes;
