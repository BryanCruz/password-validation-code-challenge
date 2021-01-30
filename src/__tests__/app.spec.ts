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
});
