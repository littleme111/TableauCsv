<?php
/**
 * Created by PhpStorm.
 * User: 34011-79-19
 * Date: 08/08/2017
 * Time: 08:41
 */

namespace mainController;


class mainController
{
    public $view;
    public $data;

    public function render($view, $data = []){
        $response = new mainController();
        $response->view = $view;
        require_once "$response->view";
        $response->data = $data;
        return $response;
    }
}