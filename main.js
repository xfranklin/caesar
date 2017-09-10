var mainApp = angular.module('mainApp',[]);

mainApp.controller("cesar",function($scope){

//symbols
	$scope.symbols=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
	"p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7",
	"8","9","%","+","\\","/","'","!","#","$","^","?",":",".","(",")","{","}",
	"[","]","`","-","_","A","B","C","D","E","F","G","H","I","J","K","L","M",
	"N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

	//random password
	$scope.generatedPassword = function(value){
		var newpassword = [];
		for (var i = 0; i < value; i++){
			var randomNumber = Math.round(0-0.5+Math.random()*(82-0+1));
			newpassword+=$scope.symbols[randomNumber];}
		$scope.newpassword=newpassword;}

	//array from key and word
	$scope.indexArrayInter =  function (value){
		var indexArray = [];
		if(value){
			for (var i = 0; i < value.length; i++){
				for (var j = 0; j < $scope.symbols.length; j++){
					if (value[i]==$scope.symbols[j]){
						indexArray.push(j);
						continue;}}}
			return indexArray;}};

//encrypt and decrypt
$scope.cipherCaesar = function(){
	var countCharPass = $scope.indexArrayInter($scope.code);
	var countCharKey = $scope.indexArrayInter($scope.key);

	//key repeat count
	var keyRepeat = Math.ceil(countCharPass.length/countCharKey.length);
	var keyArr = [];
	for (var i = 0; i < keyRepeat; i++){
		for (var j = 0; j < countCharKey.length; j++){
			keyArr.push(countCharKey[j]);}}

	//encode or decode
	var indexCipher =[];
	if ($scope.mode==1){
		for (var i = 0; i < countCharPass.length; i++){
			indexCipher.push((countCharPass[i]+keyArr[i])%83);}}
	if ($scope.mode==0){
	 for (var i = 0; i < countCharPass.length; i++) {
		 if((countCharPass[i]-keyArr[i])<0)
			indexCipher.push(83+countCharPass[i]-keyArr[i]);
		 else
			indexCipher.push(countCharPass[i]-keyArr[i]);}}

 //convert from index to char
 var cipher=[];
 for (var i = 0; i < indexCipher.length; i++){
	 cipher.push($scope.symbols[indexCipher[i]]);}
 $scope.cipher = cipher.join("");}

$scope.charCount = 4;

$scope.sum = function(){
	 $scope.charCount++;}
$scope.min = function(){
		if ( $scope.charCount===1)
		console.log("MIN");
		else
		$scope.charCount--;}});
