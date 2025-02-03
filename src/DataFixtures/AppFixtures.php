<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Question;
use App\Entity\Answer;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        for ($i = 1; $i <= 20; $i++) {

            /* Creation des questions */
            $difficultyList = ['easy', 'medium', 'hard'];
            $question = new Question();
            $question->setDescription('Question n°' . $i);
            $question->setDifficulty($difficultyList[array_rand($difficultyList)]);
            $manager->persist($question);
            $manager->flush();

            /* Creation des réponses */
            for ($j = 1; $j <= 4; $j++) {
                $answer = new Answer();
                $answer->setValue('Réponse n°' . $j);
                $answer->setIsCorrect($j === 1);
                $answer->setQuestionId($question->getId());
                $manager->persist($answer);
            }

        }

        $manager->flush();
    }
}
