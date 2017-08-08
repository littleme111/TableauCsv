<?php
/**
 * Created by PhpStorm.
 * User: 34011-79-19
 * Date: 08/08/2017
 * Time: 08:33
 */

namespace frontController;



//Explode the url (with replacement of %2F created by wordpress.
    // Get the last part of the url to call controller with same name.

    $params = $_SERVER['REQUEST_URI'];
    $params = explode('/', $params);
    $cont = $params[3];
    //Append Controller to the url.
    $cont .= 'Controller';

    require_once 'controllers/'.$cont.'.php';
//    $cont = 'tableController/'.$cont;
//    echo $cont;
    //Instanciate the corresponding controller.
    $controller = new $cont();
    $controller->main();








