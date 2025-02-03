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

    /*#[Route('api/quizz/', name: 'app_quizz_show')]
    public function get_all_quizz(QuizzRepository $quizzRepository, SerializerInterface $serializer): Response
    {
        $quizzList = $quizzRepository->findAll();
        $quizzJson = $serializer->serialize($quizzList, 'json');
        return new JsonResponse($quizzJson, 200, [], true);
    }*/

    #[Route('/quizz/create', name: 'app_quizz_create')]
    public function create(): Response
    {
        return $this->render('quizz/create.html.twig', [
            'controller_name' => 'QuizzController',
        ]);
    }
}
