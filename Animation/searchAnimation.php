<?php

$userSearchString = $_POST['searchStrFromForm'];
echo  "<h2>" . $userSearchString . "</h2>";

$secretURL = "Exam-Participation-Right-2022.txt";
/*$urlContents = file_get_contents($secretURL);

if(stripos($urlContents,$userSearchString)!==FALSE){
  //found
  echo "Your AM is found.";
}else{
  //not found
  echo "Your AM is not found.";
}*/

$array = file($secretURL);
if(array_search(strtolower($userSearchString), array_map('strtolower', $array))!==FALSE){
  //found
  //echo "Your AM is found.";
  echo  "<h3>" . $userSearchString . "</h3>";
}else{
  //not found
  echo "<h3>" . "Άγνωστος ΑΜ" . "</h3>";
  //echo  "<h2>" . $userSearchString . "</h2>";
}

?>
