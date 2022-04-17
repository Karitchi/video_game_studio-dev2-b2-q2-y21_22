<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class GetUsersController extends AbstractController
{
    #[Route('/get/users', name: 'app_get_users')]
    public function index(): Response
    {
        return $this->render('get_users/index.html.twig', [
            'controller_name' => 'GetUsersController',
        ]);
    }
}