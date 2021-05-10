<?php

namespace App\Controller;

use App\Entity\User;
use App\Serializers\JsonSerializer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;


class UserController extends AbstractController
{
    #[Route(path: "/post_user", name: 'post_user')]
    public function postUser(JsonSerializer $jsonSerializer)
    {
        return new JsonResponse(['t' => $jsonSerializer::class]);
    }
}