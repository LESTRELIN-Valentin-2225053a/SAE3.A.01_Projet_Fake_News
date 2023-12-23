<?php

require 'UserRepository.php';

switch ($_SERVER('REQUEST_METHOD')){
  case 'GET':
    //Requete SELECT
    echo json_encode(UserRepository::getUserById(45));
    break;
  case 'POST':
    //Requete UPDATE
    break;
  case 'PUT':
    //Requete INSERT
    break;
  case 'DELETE':
    //Requete DELETE
    break;
  default:
    header("HTTP/1.1 400 Bad Request");
}
