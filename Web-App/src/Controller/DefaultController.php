<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Doctrine\Common\Annotations\AnnotationReader;
use Symfony\Component\Serializer\Mapping\Factory\ClassMetadataFactory;
use Symfony\Component\Serializer\Mapping\Loader\AnnotationLoader;

use App\Document\User;
use Doctrine\ODM\MongoDB\DocumentManager;

class DefaultController extends AbstractController
{
    /**
     * @Route("/{reactRouting}", name="about", requirements={"reactRouting"="^(?!admin)+(?!api).+"}, defaults={"reactRouting": null})
     */
    public function index(): Response
    {
        return $this->render('default/index.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }


    /**
     * @Route("/admin", name="admin")
     */
    public function admin(): Response
    {
        return $this->render('default/admin.html.twig');
    }

    /**
     * @Route("/api/users", name="users")
     */
    public function test(DocumentManager $dm): Response
    {
        $repository = $dm->getRepository(User::class);
        $Users = $repository->findAll();

        $classMetadataFactory = new ClassMetadataFactory(new AnnotationLoader(new AnnotationReader()));
        $normalizer = new ObjectNormalizer($classMetadataFactory);
        $serializer = new Serializer([new ObjectNormalizer()]);

        $data = $serializer->deserialize($Users, 'json');

        dd($data);
    }

}