"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}
$body.on("click", "#nav-all", navAllStories);



function submitFormShowClick() {
  console.log("hello")
  

 if($storyForm.hasClass("hidden")){
   $
  $storyForm.removeClass('hidden');

 }else{

  $storyForm.addClass('hidden');

 }
  //{('#storyForm').css("display", 'inline' )}
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
  $submit.show()
  $navUserProfile.text(`${currentUser.username}`).show();
}
