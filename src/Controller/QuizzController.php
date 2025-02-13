<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;

use Symfony\Component\Routing\Attribute\Route;
use App\Repository\QuizzRepository;

final class QuizzController extends AbstractController
{

    private HttpClientInterface $httpClient;

    public function __construct(HttpClientInterface $httpClient)
    {
        $this->httpClient = $httpClient;
    }

    #[Route('/quizz', name: 'app_quizz')]
    public function index(): Response
    {
        return $this->render('quizz/index.html.twig', [
            'controller_name' => 'QuizzController',
        ]);
    }


    #[Route('/quizz/create', name: 'app_quizz_create')]
    public function create(): Response
    {
        return $this->render('quizz/create.html.twig', [
            'controller_name' => 'QuizzController',
        ]);
    }

    #[Route('/quizz/play/{id}', name: 'app_quizz_play')]
    public function play($id): Response{
        return $this->render('quizz/play.html.twig', [
            'controller_name' => 'QuizzController',
            'id' => $id
        ]);
    }

    #[Route('/quizz/generate', name: 'app_quizz_generate')]
    public function generate() : Response{
        return $this->render('quizz/generate.html.twig', [
            'controller_name' => 'QuizzController',
        ]);
    }
}
