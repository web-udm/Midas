<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;

#[Route(path: "api", name: "user_api")]
class UserController extends AbstractController
{
    #[Route(path: "/post_user", name: 'post_user')]
    public function postUser(Request $request)
    {
        $ser = $this->get('serializer_mine');

        return new JsonResponse(['t' => 't']);

       /* $user = $ser->deserialize($request->getContent(), User::class, 'json');

        return new JsonResponse($ser->serialize($user, 'json'));*/
    }
}