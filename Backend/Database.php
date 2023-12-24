<?php

class Database
{
    private $PDOInstance = null;
    private static $instance = null;

    const DB_HOST = 'mysql-sae3-a-01.alwaysdata.net';
    const DB_NAME = 'sae3-a-01_database';
    const DB_USER = ' sae3-a-01_admin';
    const DB_PWD = 'useMAN!';
    private function __construct()
    {
        $this->PDOInstance = new \PDO('mysql:host='.self::DB_HOST.";dbname=".self::DB_NAME,self::DB_USER,self::DB_PWD);
    }

    public static function getInstance() {
        if(is_null(self::$instance))
            self::$instance = new Database();
        return self::$instance;
    }

    public function __call($method, $params) {
        if($this->PDOInstance == NULL) {
            self::__construct();
        }
        return call_user_func_array(array($this->PDOInstance, $method), $params);
    }
}
