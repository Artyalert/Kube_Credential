import React, { useState } from "react";
import axios from "axios";

export default function VerifyPage() {
  const [id, setId] = useState("");
  const [output, setOutput] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
    setOutput(null);
    try {
      const payload = { id };
      const res = await axios.post("/api/verification/verify", payload);
      setOutput(res.data);
    } catch (e: any) {
      setOutput(e.response?.data || { error: e.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <label>ID<br/><input value={id} onChange={e=>setId(e.target.value)} /></label><br/>
      <button onClick={submit} disabled={loading || !id}>Verify</button>
      <pre style={{ marginTop: 12 }}>{JSON.stringify(output, null, 2)}</pre>
    </div>
  );
}
