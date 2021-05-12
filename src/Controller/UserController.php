<?php

namespace App\Controller;

use App\Entity\User;
use App\Serializers\JsonSerializer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class UserController extends AbstractController
{
    #[Route(path: "/post_user", name: 'post_user')]
    public function postUser(Request $request, JsonSerializer $jsonSerializer, ValidatorInterface $validator): JsonResponse
    {
        /** @var User $user */
        $user = $jsonSerializer->deserialize($request->getContent(), User::class, 'json');

        $validationErrors = $validator->validate($user);

        if (empty($validationErrors[0]) === false) {
            return new JsonResponse([
                'status' => 400,
                'message' => $validationErrors[0]->getMessage()
            ], 400);
        }

        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($user);
        $entityManager->flush();

        return new JsonResponse([
            'status' => 200,
            'message' => 'Successful registration'
        ], 200);
    }
}