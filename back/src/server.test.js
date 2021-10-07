/* global describe, test, expect */
// eslint-disable-next-line node/no-unpublished-require
const request = require("supertest");

const app = require("./app");

describe("Test the root path", () => {
  test("It should response the GET method", (done) => {
    request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("유저 id에 따른 GET 요청", () => {
  test("유저 아이디가 1인 유저를 요청에 응답해야 합니다.", (done) => {
    request(app)
      .get("/users/1")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("유저 아이디가 2인 유저를 요청에 찾지 못해야 합니다.", (done) => {
    request(app)
      .get("/users/2")
      .then((response) => {
        expect(response.statusCode).toBe(404);
        done();
      });
  });
});
