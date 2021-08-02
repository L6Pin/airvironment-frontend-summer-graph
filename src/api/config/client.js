import request from "./request";
import * as HttpMethods from "./methods";
import * as HttpHeaders from "./headers";
import * as HttpStatusCodes from "./statusCodes";

/**
 * Default headers
 * @type {{[p: string]: string}}
 */
const defaultHeaders = {
  [HttpHeaders.Accept]: "application/json",
  [HttpHeaders.Referer]: "http://localhost:3000/",
  [HttpHeaders.ContentType]: "application/json",
};

/**
 * Processes response
 * @param response
 * @returns {Promise<any>}
 */
async function processResponse(response) {
  switch (response.status) {
    case HttpStatusCodes.OK:
    case HttpStatusCodes.Created:
    case HttpStatusCodes.PartialContent:
      try {
        return await response.json();
      } catch (error) {
        return {};
      }

    case HttpStatusCodes.NoContent:
      return Promise.resolve({});

    case HttpStatusCodes.BadRequest: {
      const error = await response.json();
      throw new Error(JSON.stringify(error) || "Bad request");
    }

    case HttpStatusCodes.Unauthorized:
      throw new Error("Unauthorized");

    case HttpStatusCodes.NotFound: {
      const error = await response.json();
      throw new Error(JSON.stringify(error) || "Not Found");
    }

    case HttpStatusCodes.Conflict: {
      const error = await response.json();
      throw new Error(JSON.stringify(error) || "Conflict");
    }

    case HttpStatusCodes.UnprocessableEntity: {
      const error = await response.json();
      throw new Error(JSON.stringify(error) || "Unprocessable Entity");
    }

    case HttpStatusCodes.InternalServerError: {
      const error = await response.json();
      throw new Error(JSON.stringify(error) || "Internal Server Error");
    }

    case HttpStatusCodes.ServerError: {
      const error = await response.json();
      throw new Error(JSON.stringify(error) || "Server Error");
    }

    default:
      throw new Error("Network Error");
  }
}

/**
 * Sends request.
 * @param request
 * @returns {Promise<*>}
 */
async function sendRequest(request) {
  request
    .headers({
      ...defaultHeaders,
      ...request.getHeader,
    })
    .build();

  const networkResponse = await fetch(
    `${request.getUrl()}`,
    request.getOptions()
  );

  if (networkResponse.status === HttpStatusCodes.Unauthorized) {
    sessionStorage.clear();
    window.location.reload();
  }

  const response = await processResponse(networkResponse.clone());

  return response;
}

/**
 * Sends request - form data.
 * @param request
 * @returns {Promise<*>}
 */
async function sendFormRequest(request) {
  request
    .headers({
      ...request.getHeader,
    })
    .build();

  const networkResponse = await fetch(
    `${request.getUrl()}`,
    request.getOptions()
  );

  const response = await processResponse(networkResponse.clone());

  return response;
}

/**
 * Builds and sends GET request.
 * @param url
 * @param params
 * @param headers
 * @param auth
 * @returns {Promise<*>}
 */
export async function get(url, params = {}, headers = {}, auth = true) {
  headers = { ...headers, ...defaultHeaders };
  const getRequest = request(HttpMethods.GET)
    .url(url, params)
    .headers(headers)
    .build();

  return await sendRequest(getRequest, auth);
}

/**
 * Builds and sends POST request.
 * @param url
 * @param params
 * @param headers
 * @param auth
 * @returns {Promise<*>}
 */
export async function post(url, params = {}, headers = {}, auth = true) {
  headers = { ...headers, ...defaultHeaders };
  const postRequest = request(HttpMethods.POST)
    .url(url)
    .headers(headers)
    .body(JSON.stringify(params))
    .build();

  return await sendRequest(postRequest, auth);
}

/**
 * Builds and sends POST request for form data.
 * @param url
 * @param params
 * @param auth
 * @returns {Promise<*>}
 */
export async function postFormData(url, data = {}, auth = true) {
  const postRequest = request(HttpMethods.POST).url(url).body(data).build();

  return await sendFormRequest(postRequest, auth);
}

/**
 * Builds and sends PATCH request.
 * @param url
 * @param params
 * @param headers
 * @param auth
 * @returns {Promise<*>}
 */
export async function patch(url, params = {}, headers = {}, auth = true) {
  headers = { ...headers, ...defaultHeaders };
  const patchRequest = request(HttpMethods.PATCH)
    .url(url)
    .headers(headers)
    .body(JSON.stringify(params))
    .build();

  return await sendRequest(patchRequest, auth);
}

/**
 * Builds and sends PUT request.
 * @param url
 * @param params
 * @param headers
 * @param auth
 * @returns {Promise<*>}
 */
export async function put(url, params = {}, headers = {}, auth = true) {
  headers = { ...headers, ...defaultHeaders };
  const putRequest = request(HttpMethods.PUT)
    .url(url)
    .headers(headers)
    .body(JSON.stringify(params))
    .build();

  return await sendRequest(putRequest, auth);
}

/**
 * Builds and sends DELETE request.
 * @param url
 * @param params
 * @param headers
 * @param auth
 * @returns {Promise<*>}
 */
export async function remove(url, params = {}, headers = {}, auth = true) {
  headers = { ...headers, ...defaultHeaders };
  const deleteRequest = request(HttpMethods.DELETE)
    .url(url)
    .headers(headers)
    .body(JSON.stringify(params))
    .build();

  return await sendRequest(deleteRequest, auth);
}

const client = {
  get,
  post,
  postFormData,
  patch,
  put,
  remove,
};

export default client;
