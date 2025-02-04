<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use App\Repository\QuizzRepository;

final class QuizzController extends AbstractController
{
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
}
