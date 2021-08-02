const queryString = require("query-string");

export default function request(method) {
  /**
   * Request method
   * @type {string}
   * @private
   */
  let _method = method;

  /**
   * Request URL
   * @type {string}
   * @private
   */
  let _url = "";

  /**
   * Request headers
   * @type {{}}
   * @private
   */
  let _headers = {};

  /**
   * Request body
   * @type {undefined|string}
   * @private
   */
  let _body = undefined;

  /**
   * Default request options
   * @type {{}}
   * @private
   */
  const _defaults = {
    // no-cors, *cors, same-origin
    mode: "cors",
    // include, *same-origin, omit
    credentials: "include",
    // manual, *follow, error
    redirect: "follow",
    // no-referrer, *client
    referrerPolicy: "no-referrer",
    headers: {},
  };

  /**
   * Request options
   * @type {{}}
   * @private
   */
  let _options = { ..._defaults, method: method };

  /**
   * Gets request method
   * @returns {*}
   */
  const getMethod = () => _method;

  /**
   * Sets request url.
   * @param url
   * @param params
   * @returns {url}
   */
  const url = function (url, params = undefined) {
    _url = params ? url + "?" + queryString.stringify(params) : url;
    return this;
  };

  const getUrl = () => _url;

  /**
   * Sets request headers.
   * @param headers
   * @returns {headers}
   */
  const headers = function (headers) {
    _headers = headers;
    return this;
  };

  /**
   * Gets request headers.
   * @returns {{}}
   */
  const getHeaders = () => _headers;

  /**
   * Sets request body.
   * @param data
   * @returns {body}
   */
  const body = function (data) {
    _body = data;
    return this;
  };

  /**
   * Gets request body.
   * @returns {string}
   */
  const getBody = () => _body;

  /**
   * Builds request options.
   * @returns {build}
   */
  const build = function () {
    _options = { ..._defaults, method: _method, headers: { ..._headers } };

    if (_body) {
      _options = { ..._options, body: _body };
    }

    return this;
  };

  /**
   * Gets request options.
   * @returns {{}}
   */
  const getOptions = () => _options;

  return {
    url,
    getUrl,
    headers,
    getHeaders,
    body,
    getBody,
    build,
    getMethod,
    getOptions,
  };
}
