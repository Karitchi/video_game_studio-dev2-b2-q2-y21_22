<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Flex\Response as FlexResponse;

class EmailController extends AbstractController{

    /**
     * @Route("/api/email")
     */
    
    public function sendEmail(MailerInterface $mailer){

        $email = (new Email())
        ->from('gb_nechifor@yahoo.com')
        ->to('bagpulain_steam@yahoo.com')
        ->subject('Testing mail tuto')
        ->html('<p> It worked! </p>');

    $mailer->send($email);

    dd("Email sent");
    }

    
}

?>


