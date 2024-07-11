// pages/api/data.js

export default function handler(req, res) {
  // 检查请求方法
  if (req.method === 'GET') {
    // 返回 JSON 数据
    res.status(200).json({ message: 'Hello, world!', data: [1, 2, 3, 4, 5] });
  } else {
    // 如果不是 GET 请求，返回 405 方法不允许
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
