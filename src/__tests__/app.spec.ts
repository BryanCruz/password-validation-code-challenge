import request from "supertest";
import app from "../app";

describe("Application", () => {
  it("Should get hello world", async () => {
    await request(app).get("/").expect(200).expect("Hello World");
  });

  it("Should get health check", async () => {
    await request(app)
      .get("/health")
      .expect(200)
      .expect("Content-Type", /json/)
      .expect({
        status: "healthy",
      });
  });

  it("Should use the router module in /password route", async () => {
    await request(app)
      .post("/password/check")
      .send({ password: "some password" })
      .expect(200)
      .expect({ valid: false });
  });
});
