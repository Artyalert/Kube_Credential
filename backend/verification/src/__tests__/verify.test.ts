import request from "supertest";
import app from "../index";

describe("Verification API", () => {
  it("returns 400 for missing id", async () => {
    const res = await request(app).post("/verify").send({ name: "No ID" });
    expect(res.status).toBe(400);
  });

  it("returns 404 for unknown credential", async () => {
    const res = await request(app).post("/verify").send({ id: "non-existent-cred" });
    expect(res.status).toBe(404);
  });
});
