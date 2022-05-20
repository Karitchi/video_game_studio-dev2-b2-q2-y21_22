<?php

namespace App\Document;

class Session
{
    //true if login is validated
    private $loged = false;
    //true if someone is connected
    public $in_use = false;

    public function log_in($username, $password){
        //check credentials, start session if validated

    }

    public function log_out(){
        //stop session
    }
}