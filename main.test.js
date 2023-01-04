import { sort, search, newsList } from "./main.js";

//Example testing for search function
test("Search function testing", () => {
  expect(search("web")).toBe("I am a cool web developer");
});

test("Search function testing", () => {
  expect(search("what films")).toBe("What films should an aspiring journalist watch?");
});

test("Search function testing", () => {
  expect(search("tv")).toBe("'Nightmare' TV show 'Euphoria — health threat or high art?");
});

test("Search function testing", () => {
  expect(search("Colvin")).toBe("Marie Colvin shined a light on war-torn corners of the world");
});