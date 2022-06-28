"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
  if(currentUser){
    $submit.show();
    $favorites.show();
    $myStories.show();



  }

}
$body.on("click", "#nav-all", navAllStories);



function submitFormShowClick() {
 if($storyForm.css("display") === 'none'|| $storyForm.css("display")=== 'inline'){
  $storyForm.show();
 }else{
  $storyForm.hide();
 }
 // this works but only after double clicking submit, I don't know why...
// if($storyForm.hasClass("hidden")){
//   $storyForm.show();
//   $storyForm.removeClass("hidden")


//  }else{
//   $storyForm.addClass("hidden")
//  $storyForm.hide();

//  }
}
$('#submit').on("click", submitFormShowClick);


/** Show login/signup on click on "login" */




function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $submit.show();
  $loginForm.hide();
  $signupForm.hide();
  $navUserProfile.text(`${currentUser.username}`).show();
  $favorites.show();
  $myStories.show();
}


// hides the items not in the favorites array
function navTofavorites(){
  console.log('hello');
   let lis = $('li');
   let arrayFav = [];
  let favorites = currentUser.favorites;
  for (let x = 0; x < favorites.length; x++) {
    arrayFav.push(favorites[x].storyId);
   
  }
  for (let x = 0; x < lis.length; x++) {
    if($.inArray( lis[x].id, arrayFav) === (-1)){

      $(`#${lis[x].id}`).toggleClass("hidden");
    };
  }
  }

  //event listener for favorites link
$favorites.on("click", ()=> {
  navTofavorites() })


  //move to my stories
  function navToMyStories() {
    console.log('hello');
    let arrayOwn = [];
   let ownStories = currentUser.ownStories;
   for (let x = 0; x < ownStories.length; x++) {
     arrayOwn.push(ownStories[x].storyId);
    
   }
   for (let x = 0; x < storyList.length; x++) {
     if($.inArray( storyList[x].storyId, arrayOwn) === (-1)){
 
       $(`#${storyList[x].storyId}`).hide();
     };
   }
    
  }
  $myStories.on("click", ()=> {
    navToMyStories() })
