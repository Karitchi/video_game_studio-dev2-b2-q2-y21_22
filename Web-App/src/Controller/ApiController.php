<?php

namespace App\Controller;

use phpDocumentor\Reflection\Types\This;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ObjectManager;


use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Flex\Response as FlexResponse;

use App\Document\User;
use App\Document\Jobs;
use App\Document\CompanyData;
use App\Document\Games;
use Doctrine\ODM\MongoDB\DocumentManager;

use Symfony\Component\Serializer\Normalizer\NormalizerInterface;

use Symfony\Component\Serializer\SerializerInterface;

class ApiController extends AbstractController
{
    public bool $loggerState = false;

    /**
     * @Route("/api/users", name="api_users", methods={"POST"})
     */
    public function getUsers(DocumentManager $dm, SerializerInterface $serializer,NormalizerInterface $normalizer, User $userr)
    {
        header("Access-Control-Allow-Origin: *");

        $repository = $dm->getRepository(User::class);
        $users = $repository->findAll();

        $user_normalizer = $serializer->serialize($users, 'json');

        $json_decode = json_decode($user_normalizer);

        $ss = $userr->pwsd_check($dm, $normalizer, $email='admin.email.com', $pwsd='pwsd');

        //$dd = password_hash($ss, PASSWORD_BCRYPT);
        //post insted of get for forms

        dd($ss);
    }

    /**
     * @Route("/api/jobs", name="api_jobs", methods={"GET"})
     */
    public function getJobs(DocumentManager $dm, SerializerInterface $serializer)
    {
        header("Access-Control-Allow-Origin: *");

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
        header("Access-Control-Allow-Origin: *");

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
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
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

    /**
     * @Route("/api/games", name="api_games", methods={"GET"})
     */
    public function getGames(DocumentManager $dm, SerializerInterface $serializer)
    {
        header("Access-Control-Allow-Origin: *");

        $repository = $dm->getRepository(Games::class);
        $games = $repository->findAll();

        $games_normalizer = $serializer->serialize($games, 'json');

        return $this->json($games_normalizer);

    }

    /**
     * @Route("/api/logger_state", name="api_logger_state", methods={"GET"})
     */
    public function getLoginState(SerializerInterface $serializer){
        if ($this->loggerState === false){
            setcookie('logstate', 'false', time() + 86400, '/admin');
            return $this->json('{"logstate": "invalid"}');
        }
        elseif ($this->loggerState === true){
            setcookie('logstate', 'true', time() + 86400, '/admin');
            return $this->json('{"logstate": "valid"}');
        }
    }

    /**
     * @Route("/admin", name="api_logger")
     */
    public function getUserForm(Request $request, SerializerInterface $serializer, NormalizerInterface $normalizer, DocumentManager $dm, User $userr)
    {
        $this->getLoginState($serializer);

        setcookie('emptyUsername', 'false');
        setcookie('logingError', 'false');
        setcookie('emptyPassword', 'false');

        $repository = $dm->getRepository(User::class);
        $users = $repository->findAll();


        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $username = $_POST['username'];
            $password = $_POST['password'];

            if (empty($username) or empty($password)) {
                if (empty($username)) {
                    setcookie('emptyUsername', 'true');
                }
                if (empty($password)) {
                    setcookie('emptyPassword', 'true');
                }
            } else {
                $userValidate = $userr->pwsd_check($dm, $normalizer, $email = $username, $pwsd = $password);

                if (!$userValidate) {
                    setcookie('logingError', 'true');
                } else {
                    $this->loggerState = true;
                    $this->getLoginState($serializer);
                }
            }
        }

        return $this->render('default/index.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }

}
