<?php

namespace App\Document;

use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;

/**
 * @MongoDB\Document
 */
class Games
{
    /**
     * @MongoDB\Id
     */
    private $_id;

    /**
     * @MongoDB\Field(type="string")
     */
    public $game_name;

    /**
     * @MongoDB\Field(type="string")
     */
    public $icon;

    /**
     * @MongoDB\Field(type="string")
     */
    public $status;

    /**
     * @MongoDB\Field(type="collection")
     */
    public $page;
}