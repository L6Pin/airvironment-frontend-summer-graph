/**
 * Informs the server about the types of data that can be sent back.
 * @type {string}
 */
export const Accept = "Accept";

/**
 * Indicates the media type of the resource.
 * @type {string}
 */
export const ContentType = "Content-Type";

/**
 * Contains the credentials to authenticate a user-agent with a server.
 * @type {string}
 */
export const Authorization = "Authorization";

export const Referer = "Referer";

const headers = {
  Accept: Accept,
  ContentType: ContentType,
  Authorization: Authorization,
  Referer: Referer,
};

export default headers;
