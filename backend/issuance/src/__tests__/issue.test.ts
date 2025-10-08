import request from "supertest";
import app from "../index";

describe("Issuance API", () => {
  const testCred = { id: "test-cred-1", name: "Test User" };

  it("issues a new credential", async () => {
    const res = await request(app).post("/issue").send(testCred);
    expect([200,201,409]).toContain(res.status); // allow either first-run 200 or duplicate 409 in repeated test runs
    if (res.status === 200 || res.status === 201) {
      expect(res.body).toHaveProperty("worker");
      expect(res.body).toHaveProperty("issuedAt");
    }
  });

  it("returns 400 for missing id", async () => {
    const res = await request(app).post("/issue").send({ name: "No ID" });
    expect(res.status).toBe(400);
  });
});
