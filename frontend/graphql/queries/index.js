import { GET_ALL_PROJECTS } from "./get-projects";
import { GET_PROJECTS_BY_CATEGORY } from "./get-projects-by-category";
import { GET_PROJECTS_BY_ID } from "./get-projects-by-id";
import { GET_TEASER } from "./get-teaser";
import { GET_ABOUT_ME } from "./get-about-me";
import { GET_MY_ETHICS } from "./get-my-ethics";
import { GET_SAY_HELLO } from "./get-say-hello";
import { GET_BEHIND_THE_SCENE } from "./get-behind-the-scene";
import { GET_PROFILE } from "./get-profile";

const queries = {
	GET_ALL_PROJECTS: GET_ALL_PROJECTS,
	GET_PROJECTS_BY_CATEGORY: GET_PROJECTS_BY_CATEGORY,
	GET_PROJECTS_BY_ID: GET_PROJECTS_BY_ID,
	GET_TEASER: GET_TEASER,
	GET_ABOUT_ME: GET_ABOUT_ME,
	GET_MY_ETHICS: GET_MY_ETHICS,
	GET_SAY_HELLO: GET_SAY_HELLO,
	GET_BEHIND_THE_SCENE: GET_BEHIND_THE_SCENE,
	GET_PROFILE: GET_PROFILE
};

export default queries;