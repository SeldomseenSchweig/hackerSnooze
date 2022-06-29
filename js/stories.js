"use strict";

// This is the global list of the stories, an instance of StoryList
let storyList;

/** Get and show stories when site first loads. */

async function getAndShowStoriesOnStart() {
  storyList = await StoryList.getStories();
  $storiesLoadingMsg.remove();
  $('.stars').hide()

  putStoriesOnPage();
}
$storyForm.on('submit',formSubmitClick)

async function formSubmitClick(){ 
  location.reload();
  let title = $('#title').val();
  let author = $('#author').val();
  let url = $('#url').val();
  let submittedStory = {
    author,
    title,
    url
  } 
 storyList.addStory(currentUser, submittedStory);
 storyList = await StoryList.getStories();
 putStoriesOnPage();
 location.reload();
 

}

/**
 * A render method to render HTML for an individual Story instance
 * - story: an instance of Story
 *
 * Returns the markup for the story.
 */

function generateStoryMarkup(story, showDeleteBtn = false) {
  // console.debug("generateStoryMarkup", story);

 
/// Added stars as checkboxes
  const hostName = story.getHostName();
  const showStar = Boolean(currentUser);

  return $(`
      <li id="${story.storyId}">
      ${showDeleteBtn ? getDeleteBtnHTML() : ""}
      ${showStar ? getStarHTML(story, currentUser) : ""}
        <a href="${story.url}" target="a_blank" class="story-link">
          ${story.title}
        </a>
        <small class="story-hostname">(${hostName})</small>
        <small class="story-author">by ${story.author}</small>
        <small class="story-user">posted by ${story.username}</small>
      </li>
    `);
}
function getDeleteBtnHTML() {
  return `
      <span class="trash-can delete">
        <i class="fas fa-trash-alt"></i>
      </span>`;
}

function getStarHTML() {
  return `
  <input class="star" type="checkbox" title="favorite story" checked>`;
}
//<input class="star" type="checkbox" title="favorite story"> checked
/** Gets list of stories from server, generates their HTML, and puts on page. */

function putStoriesOnPage() {
  console.debug("putStoriesOnPage");

  $allStoriesList.empty();

  // loop through all of our stories and generate HTML for them
  for (let story of storyList.stories) {
    const $story = generateStoryMarkup(story);
    $allStoriesList.append($story);
  }

  $allStoriesList.show();
}


// async function removeFromStories(storyId){

//   await axios({
//     url: `${BASE_URL}/users/${this.username}/stories/${storyId}`,
//     method: 'DELETE',
//     data: { token : this.loginToken },
//   });
// };


function putOwnStoriesOnPage() {
  console.debug("putStoriesOnPage");
  

  $allStoriesList.empty();

  // loop through all of our stories and generate HTML for them
  for (let story of currentUser.ownStories) {
    const $story = generateStoryMarkup(story,true);
    $allStoriesList.append($story);
  }

  $allStoriesList.show();
}
function putFavoriteStoriesOnPage() {
  console.debug("putFavoriteStoriesOnPage");


  $allStoriesList.empty();

  // loop through all of our stories and generate HTML for them
  for (let story of currentUser.favorites) {
    console.log(story)
    const $story = generateStoryMarkup(story);
    $allStoriesList.append($story);
  }

  $allStoriesList.show();
}
