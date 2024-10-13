// /pages/api/hello.js

export default function handler(req, res) {
    if (req.method === 'GET') {
      // Access query parameters
      const { name = 'world' } = req.query;
  
      // Respond with a personalized message
      const data = {
        message: `Hello, ${name}!`,
        success: true,
      };
  
      res.status(200).json(data);
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  