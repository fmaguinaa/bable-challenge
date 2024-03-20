import { Category } from "./Category";

export type Magazine = {
  "id": number;
  "title": string;
  "resume": string;
  "pub_date": string;
  "url_image_cover": string;
  "category": Category;
}
