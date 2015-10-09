(function IIFE() {
  'use strict';

  module.exports = {
    /**
     * @apiDefine InternalServerError
     * @apiError InternalServerError The request was unable to be fulfilled.
     * @apiErrorExample Internal Server Error:
     * HTTP/1.1 500 Internal Server Error
     * {
     *   "errors": [{
     *      "code": 1,
     *      "codeName": "INTERNAL_SERVER_ERROR"
     *      "description": "Descriptive error message",
     *      "message": "Message for the client"
     *    }]
     * }
     */
    serverError: {
      code: 1,
      codeName: 'INTERNAL_SERVER_ERROR'
    },
    /**
     * @apiDefine InvalidPayloadError
     * @apiError InvalidPayload The payload sent did not meet the requirements of the server.
     * @apiErrorExample Bad Request:
     * HTTP/1.1 400 Bad Request
     * {
     *   "errors": [{
     *     "code": 2,
     *     "codeName": "INVALID_PAYLOAD",
     *     "description": "<attribute> is missing or invalid",
     *     "message": "<attribute> is missing or invalid",
     *   }]
     * }
     */
    invalidInput: {
      code: 2,
      codeName: 'INVALID_INPUT'
    },
    /**
     * @apiDefine NotFoundError
     * @apiError NotFound The request could not be completed because a requested object was not found.
     * @apiErrorExample Not Found:
     * HTTP/1.1 404 Not Found
     * {
     *   "errors": [{
     *     "code": 3,
     *     "codeName": "NOT_FOUND",
     *     "description": "<Object or route> could not be found",
     *     "message": "<Object or route> could not be found",
     *   }]
     * }
     */
     notFound: {
       code: 3,
       codeName: 'NOT_FOUND'
     }
  };
})();
