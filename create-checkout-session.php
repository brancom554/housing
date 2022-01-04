<?php

require 'vendor/autoload.php';
// This is your test secret API key.
\Stripe\Stripe::setApiKey('sk_test_51K7EH6FOVchElOIAnpOAE9cBvDa9xg47xXaShLp3vBMXs2boU4nk9kwkq888tuATEoik6wvR8vvwkKuegyziNUwe00EvRNzWMe');

header('Content-Type: application/json');

$YOUR_DOMAIN = 'http://localhost/residence/';


$checkout_session = \Stripe\Checkout\Session::create([
  'line_items' => [
      [
        'price_data' => [
          'currency' => 'usd',
          'product_data' => [
            'name' => 'Building',
          ],
          'unit_amount' => 2000,
        ],
        'quantity' => 1,
      ]
  ],
  'mode' => 'payment',
    'success_url' => $YOUR_DOMAIN . '/',
    'cancel_url' => $YOUR_DOMAIN . '/',
]);

header("HTTP/1.1 303 See Other");
header("Location: " . $checkout_session->url);