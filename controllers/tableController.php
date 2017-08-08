<?php
/**
 * Created by PhpStorm.
 * User: 34011-79-19
 * Date: 08/08/2017
 * Time: 08:39
 */



require_once "mainController.php";
class tableController extends \mainController\mainController
{

    public $title;
    public $data = array();

    public function __contruct(){
        main();

    }
    public function main(){
        $imp = file("includes/csv/export.2csv");
        $aOfData = array();
        for($i = 0; $i < count($imp); $i++){
            $aOfData[$i] = str_replace("LINA", " ", $imp[$i]);
            $aOfData[$i] = explode(";", $imp[$i]);
        }
        $this->data = $aOfData;
        return $this->render('views/table.html', array($this->data, $this->title));
    }

}
