<?php

namespace App\Controller;

use App\Entity\User;
use App\Serializers\JsonSerializer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserController extends AbstractController
{
    #[Route(path: "/post_user", name: 'post_user')]
    public function postUser(
        Request $request,
        JsonSerializer $jsonSerializer,
        ValidatorInterface $validator,
        UserPasswordEncoderInterface $passwordEncoder
    ): JsonResponse {
        try {
            /** @var User $user */
            $user = $jsonSerializer->deserialize($request->getContent(), User::class, 'json');

            $userRepository = $this->getDoctrine()->getRepository(User::class);

            if ($userRepository->findBy(["email" => $user->getEmail()]) !== null) {
                throw new \Exception('user with this email is already exists');
            };

            $user->setPassword($passwordEncoder->encodePassword($user, $user->getPassword()));

            $validationErrors = $validator->validate($user);

            if (empty($validationErrors[0]) === false) {
                throw new \Exception($validationErrors[0]->getMessage());
            }

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();

            return new JsonResponse([
                'status' => 200,
                'message' => 'Successful registration'
            ], 200);
        } catch (\Exception $e) {
            return new JsonResponse([
                'status' => 400,
                'message' => $e->getMessage()
            ], 400);
        }
    }
}