import { VercelRequest, VercelResponse } from "@vercel/node"


// We only keep this in for testing purposes.
export default (req: VercelRequest, res: VercelResponse) => {
  return res.send("Hello World")
}