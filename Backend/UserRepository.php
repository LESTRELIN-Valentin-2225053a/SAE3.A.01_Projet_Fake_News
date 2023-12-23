<?php


require 'Database.php';

class UserRepository
{

  const USER_BY_ID_QUERY = "SELECT * FROM USERS WHERE user_id = ?";


  public static function getUserById($ID_USER){
    $tableResUser = Database::getInstance()->prepare(self::USER_BY_ID_QUERY);
    $tableResUser->execute([$ID_USER]);
    if($tableResUser->rowCount() === 1) {
      return $tableResUser->fetch();
    } else
      return false;
  }
}
