<?php

namespace App\Document;

use Doctrine\ODM\MongoDB\DocumentManager;
use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;

/**
 * @MongoDB\Document
 */
class User
{
    /**
     * @MongoDB\Id
     */
    private $_id;
    /**
     * @MongoDB\Field(type="string")
     */
    public $email;

    /**
     * @MongoDB\Field(type="string")
     */
    public $password;

    public function pwsd_check(DocumentManager $dm, $email_in, $pwsd_in){
        $repository = $dm->getRepository(User::class)->findBy(['email' => 'admin.email.com']);
        return json_decode($repository);
    }
}