<?php
require_once 'google-api-php-client/src/apiClient.php';
require_once 'google-api-php-client/src/contrib/apiPlusService.php';

session_start();

$client = new apiClient();
$client->setApplicationName("Google+ PHP Starter Application");

//*********** Replace with Your API Credentials **************
$client->setClientId('665757994116-tlme8vqed0njqngoeq11har8h5o982r2.apps.googleusercontent.com');
$client->setClientSecret('be0CHU2gepIsIywEtic-sXkH');
$client->setRedirectUri('http://localhost/SpanIt/auth/googleplus/');
$client->setDeveloperKey('AIzaSyAqYUYfL0tsqYf5fQs8u0z7xHamCbmCNAU');
//************************************************************
 
$client->setScopes(array('https://www.googleapis.com/auth/plus.me'));
$plus = new apiPlusService($client);

if (isset($_REQUEST['logout'])) {
  unset($_SESSION['access_token']);
}

if (isset($_GET['code'])) {
  $client->authenticate();
  $_SESSION['access_token'] = $client->getAccessToken();
  header('Location: http://' . $_SERVER['HTTP_HOST'] . $_SERVER['PHP_SELF']);
}

if (isset($_SESSION['access_token'])) {
  $client->setAccessToken($_SESSION['access_token']);
}

if ($client->getAccessToken()) {
  $me = $plus->people->get('me');

  $optParams = array('maxResults' => 100);
  $activities = $plus->activities->listActivities('me', 'public', $optParams);


  $_SESSION['access_token'] = $client->getAccessToken();
} else {
  $authUrl = $client->createAuthUrl();
}
?>