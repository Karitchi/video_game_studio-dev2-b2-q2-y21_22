<?php

namespace App\Document;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

use Doctrine\ODM\MongoDB\DocumentManager;
use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;

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

    public function pwsd_check($dm, $normalizer, $email='', $pwsd=''){
        $repository = $dm->getRepository(User::class)->findBy(['email' => 'admin.email.com']);
        $norm = $normalizer->normalize($repository);

        return password_verify($pwsd ,$norm[0]["password"]);
    }
}