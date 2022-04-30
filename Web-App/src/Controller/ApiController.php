<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use App\Document\User;
use App\Document\Jobs;
use App\Document\CompanyData;
use Doctrine\ODM\MongoDB\DocumentManager;

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

        dd($user_normalizer);
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
}
