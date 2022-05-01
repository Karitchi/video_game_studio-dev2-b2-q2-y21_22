<?php

namespace App\Document;

use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;

/**
 * @MongoDB\Document
 */
class CompanyData
{
    /**
     * @MongoDB\Id
     */
    private $_id;

    /**
     * @MongoDB\Field(type="string")
     */
    public $company_email;

    /**
     * @MongoDB\Field(type="string")
     */
    public $company_description;

    /**
     * @MongoDB\Field(type="collection")
     */
    public $links;

    /**
     * @MongoDB\Field(type="collection")
     */
    public $address;
}