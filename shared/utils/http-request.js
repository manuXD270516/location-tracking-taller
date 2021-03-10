/**
 * @author manuel saavedra
 * @email saavedramanuel100@gmail.com
 * @create date 2020-07-23 01:47:50
 * @modify date 2020-07-23 01:47:50
 * @desc [description]
 */

// STATUS CODE HTTP
const OK_HTTP = 200;
const INTERNAL_SERVER_ERROR_HTTP = 500;
const BAD_REQUEST_HTTP = 400;
const UNAUTHORIZED_HTTP = 401;
const NOT_FOUND_HTTP = 404;

// STATUS CODE DOMAIN
const RESOURCE_ALREADY_EXISTS = 1000;
const RESOURCE_UPDATED_SUCESS = 1001;
const RESOURCE_UPDATED_FAILURE = 1002;
const RESOURCE_DELETED_SUCESS = 1003;
const RESOURCE_DELETED_FAILURE = 1004;
const TRANSACTION_ERROR = 2000;

// STATUS CODE OPERATION
const OPERATION_CREATED_SUCESS = 2000;
const OPERATION_CREATED_FAILURE = 2001;
/*const RESOURCE_ALREADY_EXISTS = 1000;*/

// STATUS CODE LOADING ORDER
const LOADING_ORDER_CREATED_SUCESS = 3000
const CARRIER_ASSIGNMENT_OTHER_LOADING_ORDER = 3001;
const TRUCK_ALLOWANCE_LIMIT_EXCEEDED = 3002

module.exports = {
  responseServer: (res, content, statusCode = OK_HTTP) => {
    // aplicar logica necesaria en caso de que algun tipo de respuesta asi lo precisara
    switch (statusCode) {
      // STATUS CODE HTTP
      case OK_HTTP:
        return res.json(content);

      case INTERNAL_SERVER_ERROR_HTTP:
        console.log({ content });
        return res.status(INTERNAL_SERVER_ERROR_HTTP).json({ content });

      case BAD_REQUEST_HTTP:
        return res.status(BAD_REQUEST_HTTP).json({ content });

      case UNAUTHORIZED_HTTP:
        return res.status(UNAUTHORIZED_HTTP).json(content);

      case NOT_FOUND_HTTP:
        content = `${content} no encontrado/a`;
        return res.json({ content });

      // STATUS CODE DOMAIN
      case RESOURCE_ALREADY_EXISTS:
        content = `${content} no se puede crear, ya se encuentra registrado/a`;
        return res.json({ content });

      case RESOURCE_UPDATED_SUCESS:
        content = `${content} actualizado/a correctamente`;
        return res.json({ content });

      case RESOURCE_UPDATED_FAILURE:
        content = `${content} no se puede actualizar, vuelva a intentar nuevamente`;
        return res.json({ content });

      case RESOURCE_DELETED_SUCESS:
        content = `${content} eliminado/a correctamente`;
        return res.json({ content });

      case RESOURCE_DELETED_FAILURE:
        content = `${content} no se puede eliminar, vuelva a intentar nuevamente`;
        return res.json({ content });
      case TRANSACTION_ERROR:
        content = `accion detenida inesperadamente, error en transaccion`;
        return res.json({ content });

      /* STATUS CODE OPERATION
      case OPERATION_CREATED_SUCESS:
        content = `${content} no se puede eliminar, vuelva a intentar nuevamente`;
        return res.json({ content });
      case OPERATION_CREATED_FAILURE:
        content = `accion detenida inesperadamente, error en transaccion`;
        return res.json({ content }); */
      default:
        break;
    }
  },

  StatusCodeHTTP: {
    OK_HTTP,
    INTERNAL_SERVER_ERROR_HTTP,
    BAD_REQUEST_HTTP,
    UNAUTHORIZED_HTTP,
    NOT_FOUND_HTTP,
  },
  // Utilizarlos para gestionar las tablas planas
  StatusCodeDomain: {
    RESOURCE_ALREADY_EXISTS,
    RESOURCE_UPDATED_SUCESS,
    RESOURCE_UPDATED_FAILURE,
    RESOURCE_DELETED_SUCESS,
    RESOURCE_DELETED_FAILURE,
    TRANSACTION_ERROR,
  },
  StatusCodeOperation: {
    OPERATION_CREATED_SUCESS,
    OPERATION_CREATED_FAILURE,
  },
  StatusCodeLoadingOrder: {
    LOADING_ORDER_CREATED_SUCESS,
    CARRIER_ASSIGNMENT_OTHER_LOADING_ORDER,
    TRUCK_ALLOWANCE_LIMIT_EXCEEDED,
  },
};
