let visitors = 394;

export default function handler(req, res) {
  visitors += 1;

  res.status(200).json({
    visitors,
  });
}