<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;



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

}