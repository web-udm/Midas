<?php

namespace App\Serializers;

use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class JsonSerializer extends Serializer
{
    public function __construct()
    {
        parent::__construct([new ObjectNormalizer()], [new JsonEncoder()]);
    }
}