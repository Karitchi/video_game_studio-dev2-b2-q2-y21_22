<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Flex\Response as FlexResponse;

use App\Document\User;
use App\Document\Jobs;
use App\Document\CompanyData;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\SerializerInterface;

class ApiController extends AbstractController
{
    /**
     * @Route("/api/users", name="api_users", methods={"GET"})
     */
    public function getUsers(DocumentManager $dm, SerializerInterface $serializer, User $userr)
    {
        $repository = $dm->getRepository(User::class);
        $users = $repository->findAll();

        $user_normalizer = $serializer->serialize($users, 'json');

        $json_decode = json_decode($user_normalizer);

        $repository = $dm->getRepository(User::class)->findBy(['email' => 'admin.email.com']);
        dd( $repository);

        //return $userr->pwsd_check($dm, $email_in='admin.email.com', $pwsd_in='pwsd');

        //return new JsonResponse($json_decode);
    }

    /**
     * @Route("/api/jobs", name="api_jobs", methods={"GET"})
     */
    public function getJobs(DocumentManager $dm, SerializerInterface $serializer)
    {
        $repository = $dm->getRepository(Jobs::class);
        $jobs = $repository->findAll();

        $jobs_normalizer = $serializer->serialize($jobs, 'json');

        return $this->json($jobs_normalizer);
    }

    /**
     * @Route("/api/company_data", name="api_company_data", methods={"GET"})
     */
    public function getCompanyData(DocumentManager $dm, SerializerInterface $serializer)
    {
        $repository = $dm->getRepository(CompanyData::class);
        $cd = $repository->findAll();

        $cd_normalizer = $serializer->serialize($cd, 'json');

        return $this->json($cd_normalizer);
    }


    /**
     * @Route("/contact", name="api_mail")
     */
    public function mailAPI(Request $request, MailerInterface $mailer)
    {
        if($_SERVER["REQUEST_METHOD"] == "POST"){
            $name = $_POST["Name"];
            $mail = $_POST["Mail"];
            $game = $_POST["Game"];
            $category = $_POST["Categ"];
            $message = $_POST["Msg"];


                $email = (new Email())
                ->from($mail)
                ->to('silvagaming998@gmail.com')
                ->subject('Testing the mail sender from symfony.')
                ->text($message)
                ->html('<p> This is a message </p>');
        
            $mailer->send($email);

        }
        return $this->render('default/index.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }
}
