<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use App\Document\User;
use Doctrine\ODM\MongoDB\DocumentManager;

class DefaultController extends AbstractController
{
    /**
     * @Route("/{reactRouting}", name="about", requirements={"reactRouting"="^(?!admin)+(?!test).+"}, defaults={"reactRouting": null})
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
     * @Route("/test", name="test")
     */
    public function test(DocumentManager $dm): Response
    {
        $repository = $dm->getRepository(User::class);
        $Users = $repository->findAll();

        dd($Users);
    }

}