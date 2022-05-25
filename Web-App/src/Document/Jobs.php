<?php

namespace App\Document;

use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;

/**
 * @MongoDB\Document
 */
class Jobs
{
    /**
     * @MongoDB\Id
     */
    private $_id;

    /**
     * @MongoDB\Field(type="string")
     */
    public $job_title;

    /**
     * @MongoDB\Field(type="string")
     */
    public $location;

    /**
     * @MongoDB\Field(type="string")
     */
    public $company_description;

    /**
     * @MongoDB\Field(type="hash")
     */
    public $skills_and_experience;

    /**
     * @MongoDB\Field(type="hash")
     */
    public $tasks;

    /**
     * @MongoDB\Field(type="string")
     */
    public $job_description;


}